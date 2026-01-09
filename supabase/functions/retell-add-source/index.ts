// Supabase Edge Function: Add a website URL to Retell KB for the shared test agent
// Expects JSON: { websiteUrl: string }
// Requires env: RETELL_API_KEY, RETELL_KB_ID (fixed KB for shared agent)

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import Retell from "npm:retell-sdk@3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("RETELL_API_KEY");
    const kbId = Deno.env.get("RETELL_KB_ID");

    if (!apiKey) {
      return new Response("RETELL_API_KEY missing", { status: 500, headers: corsHeaders });
    }
    if (!kbId) {
      return new Response("RETELL_KB_ID missing (set to your shared KB id)", { status: 500, headers: corsHeaders });
    }

    const { websiteUrl } = await req.json();
    if (!websiteUrl || typeof websiteUrl !== "string") {
      return new Response("websiteUrl required", { status: 400, headers: corsHeaders });
    }

    const client = new Retell({ apiKey });

    const result = await client.knowledgeBase.addSources({
      knowledge_base_id: kbId,
      knowledge_base_urls: [websiteUrl],
    });

    const body = {
      sessionId: crypto.randomUUID(),
      knowledgeBaseId: result.knowledge_base_id ?? kbId,
      sourceIds: result.knowledge_base_sources?.map((s) => s.source_id).filter(Boolean) ?? [],
      status: result.status ?? "in_progress",
    };

    return new Response(JSON.stringify(body), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("retell-add-source error", error);
    return new Response("Internal error", { status: 500, headers: corsHeaders });
  }
});

// Supabase Edge Function: Cleanup placeholder.
// Accepts JSON: { knowledgeBaseId?, sourceIds?, sessionId? }
// TODO: When Retell exposes source deletion/reset, call that here.

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

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
    const payload = await req.json();
    console.log("cleanup request", payload);

    // Placeholder response until delete/reset API is available.
    const body = {
      ok: true,
      cleaned: false,
      message: "Cleanup stub: implement Retell delete/reset when available.",
    };

    return new Response(JSON.stringify(body), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("retell-cleanup error", error);
    return new Response("Internal error", { status: 500, headers: corsHeaders });
  }
});

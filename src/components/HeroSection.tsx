import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Play, Pause } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import heroVideo from "@/assets/landing page vid 1.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragging, setDragging] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => { if (!dragging) setProgress(v.currentTime); };
    const onMeta = () => setDuration(v.duration);
    const onEnded = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("ended", onEnded);
    };
  }, [dragging]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  const seekTo = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    const bar = progressRef.current;
    const v = videoRef.current;
    if (!bar || !v || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    v.currentTime = ratio * duration;
    setProgress(ratio * duration);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    seekTo(e);
    const onMove = (ev: MouseEvent) => seekTo(ev);
    const onUp = () => { setDragging(false); window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const seekToTouch = (e: React.TouchEvent<HTMLDivElement> | TouchEvent) => {
    const bar = progressRef.current;
    const v = videoRef.current;
    if (!bar || !v || !duration) return;
    const touch = "touches" in e ? e.touches[0] : (e as TouchEvent).touches[0];
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((touch.clientX - rect.left) / rect.width, 0), 1);
    v.currentTime = ratio * duration;
    setProgress(ratio * duration);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragging(true);
    seekToTouch(e);
    const onMove = (ev: TouchEvent) => seekToTouch(ev);
    const onEnd = () => { setDragging(false); window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const pct = duration ? (progress / duration) * 100 : 0;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[hsl(0_0%_3%)] pt-24 pb-16">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,hsl(0_0%_8%)_0%,hsl(0_0%_2%)_100%)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium backdrop-blur-sm animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>AI Voice Receptionist for Local Businesses</span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Every Call Answered.
          <br />
          <span className="text-white/60">Every Customer Served.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-white/50 max-w-2xl text-balance animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Your AI receptionist picks up when you can't: 24/7, human-sounding, trained on your business, ready from day one.
        </p>

        {/* Video */}
        <div
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.04)] animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <video
            ref={videoRef}
            src={heroVideo}
            playsInline
            className="w-full aspect-video object-cover"
          />

          {/* Big centre play/pause — fades out while playing, reappears on hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
          >
            <button
              onClick={togglePlay}
              className="w-24 h-24 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-2xl"
            >
              {playing
                ? <Pause className="w-10 h-10 fill-white text-white" />
                : <Play className="w-10 h-10 fill-white text-white ml-1" />
              }
            </button>
          </div>

          {/* Bottom controls bar — always visible */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pt-10 pb-4 flex flex-col gap-3">
            {/* Progress bar */}
            <div
              ref={progressRef}
              className="relative h-1.5 rounded-full bg-white/20 cursor-pointer group"
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
            >
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-white transition-all duration-100"
                style={{ width: `${pct}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `calc(${pct}% - 7px)` }}
              />
            </div>

            {/* Time */}
            <div className="flex items-center justify-end">
              <span className="text-white/50 text-xs tabular-nums">
                {fmt(progress)} / {fmt(duration)}
              </span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a href="tel:+13613096198" className="w-full sm:w-auto">
            <Button
              size="xl"
              className="w-full sm:w-auto bg-white text-black hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.15)] font-semibold gap-3 text-base"
            >
              <Phone className="w-5 h-5" />
              <span className="sm:hidden">Call My Assistant</span>
              <span className="hidden sm:inline">Call My Assistant &nbsp; +1 (361) 309-6198</span>
            </Button>
          </a>
          <a href="https://cal.com/saltpilot/45min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button
              variant="ghost"
              size="xl"
              className="w-full sm:w-auto text-white/70 hover:text-white hover:bg-white/10 border border-white/10 gap-2 text-base"
            >
              Book a Meeting
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>

        <p className="text-sm text-white/40 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          Questions?{" "}
          <a
            href="mailto:anupam@saltpilot.com"
            className="text-white/60 hover:text-white underline underline-offset-2 transition-colors"
          >
            Hit me up at anupam@saltpilot.com
          </a>
        </p>

      </div>
    </section>
  );
};

export default HeroSection;

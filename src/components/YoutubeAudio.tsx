"use client";

import { useEffect, useRef } from "react";
import YouTube from "react-youtube";

export default function YouTubeAudio() {
  const playerRef = useRef<any>(null);

  const onReady = (event: any) => {
    playerRef.current = event.target;
    playerRef.current.playVideo();
  };

  const onEnd = () => {
    playerRef.current.playVideo(); // Loop saat lagu selesai
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1, // Auto-play saat dimuat
      controls: 0, // Sembunyikan kontrol
      showinfo: 0,
      modestbranding: 1,
      loop: 1, // Loop otomatis
      playlist: "zEFMeRD1ihA", // Gunakan ID video yang sama untuk loop
    },
  };

  return (
    <div className="hidden">
      <YouTube videoId="zEFMeRD1ihA" opts={opts} onReady={onReady} onEnd={onEnd} />
    </div>
  );
}

"use client";
import { useRef } from "react"; 
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube"; 

export default function YouTubeAudio() {
  const playerRef = useRef<YouTubePlayer | null>(null);

  const onReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
    playerRef.current.playVideo();
  };

  const onEnd = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1, // Auto-play when loaded
      controls: 0, // Hide controls
      showinfo: 0,
      modestbranding: 1,
      loop: 1, // Auto loop
      playlist: "zEFMeRD1ihA", 
    },
  };

  return (
    <div className="hidden">
      <YouTube videoId="zEFMeRD1ihA" opts={opts} onReady={onReady} onEnd={onEnd} />
    </div>
  );
}
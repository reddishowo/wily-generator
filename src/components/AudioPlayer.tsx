"use client";

export default function AudioPlayer() {
  return (
    <audio autoPlay loop>
      <source src="/love-song.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

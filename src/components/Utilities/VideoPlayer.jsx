"use client";

import { XCircle } from "phosphor-react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          opts={option}
          onReady={(event) => event.target.pauseVideo()}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-xl hover:bg-color-accent transition-all hover:text-color-primary shadow-xl text-color-dark"
      >
        Tonton Trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};
export default VideoPlayer;

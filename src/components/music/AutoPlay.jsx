import ReactHowler from "react-howler";
import { useState } from "react";
import { Howl, Howler } from "howler";

let sound = new Howl({
  src: [
    "../../assets/audio/web/endlesslove.mp3", // I have a link of an mp3 file stored in an S3 bucket
  ],
  loop: false,
  volume: 0.5,
});

const AutoPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <button
      className="volume main-box dummy-abs"
      onClick={() => {
        // Toggles play / pause

        if (isPlaying) {
          sound.pause();
          setIsPlaying(false);
        } else {
          sound.play();
          setIsPlaying(true);
        }
        console.log("isPlaying", isPlaying);
      }}
    >
      Press Me
    </button>
  );
};

export default AutoPlay;

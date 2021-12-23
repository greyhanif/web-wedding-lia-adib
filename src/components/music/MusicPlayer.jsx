import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import "./musicPlayer.css";
import music from "../../assets/audio/web/edsheran-perfect.mp3";
import { isPlayState } from "../../store/index";
import { useRecoilState } from "recoil";
import { Howl, Howler } from "howler";

const sound = new Howl({
  src: [music],
  // autoplay: true,
  // loop: true,
  // html5: true,
});

const MusicPlayer = () => {
  const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    let run = true;
    HandlePlay();

    return function cleanup() {
      run = false;
    };
  }, []);

  const HandlePlay = () => {
    if (!sound.playing()) {
      setIsPlay(true);
      sound.play();
    } else {
      setIsPlay(false);
      sound.pause();
    }

    console.log(isPlay);
  };

  return (
    <div onClick={HandlePlay} onLoad={HandlePlay} className="player-wrapper">
      <div className="row d-flex justify-content-evenly">
        <div className="col-6 img-music text-center">
          <img width="32" height="32" className={`${isPlay && "rotate"}`} src={"https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg"} alt="Aprilia Rahma Kusumastuti" loading="lazy" />
        </div>
        <div className="col-6 p-0 action-button">
          {isPlay ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi-pause-fill" viewBox="0 0 16 16">
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className=" bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          )}
        </div>
        {/* <div class="col-3 m-1">PLAY</div> */}
      </div>
      {/* <div className="row text-center">
        <div className="col-12 music-name">Ed Sheran - Perfect</div>
      </div> */}
    </div>
  );
};

export default MusicPlayer;

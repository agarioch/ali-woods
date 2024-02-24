import { useState } from "react";
import VideoPlayer from "./videos.player";
import videoLinks from "./video.links";
import VideoLink from "./video.link";

const Videos = () => {
  const [src, setSrc] = useState("https://www.youtube.com/embed/NNYfz6TfHfM");
  const [title, setTitle] = useState("Ali Woods Stand Up");
  return (
    <section className="bg-yellow py-16">
      <div className="container">
        <h2 className="text-heading text-gray-dark">Videos</h2>
        <div className="mt-10 flex flex-col items-start gap-3 xl:flex-row">
          <VideoPlayer src={src} title={title} />
          <div className="flex w-full flex-col overflow-y-auto xl:max-w-[400px]">
            {videoLinks.map((video, index) => (
              <VideoLink
                key={index}
                isPlaying={src === video.src}
                {...video}
                onClick={() => {
                  setSrc(video.src);
                  setTitle(video.title);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;

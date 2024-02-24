import { useState } from "react";
import VideoPlayer from "./videos.player";
import videoLinks from "./video.links";
import VideoLink from "./video.link";

const Videos = () => {
  const [id, setId] = useState(videoLinks[0].id);
  const [title, setTitle] = useState("Ali Woods Stand Up");
  return (
    <section className="bg-yellow py-16">
      <div className="container">
        <h2 className="text-heading text-gray-dark">Videos</h2>
        <div className="mt-10 flex flex-col items-start gap-3 xl:flex-row">
          <VideoPlayer id={id} title={title} />
          <div className="flex w-full flex-col overflow-y-auto xl:max-w-[400px]">
            {videoLinks.map((video, index) => (
              <VideoLink
                key={index}
                isPlaying={id === video.id}
                {...video}
                onClick={() => {
                  setId(video.id);
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

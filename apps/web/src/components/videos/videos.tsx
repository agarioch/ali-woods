import { useState } from "react";
import VideoPlayer from "./videos.player";
import VideoLink from "./videos.link";
import { Video } from "@/types";

type VideosProps = {
  videos: Video[];
};

const Videos = ({ videos }: VideosProps) => {
  const [id, setId] = useState(videos[0].youtube_id);
  return (
    <section className="bg-off-white py-16" id="videos">
      <div className="container">
        <h2 className="text-black text-heading">Videos</h2>
        <div className="mt-10 flex flex-col items-start gap-3 xl:flex-row">
          <VideoPlayer id={id} />
          <div className="flex w-full flex-col gap-4 overflow-y-auto xl:max-w-[400px]">
            {videos.map((video) => (
              <VideoLink
                key={video._id}
                isPlaying={id === video.youtube_id}
                {...video}
                onClick={() => {
                  setId(video.youtube_id);
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

import { type VideoLink } from "./video.links";

const VideoPlayer = ({ id, title }: Omit<VideoLink, "desc">) => {
  return (
    <iframe
      width="100%"
      height="100%"
      className="aspect-video"
      src={`https://youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; controls=0"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;

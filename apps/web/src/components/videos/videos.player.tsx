const VideoPlayer = ({ id }: { id: string }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      className="aspect-video"
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title="Ali Woods Standup"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;

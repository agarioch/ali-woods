import clsx from "clsx";

export type VideoLinkProps = {
  title: string;
  description: string;
  onClick: () => void;
  isPlaying?: boolean;
};

const VideoLink = ({
  title,
  isPlaying = false,
  description,
  onClick,
}: VideoLinkProps) => {
  return (
    <button
      onClick={() => {
        if (!isPlaying) {
          onClick();
        }
      }}
      className={clsx(
        "group border-4 bg-white text-start text-gray-dark transition-colors",
        isPlaying ? "bg-blue cursor-auto" : "hover:bg-blue/10",
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-b-yellow-dark px-5 py-4">
        <div>
          <p className={clsx("font-bold uppercase", isPlaying && "text-white")}>
            {title}
          </p>
          <p
            className={clsx(
              "line-clamp-2 sm:line-clamp-1",
              isPlaying ? "text-yellow" : "text-orange",
            )}
          >
            {description}
          </p>
        </div>
        <div
          className={clsx(
            "flex aspect-square h-12 items-center justify-center bg-gray-dark",
            isPlaying ? "fill-yellow" : "fill-orange",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="34"
            viewBox="0 0 25 34"
          >
            <path d="M4.7526 3.01367C3.78906 2.42715 2.57812 2.40781 1.59505 2.95567C0.611979 3.50352 0 4.53477 0 5.65625V28.3438C0 29.4652 0.611979 30.4965 1.59505 31.0443C2.57812 31.5922 3.78906 31.5664 4.7526 30.9863L23.5026 19.6426C24.4336 19.0818 25 18.0828 25 17C25 15.9172 24.4336 14.9246 23.5026 14.3574L4.7526 3.01367Z" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default VideoLink;

import { VideoLinkProps } from "./video.link";

export type VideoLink = {
  src: string;
  title: string;
  desc: string;
};

const videoLinks: VideoLink[] = [
  {
    src: "https://www.youtube.com/embed/NNYfz6TfHfM",
    title: "Did Your Mum Hit You?",
    desc: "The most dramatic time I ever got beat!",
  },
  {
    src: "https://www.youtube.com/embed/QKMmMDkk1UM",
    title: "Men Don't Express Themseleves",
    desc: "And navigating female body dysmorphia",
  },
  {
    src: "https://www.youtube.com/embed/m2mZjQCi1ts",
    title: "How Men Have Sex",
    desc: "We need to change it up lads!",
  },
  {
    src: "https://www.youtube.com/embed/-eRFsaeotw0",
    title: "Did Your Mum Hit You?",
    desc: "The most dramatic time I ever got beat!",
  },
];

export default videoLinks;

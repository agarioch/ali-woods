import Image from "next/image";
import { LinkButton } from "../common";

const About = () => {
  return (
    <div className="bg-green">
      <div className="container flex flex-col-reverse items-center gap-12 py-16 md:gap-28 lg:flex-row">
        <div className="flex-1 text-copy">
          <h2 className="text-heading text-white-light">About</h2>
          <p className="my-8">{`Ali Woods is a half-English, half-Scottish comedian, podcaster and content creator. 
          After a second sell-out Edinburgh Fringe run in 2023,
          Ali is a refreshing mix of the ‘every man’ and the ‘modern man’, 
          whose sensitivity and genuine interest in men’s mental health gives him a great perspective 
          on the modern ‘lad’ culture which often features in his comedy. 
          Ali is that wonderful blend of comedy with a heart, speaking on topics such as football, 
          the environment, and many social causes close to his heart.`}</p>
          <LinkButton href="https://gagreflex.co.uk/acts/ali-woods/">
            Learn More
          </LinkButton>
        </div>
        <div className="aspect-square max-w-96 flex-1 bg-yellow lg:max-w-lg">
          <Image
            src="/images/ali-woods-walk.png"
            alt="Ali Woods"
            width={752} // 1504 / 2 = 752
            height={724} // 1449 / 2 = 724.5
            className="-mb-[10%] -translate-x-[15%] -translate-y-[10%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

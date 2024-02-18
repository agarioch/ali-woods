import Image from "next/image";

const About = () => {
  return (
    <div className="bg-green">
      <div className="container flex flex-col-reverse items-center gap-12 py-16 md:gap-28 lg:flex-row">
        <div className="text-copy flex-1">
          <h2 className="text-heading text-white-light">About</h2>
          <p className="my-8">{`Ali Woods is a half-English, half-Scottish comedian, podcaster and content creator. 
          Fresh off his first sold out show at the Edinburgh Fringe this year, 
          Ali is a refreshing mix of the ‘every man’ and the ‘modern man’, 
          whose sensitivity and genuine interest in men’s mental health gives him a great perspective 
          on the modern ‘lad’ culture which often features in his comedy. 
          Ali is that wonderful blend of comedy with a heart, speaking on topics such as football, 
          the environment, and many social causes close to his heart.`}</p>
          <button className="bg-gray-dark px-5 py-3 font-bold shadow-md">
            Learn More
          </button>
        </div>
        <div className="aspect-square max-w-96 flex-1 bg-yellow lg:max-w-lg">
          <Image
            src="/images/ali-woods-walk.png"
            alt="Ali Woods"
            width={1504}
            height={1449}
            className="-mb-[10%] -translate-x-[15%] -translate-y-[10%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

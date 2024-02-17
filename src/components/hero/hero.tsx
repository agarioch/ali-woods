import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-green-dark h-100">
      <section className="container flex justify-between">
        <div className="relative">
          <Image
            src="/images/ali-woods-hero.png"
            alt="Ali Woods"
            width={1466}
            height={2387}
            className="-translate-y-12 -mb-12 max-w-2xl pointer-events-none"
          />
          <div className="absolute font-heading top-24 left-3/4 ml-12 w-max">
            <p className="text-3xl">{`"In a world of wannabes,`}</p>
            <p className="text-3xl ">{`Woods is the real deal"`}</p>
            <p className="text-yellow ">Evening Standard</p>
          </div>
        </div>
        <div className="self-end text-end mb-12">Socials here</div>
      </section>
    </div>
  );
};

export default Hero;

import Image from "next/image";

// TODO: add nextgen image formats to improve loading speed
const Hero = () => {
  return (
    <div className="container mt-52">
      <div className="relative">
        <section className="relative z-10 flex flex-col items-center justify-between gap-10 border-4 border-black bg-green px-10 py-10 shadow-md sm:flex-row sm:px-20">
          <div className="max-w-max font-heading md:block">
            <p className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
              {`"In a world of wannabes,`}
              <br />
              Woods
              {` is the real deal"`}
            </p>
            <p className="mt-4 font-medium text-yellow lg:text-xl">
              Evening Standard
            </p>
          </div>
          <Image
            src="/images/ali-woods-hero.png"
            alt="Ali Woods"
            priority
            width={450}
            height={502}
            className="max-w-full md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
          />
        </section>
        <Image
          src="/images/hero-grid.png"
          alt=""
          aria-hidden
          width={306}
          height={337}
          className="absolute -bottom-10 -left-10 z-0"
        />
      </div>
    </div>
  );
};

export default Hero;

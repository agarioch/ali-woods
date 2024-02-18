import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-green-dark h-100 bg-hero-pattern bg-cover">
      <section className="container flex justify-between">
        <div className="relative sm:-ml-16 max-h-screen">
          <Image
            src="/images/hero-ali-woods.png"
            alt="Ali Woods"
            width={1358}
            height={1224}
            className="md:-translate-y-12 md:-mb-12 max-w-full md:max-w-xl lg:max-w-3xl xl:max-w-4xl pointer-events-none"
          />
          <div className="hidden md:block absolute font-heading top-1/4 left-3/4 ml-[5vw] w-max">
            <p className="text-3xl lg:text-4xl xl:text-5xl italic">
              {"In a world of wannabes,"}
              <br />
              {"Woods is the real deal"}
            </p>
            <p className="text-yellow-light lg:text-xl mt-4">
              Evening Standard
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-24 self-end text-end mb-12 min-w-6 sm:min-w-8">
          <Link href="https://www.instagram.com/aliwoodsgigs/" target="_blank">
            <Image
              src="/images/instagram.svg"
              alt="Instagram"
              width={30}
              height={35}
            />
          </Link>
          <Link href="https://www.tiktok.com/@aliwoodsgigs" target="_blank">
            <Image
              src="/images/tiktok.svg"
              alt="TikTok"
              width={30}
              height={35}
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCY2iqL9YBviFz1jwgJP-x8g"
            target="_blank"
          >
            <Image
              src="/images/youtube.svg"
              alt="Youtube"
              width={40}
              height={35}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;

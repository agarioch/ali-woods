import { LinkIcon } from "../common";

const HeroSocials = () => {
  return (
    <div className="mb-12 flex min-w-6 flex-col gap-8 self-end text-end sm:min-w-8 md:flex-row lg:gap-24">
      <LinkIcon
        href="https://www.instagram.com/aliwoodsgigs/"
        src="/images/instagram.svg"
        alt="Instagram"
        width={30}
        height={35}
      />
      <LinkIcon
        href="https://www.tiktok.com/@aliwoodsgigs"
        src="/images/tiktok.svg"
        alt="TikTok"
        width={30}
        height={35}
      />
      <LinkIcon
        href="https://www.youtube.com/channel/UCY2iqL9YBviFz1jwgJP-x8g"
        src="/images/youtube.svg"
        alt="Youtube"
        width={40}
        height={35}
      />
    </div>
  );
};

export default HeroSocials;

import Image from "next/image";

const Appearances = () => {
  return (
    <div className="overflow-x-auto border-y-4 bg-white-light py-8 text-copy">
      <div className="container flex items-center justify-between gap-8 [&>img]:shrink-0">
        <Image
          src="/images/press/comedy-central-logo.png"
          alt="Comedy Central"
          width={102}
          height={35}
        />
        <Image
          src="/images/press/itv2-logo.png"
          alt="ITV2"
          width={100}
          height={33}
        />
        <Image
          src="/images/press/bbc-radio4-logo.png"
          alt="BBC Radio 4"
          width={100}
          height={43}
        />
        <Image
          src="/images/press/evening-standard-logo.png"
          alt="Evening Standard"
          width={213}
          height={26}
        />
      </div>
    </div>
  );
};

export default Appearances;

import Image from "next/image";

const Appearances = () => {
  return (
    <div className="text-copy overflow-x-scroll bg-white-light py-3 text-gray-dark">
      <div className="container flex items-center justify-between gap-4">
        <Image
          src="/images/press/guardian-logo.png"
          alt="The Guardian"
          width={88}
          height={28}
        />
        <Image
          src="/images/press/vice-logo.png"
          alt="Vice"
          width={74}
          height={23}
        />
        <Image
          src="/images/press/wired-logo.png"
          alt="Wired"
          width={96}
          height={38}
        />
        <Image
          src="/images/press/independent-logo.png"
          alt="The Independent"
          width={113}
          height={33}
        />
        <Image
          src="/images/press/times-logo.png"
          alt="The Times"
          width={135}
          height={24}
        />
        <Image
          src="/images/press/mens-health-logo.png"
          alt="Mens Health"
          width={127}
          height={26}
        />
      </div>
    </div>
  );
};

export default Appearances;

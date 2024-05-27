import { format } from "date-fns";
import Link from "next/link";
import { Gig } from "@/types";

type GigsNextProps = {
  nextGig: Gig;
};

const GigsNext = ({ nextGig }: GigsNextProps) => {
  return (
    <div className="border-black mt-20 border-y-4 bg-yellow py-4 text-copy font-bold">
      <div className="container flex items-baseline justify-between text-xl md:text-3xl">
        <div className="">
          <h3 className="text-black inline-block font-bold uppercase">
            Next show:
          </h3>
          <p className="ml-2 inline-block font-normal">{`${nextGig.location} - ${nextGig.date ? format(nextGig.date, "do MMM") : "TBA"}`}</p>
        </div>
        <Link
          href={
            nextGig.tickets_url ?? "https://gagreflex.co.uk/acts/ali-woods/"
          }
        >
          <p className="text-blue hover:text-blue/90 font-bold uppercase">
            Book Now
          </p>
        </Link>
      </div>
    </div>
  );
};

export default GigsNext;

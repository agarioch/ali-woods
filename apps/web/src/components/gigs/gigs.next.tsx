import { format } from "date-fns";
import Link from "next/link";
import { Gig } from "@/types";

type GigsNextProps = {
  nextGig: Gig;
};

const GigsNext = ({ nextGig }: GigsNextProps) => {
  return (
    <div className="bg-white-light py-3 text-copy text-gray-dark">
      <div className="container flex justify-between">
        <div>
          <h3 className="inline-block text-red">Next show:</h3>
          <p className="ml-2 inline-block">{`${nextGig.location} - ${nextGig.date ? format(nextGig.date, "do MMM") : "TBA"}`}</p>
        </div>
        <Link
          href={
            nextGig.tickets_url ?? "https://gagreflex.co.uk/acts/ali-woods/"
          }
        >
          <p className="font-bold uppercase italic text-red">Book Now</p>
        </Link>
      </div>
    </div>
  );
};

export default GigsNext;

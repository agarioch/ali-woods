import { format } from "date-fns";
import upcomingGigs from "./gigs.list";
import Link from "next/link";

const GigsNext = () => {
  return (
    <div className="bg-white-light py-3 text-copy text-gray-dark">
      <div className="container flex justify-between">
        <div>
          <h3 className="inline-block text-red">Next show:</h3>
          <p className="ml-2 inline-block">{`${upcomingGigs[0].location} - ${upcomingGigs[0].date ? format(upcomingGigs[0].date, "do MMM") : "TBA"}`}</p>
        </div>
        <Link
          href={
            upcomingGigs[0].tickets_link ??
            "https://gagreflex.co.uk/acts/ali-woods/"
          }
        >
          <p className="font-bold uppercase italic text-red">Book Now</p>
        </Link>
      </div>
    </div>
  );
};

export default GigsNext;

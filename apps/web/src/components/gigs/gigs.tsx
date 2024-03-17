import { endOfDay, format, isBefore, sub } from "date-fns";
import Link from "next/link";
import clsx from "clsx";
import GigsNext from "./gigs.next";
import { Gig, GigStatus } from "@/types";
import { useEffect, useState } from "react";

function formatDateString(date: Date | undefined) {
  return date === undefined ? "TBA" : format(date, "dd/MM/yy");
}

const yesterday = endOfDay(sub(new Date(), { days: 1 }));

function formatTicketLink(status: GigStatus, url?: string) {
  const replaceUnderscore = status.replace("_", " ");
  const formattedStatus =
    replaceUnderscore.charAt(0).toUpperCase() + replaceUnderscore.slice(1);

  if (url === undefined) {
    return formattedStatus;
  } else {
    return (
      <Link
        href={url}
        target="_blank"
        className={
          status === "buy_now"
            ? "inline-block transition-all hover:scale-110 hover:text-yellow active:scale-95"
            : ""
        }
      >
        {formattedStatus}
      </Link>
    );
  }
}

type GigsProps = {
  gigs: Gig[];
};

const Gigs = ({ gigs }: GigsProps) => {
  const [nextGig, setNextGig] = useState<Gig | null>(null);
  useEffect(() => {
    const nextGig = gigs.find((gig) => {
      return gig.date && new Date(gig.date) > new Date();
    });
    setNextGig(nextGig ?? null);
  }, [gigs]);

  return (
    <section id="gigs" className="relative z-10">
      {nextGig !== null ? <GigsNext nextGig={nextGig} /> : null}
      <div className="bg-purple">
        <div className="container py-12">
          <div className="bg-purple-dark px-16 py-12">
            <h2 className="text-heading">2024 Gigs</h2>
            <p className="max-w-prose pt-8 text-copy">
              {`Stay in the loop with Ali's upcoming performances. Check out the
              list below for details on where you can catch the next wave of
              hilarity, complete with venue information and ticket availability.`}
            </p>
          </div>
          <div className="overflow-x-auto bg-purple-light px-4 py-12 sm:px-16">
            <table className="w-full table-auto border-collapse sm:text-copy">
              <thead className="heading text-heading">
                <tr>
                  <th className="pr-4">Location</th>
                  <th className="hidden pr-4 sm:block">Date</th>
                  <th className="pr-4">Tickets</th>
                </tr>
              </thead>
              <tbody>
                {gigs.map((gig) => (
                  <tr key={gig._id}>
                    <td className="py-5 pr-4 font-bold">
                      {gig.location}
                      <p className="text-sm font-normal text-white sm:hidden">
                        {formatDateString(
                          gig.date ? new Date(gig.date) : undefined,
                        )}
                      </p>
                    </td>
                    <td className="hidden py-5 pr-4 sm:block">
                      {formatDateString(
                        gig.date ? new Date(gig.date) : undefined,
                      )}
                    </td>
                    {gig.date && isBefore(gig.date, yesterday) ? (
                      <td className="py-5 pr-4">Finished</td>
                    ) : (
                      <td
                        className={clsx(
                          "py-5 pr-4",
                          gig.tickets_status === "sold_out" &&
                            "font-bold uppercase text-red",
                          gig.tickets_status === "buy_now" &&
                            "font-bold uppercase text-green-light",
                        )}
                      >
                        {formatTicketLink(gig.tickets_status, gig.tickets_url)}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gigs;

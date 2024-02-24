import { format } from "date-fns";
import Link from "next/link";
import clsx from "clsx";
import upcomingGigs from "./gigs.list";
import GigsNext from "./gigs.next";

function formatDateString(date: Date | undefined) {
  return date === undefined ? "TBA" : format(date, "MM/dd/yy");
}

function formatTicketLink(tickets: string, link?: string) {
  if (link === undefined) {
    return tickets;
  } else {
    return <Link href={link}>{tickets}</Link>;
  }
}

const Gigs = () => {
  return (
    <section id="gigs">
      <GigsNext />
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
                {upcomingGigs.map((gig) => (
                  <tr key={gig.id}>
                    <td className="py-5 pr-4 font-bold">
                      {gig.location}
                      <p className="text-sm font-normal text-white sm:hidden">
                        {formatDateString(gig.date)}
                      </p>
                    </td>
                    <td className="hidden py-5 pr-4 sm:block">
                      {formatDateString(gig.date)}
                    </td>
                    <td
                      className={clsx(
                        "py-5 pr-4",
                        gig.tickets === "Sold out" &&
                          "font-bold uppercase text-red",
                        gig.tickets === "Buy now" &&
                          "font-bold uppercase text-green-light",
                      )}
                    >
                      {formatTicketLink(gig.tickets, gig.tickets_link)}
                    </td>
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

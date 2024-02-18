import { format } from "date-fns";
import GigsNext from "./gigs.next";
import Link from "next/link";
import clsx from "clsx";

type Gig = {
  location: string;
  date?: Date;
  tickets: "Sold out" | "Buy now" | "Coming Soon";
  tickets_link?: string;
};

const upcomingGigs: Gig[] = [
  {
    location: "The Chuckle Cellar",
    date: new Date("2024-01-01"),
    tickets: "Sold out",
    tickets_link: "https://example.com",
  },
  {
    location: "The Laugh Lounge",
    date: new Date("2024-02-01"),
    tickets: "Buy now",
    tickets_link: "https://example.com",
  },
  {
    location: "The Comedy Cave",
    tickets: "Coming Soon",
  },
  {
    location: "The Chuckle Cellar",
    date: new Date("2024-04-01"),
    tickets: "Buy now",
    tickets_link: "https://example.com",
  },
  {
    location: "The Laugh Lounge",
    date: new Date("2024-05-01"),
    tickets: "Buy now",
    tickets_link: "https://example.com",
  },
];

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
    <section>
      <GigsNext />
      <div className="bg-purple">
        <div className="container py-12">
          <div className="bg-purple-dark px-16 py-12">
            <h2 className="text-heading">2024 Gigs</h2>
            <p className="text-copy max-w-prose pt-8">
              {`Stay in the loop with Ali's upcoming performances. Check out the
              list below for details on where you can catch the next wave of
              hilarity, complete with venue information and ticket availability.`}
            </p>
          </div>
          <div className="bg-purple-light px-16 py-12">
            <table className="text-copy w-full table-auto border-collapse">
              <thead className="heading text-heading">
                <tr>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Tickets</th>
                </tr>
              </thead>
              <tbody>
                {upcomingGigs.map((gig) => (
                  <tr key={gig.location}>
                    <td className="py-5 pr-4 font-bold">{gig.location}</td>
                    <td className="py-5 pr-4">{formatDateString(gig.date)}</td>
                    <td
                      className={clsx(
                        "py-5 pr-4",
                        gig.tickets === "Sold out" &&
                          "font-bold uppercase text-red",
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

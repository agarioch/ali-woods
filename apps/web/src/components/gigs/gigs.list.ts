export type Gig = {
  id: string;
  location: string;
  date?: Date;
  tickets: "Sold out" | "Buy now" | "Coming Soon";
  tickets_link?: string;
};

const upcomingGigs: Gig[] = [
  {
    id: "1",
    location: "The Chuckle Cellar",
    date: new Date("2024-01-01"),
    tickets: "Sold out",
    tickets_link: "https://example.com",
  },
  {
    id: "2",
    location: "The Laugh Lounge",
    date: new Date("2024-02-01"),
    tickets: "Buy now",
    tickets_link: "https://example.com",
  },
  {
    id: "3",
    location: "The Comedy Cave",
    tickets: "Coming Soon",
  },
  {
    id: "4",
    location: "The Chuckle Cellar",
    date: new Date("2024-04-01"),
    tickets: "Buy now",
    tickets_link: "https://example.com",
  },
  {
    id: "5",
    location: "The Laugh Lounge",
    date: new Date("2024-05-01"),
    tickets: "Buy now",
    tickets_link: "https://example.com",
  },
];
export default upcomingGigs;

export type GigStatus = "sold_out" | "buy_now" | "coming_soon";

export type Gig = {
  _id: string;
  _type: "gig";
  location: string;
  date?: string;
  tickets_status: GigStatus;
  tickets_url?: string;
};

export type Video = {
  _id: string;
  _type: "video";
  title: string;
  youtube_id: string;
  description: string;
  date?: string;
};

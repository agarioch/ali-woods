import { LinkAnchor, SocialIcons } from "../common";

const LayoutFooter = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container grid grid-cols-1 gap-12 py-16 sm:grid-cols-2">
        {/* Name & Links */}
        <div className="flex h-full flex-col justify-between gap-8">
          <h2 className="text-heading">
            <span className="text-green">A</span>
            <span className="text-blue">L</span>
            <span className="text-pink">I </span>
            <span className="text-yellow">W</span>
            <span className="text-orange">O</span>
            <span className="text-green">O</span>
            <span className="text-pink">D</span>
            <span className="text-blue">S</span>
          </h2>
          <LinkAnchor hasUnderline={false} href="/#gigs">
            Live Shows
          </LinkAnchor>
          <LinkAnchor hasUnderline={false} href="/#videos">
            Videos
          </LinkAnchor>
          <LinkAnchor hasUnderline={false} href="/#newsletter">
            Newsletter
          </LinkAnchor>
        </div>
        {/* Contact */}
        <div className="flex flex-col justify-between gap-8">
          <div className="fill-orange flex gap-16 sm:justify-end ">
            <SocialIcons />
          </div>
          <div className="flex flex-col gap-2 sm:text-end">
            <p className="font-bold">Contact</p>
            <LinkAnchor href="https://gagreflex.co.uk/acts/ali-woods/">
              Booking Enquiries
            </LinkAnchor>
            <LinkAnchor href="mailto:georgi@gagreflex.co.uk">
              Live bookings
            </LinkAnchor>
            <LinkAnchor href="mailto:elena@themillaragency.com">
              Social Media Partnerships
            </LinkAnchor>
            <LinkAnchor href="mailto:hannah@gagreflex.co.uk">
              Corporate bookings
            </LinkAnchor>
            <LinkAnchor href="mailto:lawrence@thegaltonagency.com">
              Acting & Commercial Work
            </LinkAnchor>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;

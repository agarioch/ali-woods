import Image from "next/image";
import { LinkAnchor } from "../common";

// TODO: add link component with some styles

const Accolades = () => {
  return (
    <div className="bg-purple">
      <div className="container flex flex-col-reverse items-center gap-6 py-12 text-copy lg:flex-row lg:gap-20 lg:pb-28 xl:gap-28">
        <div className="flex-1 lg:self-start xl:self-center">
          <div className="relative md:px-20 lg:p-0 xl:p-10">
            <Image
              src="/images/ali-woods-suit.png"
              alt="Ali Woods wearing a suit"
              height={672}
              width={671}
            />
            <div className="top-[65%] bg-gray-dark p-6 lg:absolute lg:right-[10%] lg:w-[110%] lg:pb-6 lg:pl-16 lg:pr-4 lg:pt-16 xl:right-[20%] xl:w-[80%]">
              <div className="relative">
                <Image
                  src="/images/press/evening-standard-logo.png"
                  alt="Evening Standard"
                  width={268}
                  height={32}
                  className="relative z-10"
                />
                <div className="absolute -left-8 bottom-3/4">
                  <svg
                    width="68"
                    height="52"
                    viewBox="0 0 68 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.398438 52V36.8125C0.398438 32.5 1.24219 28.0937 2.92969 23.5937C4.61719 19.0937 6.84375 14.8516 9.60938 10.8672C12.375 6.8828 15.375 3.55468 18.6094 0.88281L31.8281 8.6875C29.2031 12.8125 27.0469 17.125 25.3594 21.625C23.7188 26.125 22.8984 31.1406 22.8984 36.6719V52H0.398438ZM35.9062 52V36.8125C35.9062 32.5 36.75 28.0937 38.4375 23.5937C40.125 19.0937 42.3516 14.8516 45.1172 10.8672C47.8828 6.8828 50.8828 3.55468 54.1172 0.88281L67.3359 8.6875C64.7109 12.8125 62.5547 17.125 60.8672 21.625C59.2266 26.125 58.4063 31.1406 58.4063 36.6719V52H35.9062Z"
                      fill="#E12A67"
                    />
                  </svg>
                </div>
              </div>
              <p className="my-3 text-balance">
                {`His riffs about James Bond, erectile dysfunction and his Scottish mother were accessible yet distinctive.
                In a world of wannabes, Woods is the real deal.`}
              </p>
              <p className="text-base text-yellow">{`John Smith, Tea Marker at Men's Health`}</p>
            </div>
          </div>
        </div>
        <div className="copy max-w-md flex-1">
          <h2 className="mb-6 text-heading text-white-light">
            A new and original
            <br />
            <span className="text-yellow">voice in comedy</span>.
          </h2>
          <p>
            Ali won Hackney Empire New Act of the Year 2020 and has appeared on
            BBC Radio 4, TalkRadio, TalkSport.
          </p>
          <p>
            His online comedy sketches under the tag{" "}
            <LinkAnchor href="https://www.instagram.com/aliwoodsgigs/">
              @aliwoodsgigs
            </LinkAnchor>{" "}
            have gained millions of views and likes, and featured on LadBible
            and Buzzfeed UK. In 2022, he supported Russell Kane and Axel Blake
            on tour.
          </p>
          <p>
            Ali sold out Leicester Square theatre earlier this year and has put
            his first ever comedy special on Youtube, already surpassing 15k
            views! You can{" "}
            <LinkAnchor href="https://www.youtube.com/watch?v=R4e9T2oAU0g">
              watch his hilarious hour here
            </LinkAnchor>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accolades;

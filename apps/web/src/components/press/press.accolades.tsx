import Image from "next/image";
import { LinkAnchor } from "../common";
import { motion } from "framer-motion";

// TODO: add link component with some styles

const containerVariants = {
  initial: {},
  inView: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  initial: {
    y: 200,
  },
  inView: {
    y: 0,
  },
};

const boxVariants = {
  initial: {
    y: -200,
  },
  inView: {
    y: 0,
  },
};

const Accolades = () => {
  return (
    <div className="bg-orange border-y-4">
      <div className="lg:pb-38 container flex flex-col-reverse items-center gap-6 pb-40 pt-20 text-copy lg:flex-row lg:gap-20 xl:gap-28">
        <motion.div
          className="relative"
          initial="initial"
          whileInView="inView"
          variants={containerVariants}
        >
          <motion.div
            className="bg-blue absolute -bottom-4 -right-4 left-4 top-4 border-4"
            variants={itemVariants}
          />
          <motion.div
            className="relative z-10 border-4"
            variants={itemVariants}
          >
            <Image
              src="/images/ali-woods-apple.png"
              alt="Ali Woods wearing a suit"
              height={460}
              width={460}
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            className="bg-pink absolute right-0 top-full z-0 -mt-1 w-10/12 border-4 px-5 py-4"
            variants={boxVariants}
          >
            <p className="mb-2 text-balance font-bold">
              &ldquo;Expect to see big things from this rising star.&rdquo;
            </p>
            <p className="text-black">The Wee Review</p>
          </motion.div>
        </motion.div>
        <div className="copy max-w-md flex-1 text-white">
          <h2 className="mb-6 text-heading text-white">
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

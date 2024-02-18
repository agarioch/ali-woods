import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="flex" id="newsletter">
      <div className="flex-grow bg-red-light" />
      <div className="container flex flex-col items-center px-0 sm:flex-row">
        <div className="flex h-full flex-1 items-center bg-red-light">
          <Image
            src="/images/ali-woods-splits.png"
            alt="Ali Woods"
            width={528}
            height={485}
          />
        </div>
        <div className="text-copy flex-1 px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-28">
          <h2 className="text-heading text-white-light">
            Never miss a <span className="text-yellow">punchline</span>
          </h2>
          <p className="my-8">
            {`Sign up for Ali's newsletter to receive exclusive updates, 
          behind-the-scenes anecdotes, and early access to ticket sales. 
          Be the first to know about upcoming gigs, special events, and all things Ali.`}
          </p>
          <form className="flex w-full">
            <input
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="grow bg-white-light px-5 py-3 text-gray-dark"
            />
            <button className="shrink-0 bg-green px-5 py-3 text-yellow">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="bg-dray-dark flex-grow" />
    </section>
  );
};

export default Newsletter;

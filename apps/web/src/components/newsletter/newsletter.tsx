import Image from "next/image";
import { useState, type FormEvent } from "react";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!isValidEmail(email)) {
      setIsLoading(false);
      return;
    }

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setIsSuccess(true);
    }
    setIsLoading(false);
    setEmail("");
  };
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
        <div className="flex-1 px-4 py-12 text-copy sm:px-6 md:px-8 lg:px-12 xl:px-28">
          <h2 className="text-heading text-white-light">
            Never miss a <span className="text-yellow">punchline</span>
          </h2>
          <p className="my-8">
            {`Sign up for Ali's newsletter to receive exclusive updates, 
          behind-the-scenes anecdotes, and early access to ticket sales. 
          Be the first to know about upcoming gigs, special events, and all things Ali.`}
          </p>
          {isSuccess ? (
            <p className="rounded bg-yellow px-4 py-2 text-gray-dark ">
              {`Thanks for signing up! You're now on the list.`}
            </p>
          ) : (
            <form
              className="flex w-full text-sm sm:text-base"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                autoComplete="email"
                placeholder="Email"
                className="grow rounded-none bg-white-light px-5 py-3 text-gray-dark"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="shrink-0 bg-green px-5 py-3 text-yellow"
                disabled={isLoading}
              >
                {isLoading ? "Loading" : "Sign up"}
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="bg-dray-dark flex-grow" />
    </section>
  );
};

export default Newsletter;

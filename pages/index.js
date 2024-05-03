import HeadObject from "../components/head";
import Nav from "../components/nav";
import Scene from "../components/scene";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <a href="https://hackclub.com"><img src="https://assets.hackclub.com/flag-orpheus-top.svg" className="absolute top-0 left-8 w-1/4 md:w-[14%]" /></a>
      <main>
        <section
          id="hero"
          className="flex flex-col items-center relative"
        >
          {/* <Nav /> */}
          <div className="my-24 flex flex-col gap-4 items-center text-center z-10">
            <h1 className="text-9xl">
              Ham
              <br />
              Club
            </h1>
            <p className="text-4xl">
              earn your callsign,
              <br />
              get a free radio
            </p>
            <a href="https://forms.hackclub.com/t/4xrbpF32B8us" target="_blank" className="uppercase px-4 py-2 rounded-full border-white border-2 text-center hover:bg-white hover:text-black">
             Get your radio! 📻
            </a>
          </div>
        </section>
        <section className="h-fit py-16 w-screen">
          <div id="grid" className="grid grid-cols-1 lg:grid-cols-2 lg:w-2/3 mx-auto gap-5 items-stretch justify-center *:text-black *:p-6 *:grow p-5 *:rounded-lg *:bg-white *:flex *:flex-col *:text-center *:items-center *:justify-center">
            <div>
              <h2>Radio Communication</h2>
              <p>
                Learn about radio communication and earn your technician
                license, the first step in your ham radio journey.
              </p>
            </div>
            <div>
              <h2>Study Sessions</h2>
              <p>
                Join our program for nightly study sessions from 8-9 PM Eastern
                Time. If you can't make it, you can study at your own pace.
              </p>
            </div>
            <div>
              <h2>License Grant</h2>
              <p>
                If you pass the test by May 31st, we will cover your exam and
                license fees!
              </p>
            </div>
            <div>
              <h2>UV-K6 Radio</h2>
              <p>
                Upon passing your exam, we'll send you a UV-K5 radio for
                hands-on experience in the world of ham radio.
              </p>
            </div>
            <div>
              <h2>Ham Radio Community</h2>
              <p>
                Ham radio isn't just a hobby—it helps during emergencies, in
                local events, and makes connections that last a lifetime.
              </p>
            </div>
            <div>
              <h2>Helpful Resources</h2>
              <p>
                Want to jump right in? Check out our{" "}
                <a href="/help" className="underline">
                  list of ham radio resources and FAQs!
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

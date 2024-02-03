import "./mycontainer.css";
// components
import { Section2 } from "../../components";

export default function MyContainer() {
  return (
    <>
      <main className="min-h-screen bg-[url('/bg-intro-mobile.png')] max-md:py-[5rem] md:bg-[url('/bg-intro-desktop.png')] bg-Red grid place-items-center">
        <article className="md:max-w-[52rem] max-w-[25rem] px-[1rem]  items-center grid md:grid-cols-2 md:gap-x-[2rem] max-md:gap-y-[4rem]">
          <section className="text-white space-y-[1rem] max-md:text-center">
            <h1 className="lg:text-[2rem] md:text-[1.8rem] text-[1.3rem] font-bold">
              Learn to code by watching others
            </h1>
            <p className="md:text-[0.7rem] text-[0.75rem]">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </section>
          <Section2 />
        </article>
      </main>
    </>
  );
}

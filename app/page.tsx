import Avatar from "./components/Avatar";
import Articles from "./components/Articles";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <Avatar />
      <p className="mt-6 mb-3 text-3xl text-center text-white">
        Hello and welcome! 👾&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Alena</span>.
        </span>
      </p>
      <p className="text-xl text-center text-indigo-200">
        I made this page with Next.js in order to learn this framework.
      </p>
      <p className="mb-12 text-xl text-center text-indigo-200">
        Here I will add articles with key information about Next.js technology.
      </p>

      <Articles />
    </main>
  );
}

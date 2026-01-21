import { Sparkle } from "lucide-react";
import { AnimeCard } from "../components/animeCard";

export const Home = () => {
  return (
    <>
      <div className="px-10 pt-10 mb-10">
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <div className="flex gap-1.5 mb-4">
              <Sparkle color="hsl(80, 100%, 42%)" size="24" />
              <h1 className="text-text-default">My Top Rated Anime</h1>
            </div>
            <div className="bg-amber-50 rounded-xl w-full h-100 overflow-hidden "></div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-1.5 mb-4">
              <Sparkle color="hsl(80, 100%, 42%)" size="24" />
              <h1 className="text-text-default">My Top 2 Anime</h1>
            </div>
            <div className="bg-amber-50 rounded-xl w-full h-100"></div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-default px-10 py-9">
        <h1 className="text-text-default">Hello</h1>
      </div>
      <div className="bg-primary-default p-10">
        <h1 className="text-text-default">Top 10 Anime</h1>
        <div className="gap-2.5 mt-2.5">
          <AnimeCard />
        </div>
      </div>
    </>
  );
};

import { animeData } from "../dummyData/AnimeData.js";

export const AnimeLists = () => {
  const Alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // Group anime by first letter
  const getAnimeByLetter = (letter) => {
    return animeData.filter((anime) => {
      const firstChar = anime.title.trim().charAt(0).toUpperCase();
      return firstChar === letter;
    });
  };

  return (
    <div className=" px-10 py-10 ">
      <h1 className="text-text-default text-xl font-bold">Anime List</h1>

      <div className="grid grid-cols-2 ">
        {Alphabet.map((alphabet) => {
          const animeList = getAnimeByLetter(alphabet);
          return (
            <div key={alphabet} className="">
              <h2 className="text-accent-default mt-6 mb-3 text-lg font-bold ">
                {alphabet}
              </h2>
              {animeList.length > 0 && (
                <>
                  <div>
                    {animeList.map((anime, index) => (
                      <div className="ml-2 my-1 " key={index}>
                        <h1 className="text-text-default">- {anime.title}</h1>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

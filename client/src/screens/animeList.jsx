export const AnimeLists = () => {
  const animeData = [
    { title: "I Got married to the Girl I hate the most in class" },
    { title: "Jujusu Kaisen" },
    { title: "Demon Slayer" },
    { title: "My stepmother's daughter is my ex" },
    { title: "Attack on Titan" },
    { title: "The Fragrant Flower Blooms with Dignity" },
    { title: "May I ask for one final thing?" },
    { title: "Haikyuu" },
    { title: "Kuroko's Basketball" },
    { title: "Tokyo Ghoul" },
    { title: "Solo Leveling" },
    { title: "Wise Man's Grandchild" },
    { title: "Food Wars" },
    { title: "Spy Family" },
    { title: "Sword Art Online" },
    { title: "My Dress-up Darling" },
    {
      title:
        "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World",
    },
    { title: "The Mistfit of Demon King Academy" },
    { title: "Re:Zero" },
  ];

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
    return animeData.filter(
      (anime) => anime.title.charAt(0).toUpperCase() === letter
    );
  };

  return (
    <div className="p-10 ">
      <h1 className="text-text-default text-xl font-bold">Anime List</h1>

      {Alphabet.map((alphabet) => {
        const animeList = getAnimeByLetter(alphabet);

        return (
          <div key={alphabet}>
            {animeList.length > 0 && (
              <>
                <h2 className="text-accent-default mt-6 mb-3 text-lg font-bold ">
                  {alphabet}
                </h2>
                <div className="">
                  {animeList.map((anime, index) => (
                    <div className="ml-2 my-1" key={index}>
                      <h1 className="text-text-default">{anime.title}</h1>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

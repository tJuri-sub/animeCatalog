import { SearchBar } from "./searchBar";
import { Ellipsis, Moon } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-secondary-default">
      <div>
        <img className="w-[60%]" src="./Logo.svg" alt="Logo" />
      </div>

      <div>
        <SearchBar />
      </div>

      <div>
        <ul className="flex m-0 gap-14">
          <li>
            <Link
              className={
                isActive("/")
                  ? "text-text-highlight-default"
                  : "text-text-default"
              }
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                isActive("/animeList")
                  ? "text-text-highlight-default"
                  : "text-text-default"
              }
              to="/animeList"
            >
              Anime List
            </Link>
          </li>
          <li>
            <Link
              className={
                isActive("/myPopular")
                  ? "text-text-highlight-default"
                  : "text-text-default"
              }
              to="/myPopular"
            >
              My Popular
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div>
          <Ellipsis color="white" size="24" />
        </div>
      </div>
    </div>
  );
};

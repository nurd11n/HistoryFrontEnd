import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";

import "./header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <div className="header__links">
          <h1 onClick={() => navigate("/")} className="header__logo">
            Past2Futures
          </h1>
          <div className="menu-items">
            <Link to="#">
              <SearchIcon />
              Поиск
            </Link>
            <Link to="#">
              <LibraryBooksIcon />
              Сборники
            </Link>
            <Link to="#">
              <ArticleIcon />
              Статьи
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

import React from "react";
import "./footer.css";
import { Link, useNavigate } from "react-router-dom/dist";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div>
            <h1 onClick={() => navigate("/")} className="footer__logo">
              Past2Futures
            </h1>
            <div className="footer__container-links">
              <Link to="#">Статьи</Link>
              <Link to="#">Тесты</Link>
              <Link to="#">Сборники</Link>
              <Link to="#">Журнал</Link>
              <Link to="#">Магазин</Link>
            </div>
          </div>
          <div className="search-container">
            <div class="search-text">Введите запрос для поиска</div>
            <input type="text" class="search-input" placeholder="Поиск..." />
            <div class="search-icons"></div>
          </div>
          <div className="emails">
            <div>
              <div style={{ color: "rgb(124, 126, 126)" }}>
                По вопросам подписки
              </div>
              <p style={{ marginTop: "10px" }}>pipiska@diletant.media</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <div style={{ color: "rgb(124, 126, 126)" }}>
                По общим вопросам
              </div>
              <p style={{ marginTop: "10px" }}>info@diletant.media</p>
            </div>
          </div>
          <div className="users">
            <div>Пользовательское соглашение</div>
            <div>Подписка на журнал</div>
            <div>Реклама</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

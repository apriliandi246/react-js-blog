import React from "react";
import { Link } from "react-router-dom";
import NoArticle from "../NoArticle";
import { Time } from "../../utils/time";
import { ArticleContainer } from "./styled";
import "./css/style.css";

export default function Articles({ theme, articles }) {
   return (
      <React.Fragment>
         {articles.length === 0 ? (
            <NoArticle />
         ) : (
            <ArticleContainer>
               {articles.map((article) => {
                  return (
                     <div key={article._id} className="articles__article">
                        <Link
                           to={`/${article.slug}`}
                           className="article__title"
                           style={{
                              color: theme === "light" ? "#000000" : "#ffffff",
                           }}
                        >
                           {article.title}
                        </Link>

                        <p className="article__published">
                           {new Time(article.createdAt).format("medium")}
                        </p>
                        <span className="article__tag">{article.tag}</span>
                        <hr
                           className="article__line"
                           style={{
                              border:
                                 window.localStorage.getItem("theme") ===
                                 "light"
                                    ? "1px solid #dfdfdf"
                                    : null,
                           }}
                        />
                     </div>
                  );
               })}
            </ArticleContainer>
         )}
      </React.Fragment>
   );
}

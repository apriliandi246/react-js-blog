import React from "react";
import { Link } from "react-router-dom";
import NoArticle from "../NoArticle/index";
import { Time } from "../../utils/time";
import { ArticleContainer } from "./styled";
import "./style.css";


export default function Articles({ articles, theme }) {
   return (
      <React.Fragment>
         {articles.length === 0 ? <NoArticle /> :
            (
               <ArticleContainer>
                  {articles.map((article) => {
                     return <div key={article._id} className="articles__article">
                        <Link to={`/${article.slug}`} className="article__title" style={{ color: theme === "light" ? "#000000" : null }}>
                           {article.title}
                        </Link>

                        <p className="article__published">{new Time(article.createdAt).format("medium")}</p>
                        <span className="article__tag">{article.tag}</span>
                        <hr className="article__line" style={{ border: theme === "light" ? "1px solid #dfdfdf" : null }} />
                     </div>
                  })}
               </ArticleContainer>
            )}
      </React.Fragment>
   );
}

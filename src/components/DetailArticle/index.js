import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import { Time } from "../../utils/time";
import Spinner from "../Spinner";
import { darkTheme, lightTheme } from "../Theme";
import { GlobalStyle } from "./styled";
import "./css/style.css";

async function fetchArticle(key, slug) {
   const result = await axios.get(
      `http://localhost:4000/api/articles/slug${slug}`
   );
   return result.data;
}

export default function Article({ history, match }) {
   const { data: article, status } = useQuery(
      ["article", match.url],
      fetchArticle
   );

   return (
      <ThemeProvider
         theme={
            window.localStorage.getItem("theme") === "light"
               ? lightTheme
               : darkTheme
         }
      >
         <React.Fragment>
            <GlobalStyle />

            <div className="button-home">
               <Link
                  to="/"
                  className="to-home"
                  style={{
                     color:
                        window.localStorage.getItem("theme") === "light"
                           ? "#000000"
                           : "#ffffff",
                  }}
               >
                  &#10229; Home
               </Link>
            </div>

            {status === "loading" ? (
               <Spinner />
            ) : (
               <div className="container-article">
                  <div className="head">
                     <h1 className="head__title">{article[0].title}</h1>

                     <p className="head__published">
                        {new Time(article[0].createdAt).format("medium")}
                     </p>

                     <span className="head__tag">{article[0].tag}</span>
                  </div>

                  <div className="article-body">
                     <ReactMarkdown source={article[0].markdown} />
                  </div>
               </div>
            )}
         </React.Fragment>
      </ThemeProvider>
   );
}

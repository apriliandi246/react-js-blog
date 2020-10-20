import React from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import Navbar from "../Navbar";
import Collapse from "../Collapse";
import Articles from "../Articles";
import Spinner from "../Spinner";
import { apiEndpoint } from "../../config.json";
import { GlobalStyle } from "./styled";
import { lightTheme, darkTheme } from "../Theme";
import "./css/style.css";

async function fetchArticles() {
   const result = await axios.get(apiEndpoint);
   return result.data;
}

export default function Home() {
   const [theme, setTheme] = React.useState(
      window.localStorage.getItem("theme")
   );

   const [isHasTag, setIsHasTag] = React.useState(false);
   const [articlesTag, setArticlesTag] = React.useState([]);
   const { data: articles, status } = useQuery("articles", fetchArticles);

   function chooseArticleTag(tag) {
      const result = articles.filter((article) => article.tag === tag);
      setArticlesTag(result);
      setIsHasTag(true);
   }

   function chooseAllrticles() {
      setIsHasTag(false);
   }

   function changeTheme() {
      window.localStorage.setItem(
         "theme",
         theme === "light" ? "dark" : "light"
      );
      setTheme(window.localStorage.getItem("theme"));
   }

   if (status === "loading") {
      return <Spinner />;
   }

   return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
         <React.Fragment>
            <GlobalStyle />

            <Navbar changeTheme={changeTheme} />

            <div className="container-home">
               <Collapse
                  chooseArticleTag={chooseArticleTag}
                  chooseAllrticles={chooseAllrticles}
               />

               <Articles
                  theme={theme}
                  articles={isHasTag === true ? articlesTag : articles}
               />
            </div>
         </React.Fragment>
      </ThemeProvider>
   );
}

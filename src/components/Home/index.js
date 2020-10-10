import React from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { Navbar } from "../Navbar/index";
import Collapse from "../Collapse/index";
import Articles from "../Articles/index";
import NoArticle from "../NoArticle";
import { apiEndpoint } from "../../config.json";
import { GlobalStyle } from "./styled";
import { lightTheme, darkTheme } from "../Theme/index";
import "./style.css";

export default function Home() {
   const CancelToken = axios.CancelToken;
   const [theme, setTheme] = React.useState(
      window.localStorage.getItem("theme")
   );
   const [articles, setArticles] = React.useState([]);
   const [isHasTag, setIsHasTag] = React.useState(false);
   const [articlesTag, setArticlesTag] = React.useState([]);

   React.useEffect(() => {
      let cancel;

      async function fetchData() {
         try {
            const result = await axios(apiEndpoint, {
               cancelToken: new CancelToken(function (c) {
                  cancel = c;
               }),
            });
            setArticles(result.data);
         } catch {
            return <NoArticle />;
         }
      }

      fetchData();

      return () => {
         cancel();
      };
   }, [CancelToken]);

   const changeTheme = React.useCallback(() => {
      window.localStorage.setItem(
         "theme",
         theme === "light" ? "dark" : "light"
      );
      setTheme(window.localStorage.getItem("theme"));
   }, [theme]);

   function chooseArticleTag(tag) {
      const result = articles.filter((article) => article.tag === tag);
      setArticlesTag(result);
      setIsHasTag(true);
   }

   function chooseAllrticles() {
      setIsHasTag(false);
   }

   return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
         <React.Fragment>
            <GlobalStyle />

            <Navbar changeTheme={changeTheme} />

            <div className="container-home">
               <Collapse
                  theme={theme}
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

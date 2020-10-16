import React from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import Navbar from "../Navbar";
import Collapse from "../Collapse";
import Articles from "../Articles";
import NoArticle from "../NoArticle";
import { apiEndpoint } from "../../config.json";
import { GlobalStyle } from "./styled";
import { lightTheme, darkTheme } from "../Theme";
import "./css/style.css";

export default function Home() {
   const [theme, setTheme] = React.useState(
      window.localStorage.getItem("theme")
   );
   const articles = useFetchArticles(apiEndpoint);
   const [isHasTag, setIsHasTag] = React.useState(false);
   const [articlesTag, setArticlesTag] = React.useState([]);

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

function useFetchArticles(link) {
   const CancelToken = axios.CancelToken;
   const [articles, setArticles] = React.useState([]);

   React.useEffect(() => {
      let cancel;

      async function fetchData() {
         try {
            const result = await axios(link, {
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
   }, [CancelToken, link]);

   return articles;
}

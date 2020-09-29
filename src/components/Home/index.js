import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import Navbar from '../Navbar/index';
import Collapse from '../Collapse/index';
import Articles from '../Articles/index';
import { apiEndpoint } from '../../config.json';
import { GlobalStyle } from './styled';
import { lightTheme, darkTheme } from '../Theme/index';
import './style.css';


export default function Home() {
   const [articles, setArticles] = useState([]);
   const [articleTag, setArticleTag] = useState("");
   const [theme, setTheme] = useState(window.localStorage.getItem("theme"));
   const CancelToken = axios.CancelToken;
   const source = CancelToken.source();

   useEffect(() => {
      articleTag === "" ? getAllArticles(apiEndpoint) : getAllArticles("${apiEndpoint}/tag/${articleTag}");

      return () => {
         source.cancel();
      }
   });

   function chooseAllArticles() {
      setArticleTag("");
      getAllArticles(apiEndpoint);
   }

   function chooseArticleTag(tag) {
      setArticleTag(tag);
   }

   function changeTheme() {
      window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
      setTheme(window.localStorage.getItem("theme"));
   }

   function getAllArticles(endpoint) {
      axios.get(endpoint, {
         cancelToken: source.token
      })
         .then((response) => {
            setArticles(response.data);
         })
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
                  chooseAllrticles={chooseAllArticles}
               />

               <Articles
                  theme={theme}
                  articles={articles}
               />
            </div>
         </React.Fragment>
      </ThemeProvider>
   );
}

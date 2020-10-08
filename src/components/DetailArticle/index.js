import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { Time } from "../../utils/time";
import Spinner from "../Spinner";
import { darkTheme, lightTheme } from "../Theme/index"
import { GlobalStyle } from "./styled";
import "./style.css";
import { apiEndpoint } from "../../config.json";


export default function Article({ history, match }) {
   const CancelToken = axios.CancelToken;
   const source = CancelToken.source();
   const [article, setArticle] = React.useState([]);
   const [theme] = React.useState(window.localStorage.getItem("theme"));

   React.useEffect(() => {
      axios.get(`${apiEndpoint}/slug${match.url}`, {
         cancelToken: source.token
      })
         .then((response) => {
            setArticle(response.data);
         })
         .catch((ex) => {
            if (ex.response && ex.response.status === 404) {
               history.push("/");
            }
         });

      return () => {
         source.cancel();
      }
   });

   return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
         <React.Fragment>
            <GlobalStyle />

            <div className="button-home">
               <Link
                  to="/"
                  className="to-home"
                  style={{ color: theme === "light" ? "#000000" : "#ffffff" }}
               >
                  &#10229; Home
               </Link>
            </div>

            {article.length === 0 ? <Spinner /> : (
               <div className="container-article">
                  <div className="head">
                     <h1 className="head__title">{article[0].title}</h1>
                     <p className="head__published">{new Time(article[0].createdAt).format("medium")}</p>
                     <span className="head__tag">{article[0].tag}</span>
                  </div>

                  <div className="article-body">
                     <ReactMarkdown
                        source={article[0].markdown}
                     />
                  </div>
               </div>
            )}
         </React.Fragment>
      </ThemeProvider>
   );
}

import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { Time } from "../../utils/time";
import Spinner from "../Spinner";
import { darkTheme, lightTheme } from "../Theme";
import { GlobalStyle } from "./styled";
import "./css/style.css";
import { apiEndpoint } from "../../config.json";

export default function Article({ history, match }) {
   const article = useFetchArticle(`${apiEndpoint}/slug${match.url}`, history);

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

            {article.length === 0 ? (
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

function useFetchArticle(link, history) {
   const CancelToken = axios.CancelToken;
   const [article, setArticle] = React.useState([]);

   React.useEffect(() => {
      let cancel;

      async function fetchData() {
         try {
            const result = await axios(link, {
               cancelToken: new CancelToken(function (c) {
                  cancel = c;
               }),
            });

            setArticle(result.data);
         } catch (ex) {
            if (ex.response && ex.response.status === 404) {
               history.push("/");
            }
         }
      }

      fetchData();

      return () => {
         cancel();
      };
   }, [CancelToken, link, history]);

   return article;
}

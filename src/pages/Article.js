import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams(); // for the article being used in router(parent element's changable parameter -- after the ":" is the changable part)
  const url = "http://localhost:3000/articles/" + id;

  const { data: article, isPending, error } = useFetch(url); //fetching the data returns data, waiting and error(states)

  const history = useHistory(); // users click history

  useEffect(() => {
    if (error) {
      // history.goBack()

      // redirect to home page
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author} </p>
          <p>{article.body} </p>
        </div>
      )}
    </div>
  );
}

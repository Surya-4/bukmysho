import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Summary() {
  const { movie_id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((resp) => {
      const data = resp.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].show.id === Number.parseInt(movie_id)) {
          console.log(data[i]);
          setDetails(data[i]);
          break;
        }
      }
    });
  }, []);

  return (
    <div>
      {details && (
        <div className="card">
          <img
            src={
              !details.show.image || !details.show.image.original
                ? "https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA="
                : details.show.image.original
            }
            className="card-img-top"
            style={{ width: "200px", height: "200px" }}
            alt="..."
          />
          <h5 className="card-name">
            <b>Title : </b>
            {details.show.name}{" "}
          </h5>

          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: details.show.summary }}
          ></p>
          <p className="card-text">
            <b>Run Time : </b>
            {details.show.runtime ? details.show.runtime : "Unknown"}
          </p>

          <p className="card-text">
            <b>Rating : </b>
            {!(!details.show.rating || !details.show.rating.average)
              ? details.show.rating.average
              : "Unknown"}
          </p>
          <p className="card-text">
            <b>Network : </b>
            {!details.show.network || !details.show.network.name
              ? "Unknown"
              : details.show.network.name}
          </p>
          <a
            rel="noreferrer"
            href={`/book/${movie_id}`}
            className="btn btn-sm btn-dark"
          >
            Book Now
          </a>
        </div>
      )}
    </div>
  );
}

export default Summary;

import React from "react";

import { Link } from "react-router-dom";

import "./Style.css";

import { useSelector, useDispatch } from "react-redux";

import { BorrarTheMovieAccion } from "../Redux/Reducers/TheMovieDB";

import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Index = () => {
  const dispatch = useDispatch();

  const DataDetails = useSelector((store) => store.TheMoviesData.Details);
  console.log(DataDetails);

  return (
    <div className="Details">
      <div className="Container">
        <nav>
          <Link to="/Home" onClick={() => dispatch(BorrarTheMovieAccion())}>
            <Button type="primary" icon={<ArrowLeftOutlined />}>
              Regresar
            </Button>
          </Link>
        </nav>
        <main>
          <section className="Info">
            {DataDetails.map((item) => (
              <div className="Flex-column Center">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500" + item.profile_path + ""
                  }
                  alt="actor"
                  width="150px"
                />
                <div className="Flex-column Center">
                  <h3>{item.name}</h3>
                  <Button danger>
                    {item.gender === 1 ? "Mujer" : "Hombre"}
                  </Button>
                  <h5>Popularidad: {item.popularity}</h5>
                </div>
              </div>
            ))}
          </section>
          <section className="Movies">
            <div>
              <h1 className="Title-section">Peliculas:</h1>
            </div>
            <div>
              {DataDetails.map((item) => (
                <>
                  {item.known_for.map((movie) => (
                    <>
                      <div className="Flex-row Start-End" style={{flexWrap:"wrap"}}>
                        <p className="Title">{movie.original_title}</p>
                        <p>
                          {movie.vote_average}/10{" "}
                          <span className="Icon-Start">★</span>
                        </p>
                      </div>
                      <div className="Flex-row Center Content-Movie">
                        <img
                          src={
                            "https://image.tmdb.org/t/p/w500" +
                            movie.poster_path +
                            ""
                          }
                          alt="poster Peliculas"
                        />
                        <div className="Container-Overview">
                          <p className="Overview">{movie.overview}</p>
                          <p className="Fecha">
                            <b>Fecha de estreno: {movie.release_date}</b>
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;

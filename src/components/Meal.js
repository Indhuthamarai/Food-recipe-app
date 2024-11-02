import React, { useState } from "react";
import MealItem from "./MealItem";
import Login from "./login";

const Meal = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const searchMeal = (evt) => {
    if (evt.key === "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
        
        });
    }
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="main">
      <div className="head">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Foodie
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLoginClick}>
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <input
                type="search"
                className="search-bar"
                placeholder="Enter the food name"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                onKeyPress={searchMeal}
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {showLogin ? (
        <Login />
      ) : (
        <div>
          <div className="heading">
            <h1>Search Your Food Recipe</h1>
            <h4>
              "Life is uncertain. Eat dessert first.Enjoy the sweet moments now,for
              they make life truly delightful."
            </h4>
          </div>

          <div className="container">
            {(Mymeal == null) ? (
              <p>Not Found</p>
            ) : (
              Mymeal.map((res) => {
                return <MealItem data={res} />;
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meal;
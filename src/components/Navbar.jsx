import { useEffect, useState } from "react";
import "../style.css";
import axios from "axios";
export const Navbar = () => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("https://fast-reef-22226.herokuapp.com/data").then((data) => {
      // console.log('data:', data.data)
      setSearchData(data.data);
    });
  };

  return (
    <div>
      <div id="navbar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjhEbvDTG93zVBO4EjFihqPvpeYR_FLZJHA&usqp=CAU" />

        <input
          className="search-box"
          type="text"
          placeholder="Enter your query "
        ></input>
        <button className="search">Search</button>
      </div>
      <div id="sort">
          <button id="sort-alphabetically">Sort A-Z</button>
          <button id="sort-alphabetically-desc">Sort Z-A</button>
          <button id="sort-by-date">sort by date(Asc)</button>
          <button id="sort-by-date-desc">sort by date(desc)</button>
          <button id="sort-by-quality">sort by quality(Asc)</button>
          <button id="sort-by-quality-desc">sort by quality(desc)</button>
          <button id="filter-explicit">filter-explicit</button>


      </div>
      <div id="search-result"  className="detailed-result">
        {searchData.map((e) => (
          <div className="result " key={e.id}>
            <p>{e.url}</p>
            <div id="textId" >
              <a href="#" className="title">{e.title}</a>
              <p className="author">|  {e.author}</p>
            </div>
            <p className="desc">{e.description}</p>
            <h5 id="date" className="creation-date"> creation_date: {e.creation_date}</h5>
            <div id="quality" >
                <h5 className="explicit"> Explicit : true{e.explicit}</h5>
                <h5 id="h5" className="quality">Quality: {e.quality}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, {useState, useEffect, createContext } from "react";
import './App.css';

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Results from "./page/Results";
import SingleView from "./page/SingleView";

// import Browse from "./components/browse/Browse";

export const AnimeContext = createContext();

function App() {
  const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
  const [upComingAnime, setUpComingAnime] = useState([]);
	const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		setTopAnime(temp.top.slice(0, 7));
	}

  const UpComingAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
       .then(res => res.json());

       setUpComingAnime(temp.top.slice(0, 7))
  }

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		setAnimeList(temp.results);
	}

	useEffect(() => {
		GetTopAnime();
	}, []);

  console.log(topAnime)

  // value={[upComingAnime, setUpComingAnime]}

  return (
    <div className="App">
          
  <AnimeContext.Provider value={[ topAnime, setTopAnime]}  >
          <Router>
          <Header />
             <Switch>
               <Route path="/" exact >
                 <Home topAnime={topAnime}/>
                </Route>
               <Route path="/results" exact >
                <Results />
                </Route>
               <Route path="/single-view" exact >
                <SingleView />
                </Route>
             </Switch>
          </Router>

          </AnimeContext.Provider>
          </div>  
  );
}

export default App;

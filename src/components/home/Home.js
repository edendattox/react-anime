import React, {useContext} from 'react';
import "./Home.css";
import CardFront from "../cardFront/CardFront";

import { AnimeAiringContext} from "../../context/AiringContext";
import {  AnimePopularContext} from "../../context/Popular";

function Home() {

    const [airing, setAiring] = useContext( AnimeAiringContext);
    const [popular, setPopular] = useContext(  AnimePopularContext);
    
    return (
        <div className="home">
            <div className="home__title">
             <h3>Recently Added</h3>
            </div>
            
            <div className="home__anime">
              {
                  airing.map(anime => (
                    <CardFront
                    className="cardFront__style"
                    key={anime.mal_id}
                    title={anime.title}
                    img={anime.image_url}
                    episode={anime.episodes}  
                    />
                ))
              }
            </div>
            
            <div className="home__title__two">
                 <h3>Popular This Week</h3>
            </div>

            <div className="home__anime">
             {
                 popular.map(anime => (
                    <CardFront
                    className="cardFront__style"
                    key={anime.mal_id}
                    title={anime.title}
                    img={anime.image_url}
                    episode={anime.episodes}  
                    />
                ))
              }


            </div>

         
        </div>
    )
}

export default Home;

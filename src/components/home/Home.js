import React, {useContext} from 'react';
import "./Home.css";
import CardFront from "../cardFront/CardFront";

import {AnimeContext} from "../../App"

function Home() {

    const [topAnime, setTopAnime] = useContext(AnimeContext);
    
    return (
        <div className="home">
            <div className="home__title">
             <h3>Popular</h3>
            </div>
            
            <div className="home__anime">
              {
                  topAnime.map(anime => (
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
            
            <div className="home__title">
                 <h3>UpComing Anime</h3>
            </div>

            <div className="home__anime">
             {
                 topAnime.map(anime => (
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

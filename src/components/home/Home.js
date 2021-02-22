import React, {useContext} from 'react';
import "./Home.css";
import CardFront from "../cardFront/CardFront";

import { AnimeAiringContext} from "../../context/AiringContext";
import {  AnimePopularContext} from "../../context/Popular";
import Footer from "../footer/Footer";

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
            
             <div className="donate">
               <h3>We need your help to keep going. By donating you can help us to keep the site alive and even upgrade the servers for a better experience.
               Don't forget to join our discord community!</h3>
             </div>

             <div className="donate__button">
                 <button></button>
             </div>

            <div className="footer">
                <Footer />
            </div>

            </div>

         
        </div>
    )
}

export default Home;

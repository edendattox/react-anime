import React, {useContext} from 'react'
import {AnimeSearchContext} from "../header/Header";

function SearchContent() {
    const [ animelist, setAnimelist] = useContext( AnimeSearchContext);


    return (
        <div className="SearchContent">
            <h3>Search 	&#62; naruto</h3>
            {
                animelist.map(data => (
                    <h1>{data.title}</h1>
                ))
            }
        </div>
    )
}

export default SearchContent

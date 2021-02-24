import React, {useState, useEffect, createContext}  from 'react'
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import {Link} from "react-router-dom";

export const AnimeSearchContext = createContext();

export const HeaderProvider = () => {

  const [animelist, setAnimelist] = useState([]);
	const [search, setSearch] = useState("");

    
	const HandleSearch = e => {
		e.preventDefault();

    FetchAnime(search);
    console.log(search)
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		setAnimelist(temp.results);

    console.log(temp.results);

}

     // useEffect(() => {
  //   FetchAnime();
	// }, []);

 

    return (
      <AnimeSearchContext.Provider value={[ animelist, setAnimelist]}>
        <div className="header">
           <div className="header__left">
             <Link to="/">
            <img 
            className="logo"
             src="https://4anime.co/static/logo.png"
              alt="logo" 
              height= "54px"
              width= "50px"
             />
             </Link>

             <Link to="/browse">
            <span >Browse</span>
            </Link>

            <Link to="/random">
            <span >Random</span>
            </Link>

            <span >Genre</span>
          </div>

            <div className="header__right">
              <form className="search-box" onSubmit={HandleSearch}>
              <input
                type="search"
                placeholder="Search..." 
                value={search}
                onChange={e => setSearch(e.target.value)}           
                required 
                style={{
                  backgroundColor: "#161616",
                  padding: "15px",
                  border: "1px solid #b6b6b6",
                  width: "400px",
                  borderRadius: ".5em",
                  color: "#b6b6b6"
                   }}
             />


                </form>
                <span ><i className="fab fa-discord" id="icon" style={{fontSize: "30px", color: "#b6b6b6"}} ></i></span>
                <span><i className="fas fa-sign-in-alt" id="icon" style={{fontSize: "20px", color: "#b6b6b6"}} ></i></span>
                <p>Login</p>
               
            </div>

            <div className="header__burger">
                <ShuffleIcon className="icon"/>
                <SearchIcon className="icon"/>
                <MenuIcon className="icon"/>
            </div>
        </div>
        </AnimeSearchContext.Provider>

    )
}

export default HeaderProvider;

// import React,{useState, useEffect} from 'react'
// import "./Header.css";
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import ShuffleIcon from '@material-ui/icons/Shuffle';
// import {Link} from "react-router-dom";





// export const HeaderContent = () => {

//     const [search, setSearch] = useState("");
//     const [animelist, setAnimelist] = useState([]);

//     const HandleSearch = e => {
// 		e.preventDefault();

//     FetchAnime(search);
//     setSearch("")
//     console.log(search)

// 	}

//     const FetchAnime = async (query) => {
// 		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
// 			.then(res => res.json());

// 		setAnimelist(temp.results);

//     console.log(temp.results);

// }


//      useEffect(() => {
//     FetchAnime();
// 	}, []);


//     return (
    
//        <div className="header">
//          <nav>
//            <div className="header__left">
//              <Link to="/home">
//             <img 
//             className="logo"
//              src="https://4anime.co/static/logo.png"
//               alt="logo" 
//               // height="26px"
//               // width="26px"
//              />
//              </Link>

//              <Link to="/browse">
//               <span >Browse</span>
//             </Link>
//             <span >Random</span>
//             <span >Genre</span>

//           </div>

//             <div className="header__right">
//                <form className="search-box" onSubmit={HandleSearch}>
//               <input
//                 type="search"
//                 placeholder="Search..." 
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}           
//                 required 
//                 style={{
//                   backgroundColor: "#161616",
//                   padding: "15px",
//                   border: "1px solid #b6b6b6",
//                   width: "400px",
//                   borderRadius: ".5em",
//                   color: "#b6b6b6"
//                    }}
//              />
//              </form>

//                 <span ><i className="fab fa-discord" id="icon" style={{fontSize: "30px", color: "#b6b6b6"}} ></i></span>
//                 <span><i className="fas fa-sign-in-alt" id="icon" style={{fontSize: "20px", color: "#b6b6b6"}} ></i></span>
//                 <p>Login</p>
               
//             </div>

//             <div className="header__burger">
//                 <ShuffleIcon className="icon"/>
//                 <SearchIcon className="icon"/>
//                 <MenuIcon className="icon"/>
       
//             </div>
//             </nav>
//        </div>

//     )
// }

// export default HeaderContent;

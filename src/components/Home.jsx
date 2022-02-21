import {Link} from "react-router-dom"

export const Home = ()=>{

    return(<div>
         <div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjhEbvDTG93zVBO4EjFihqPvpeYR_FLZJHA&usqp=CAU"/>
         </div>
        <input className="search-box" type="text" placeholder="Enter your query "></input>
        <button className="search" onClick={()=>{
          // <Link to="/search?q=YourQuery">Navbar</Link>
        }}> <Link to="/search/:q=YourQuery">Enter</Link></button>
    </div>)
}
//import logo from "../../img/CatwikiLogo.svg";
import logowhite from "../../img/catwikilogowhite.svg";
import heroImagelg from "../../img/HeroImagelg.png";
import threecats from "../../img/threecats.png";
import cat from "../../img/cat.jpg";
import catB from "../../img/catB.jpg";
import catC from "../../img/catC.jpg";
import catD from "../../img/catD.jpg";
import { useContext, useEffect, useState } from "react";
import BreedContext from "../../context/breedsContext";
import "./home.css";

const Home = () => {

    

    const [categories, setCategories] = useState([]);
    //const [selectionBreed, setSelectionBreed] = useState();
    const {searchingBreeds} = useContext(BreedContext);

   useEffect(() => {

        fetch(`https://api.thecatapi.com/v1/breeds`)
           .then((resp) => {
               return resp.json()
           })
           .then((data) => {
               setCategories(data);
           })
    
   }, []);

   console.log(categories)

    return(
        <div>
            <div className="container mx-auto">
                <div className="hero pb-12">
                 <img className="rounded-3xl" src={heroImagelg} alt=""></img>
                    <div className="hero-img">
                        <img className="log-in-hero mx-auto" src={logowhite} alt=""></img>
                        <p className="hero-img-p text-white">Get to know more about your cat breed</p>
                            <select className="rounded-3xl mt-3" name="selectBreed" default="Search" onChange={(e) =>  searchingBreeds(e.target.value)}>
                            <option selected>Search</option>
                                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                    </div>
                    <div>
                        <div className="w-11/12 p-10 text-left">
                            <a href="/mostPopular">Most Searched Breeds</a>
                        </div>
                        <div className="seeMore w-11/12 flex mx-auto">
                            <h2 className="font-extrabold text-left">
                                66+ Breeds For you to discover
                            </h2>
                            <a href="/breeds">SEE MORE -</a>
                        </div>
                        <div className="hisbreed w-11/12 mx-auto text-left flex flex-wrap">
                            <div className="m-3 mx-auto">
                            <img src={cat} alt=""></img>
                                <p>his breed</p>
                            </div>
                            <div className="m-3 mx-auto">
                                <img src={catB} alt=""></img>
                                <p>his breed</p>
                            </div>
                            <div className="m-3 mx-auto">
                                <img src={catC} alt=""></img>
                                <p>his breed</p>
                            </div>
                            <div className="m-3 mx-auto">
                                <img src={catD} alt=""></img>
                                <p>his breed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="a flex flex-wrap p-14 mx-auto w-full">
                    <div className="shouldCat text-left m-3 mx-auto">
                        <p className="marginbar mt-12">------</p>
                        <h2 className="font-bold">Why should you have a cat?</h2>
                        <p className="mt-3">lorem</p>
                        <p className="mt-6"><a href="?">READ MORE -</a></p>
                    </div>
                    <div className="shouldCat-imgs flex flex-wrap mx-auto">
                       <img src={threecats} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*<select> 
 {breed.map(<div key={idbreed}>
  <option value={idbreed}>name breed</option>
  </div>)}
  
  
  <select name="selectBreed">
                        {categories.map(c => <option key={c.id} value={c.id}>{c.breed}</option>)}
                        </select>
  
    <input className="p-4 rounded-3xl mt-3" type="text" placeholder="Enter your breed"></input>*/

export default Home;
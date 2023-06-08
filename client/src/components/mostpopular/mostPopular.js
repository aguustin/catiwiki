import "./mostpopular.css";
import { useEffect, useState } from "react";
import { popularBreeds } from "../../api/api";


const MostPopular = () => {

    const [mostPopu, setMostPopu] = useState([]);

    useEffect(() => {
        ( async () => {
            const takePopularBreeds = await popularBreeds();
            console.log(takePopularBreeds);
            setMostPopu(takePopularBreeds.data);
        })()
       
    }, []);
console.log(mostPopu);
    return(
        <div className="backcolor">
        <div className="topten-father container mx-auto w-11/12">
            <div className="b text-left mt-10 mb-10">
                <h2 className="text-4xl font-bold">Top 10 most searched breeds</h2>
            </div>
            {mostPopu.map(m => <div className="topten-son flex mx-auto m-6">
                <img className="rounded-3xl mx-auto" src={m.breedImg} alt=""></img>
                <div className="desc text-left mx-auto">
                    <h2 className="font-bold">1.{m.breedName}</h2>
                    <p className="mt-3">{m.description}</p>
                </div>
            </div>)}
        </div>
        
        </div>
    )
}

export default MostPopular;
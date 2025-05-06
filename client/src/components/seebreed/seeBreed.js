import "./seeBreed.css";
import { FillCircle, GrayCircle } from "../utils/utils";
import { useContext, useEffect, useState } from "react";
import BreedContext from "../../context/breedsContext";

const SeeBreed = () => {

    const api = "live_ZSS8KUufNXJlU1K2otjlJMoB94Zx4M9K9ceLziq4ZkD9lVrED4KqOfvLU97OricH";
    const {selectionBreed} = useContext(BreedContext);
    const [breedDetails, setBreedDetails] = useState([]);
    const [ breedPhotos , setBreedPhotos ] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!selectionBreed) return;

        setLoading(true); // Start loading

        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${selectionBreed}&api_key=${api}`)
            .then((res) => res.json())
            .then((data) => {
                setBreedDetails([data[0]]);
                setBreedPhotos(data);
                setLoading(false); // Stop loading
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setLoading(false); // Also stop loading on error
            });
    }, [selectionBreed, api]);

    if (loading) {
        return (
            <div className="breed-loader">
                <div>
                    <span class="loader"></span>
                    <p>Cargando...</p>
                </div>
            </div> 
        )
    }



    return(
        <div className="container mx-auto p-8">
            {breedDetails?.map(b => <div key={b?.id} className="seeBreed flex mx-auto">
            <img className="catb-img rounded-3xl mx-6" src={b?.url} alt=""></img>
             <div  className="seeBreed-son text-left mx-6">
                    <p className="text-3xl font-bold">Breed</p>
                    <p></p>
                    <p><b>Temperament:</b>{b?.breeds[0].temperament}</p>
                    <p><b>Origins:</b>{b?.breeds[0].origin}</p>
                    <p><b>Life Span:</b>{b?.breeds[0].life_span}</p>
                    <p className="flex">adaptability:
                    {
                        [...new Array(5)].map((puntuation, index) => {
                            return <div className="inline-flex">{ index < b?.breeds[0].adaptability ? <FillCircle/> : <GrayCircle/> }</div>
                        })
                    }
                    </p>
                    <p className="flex">health_issues:
                    {
                        [...new Array(5)].map((puntuation, index) => {
                            return <div className="inline-flex">{ index < b?.breeds[0].health_issues ? <FillCircle/> : <GrayCircle/> }</div>
                        })
                    }
                    </p>
                    <p className="flex">intelligence:
                    {
                        [...new Array(5)].map((puntuation, index) => {
                            return <div className="inline-flex">{ index < b?.breeds[0].intelligence ? <FillCircle/> : <GrayCircle/> }</div>
                        })
                    }
                    </p>
                    <p className="flex">affection_level:
                    {
                        [...new Array(5)].map((puntuation, index) => {
                            return <div className="inline-flex">{ index < b?.breeds[0].affection_level ? <FillCircle/> : <GrayCircle/> }</div>
                        })
                    }
                    </p>
                    <p className="flex">child_friendly:
                    {
                        [...new Array(5)].map((puntuation, index) => {
                            return <div className="inline-flex">{ index < b?.breeds[0].child_friendly ? <FillCircle/> : <GrayCircle/> }</div>
                        })
                    }
                    </p>
                    <p className="flex">grooming:
                    {
                        [...new Array(5)].map((puntuation, index) => {
                            return <div className="inline-flex">{ index < b?.breeds[0].grooming ? <FillCircle/> : <GrayCircle/> }</div>
                        })
                    }
                    </p>
                    <p className="flex">social_needs:
                    {
                        [...new Array(5)].map((puntuation, index) => {
                            return <div className="inline-flex">{ index < b?.breeds[0].social_needs ? <FillCircle/> : <GrayCircle/> }</div>
                        })
                    }
                    </p>
                    <p className="flex">stranger_friendly:
                    {
                        [...new Array(5)].map((puntuation, index) => {
                            return <div className="inline-flex">{ index < b?.breeds[0].stranger_friendly ? <FillCircle/> : <GrayCircle/> }</div>
                        })
                    }
                    </p>
                </div>
            </div>)}
            <p className="text-left font-bold text-3xl mt-9 mr-3">Other photos</p>
            <div className="e mt-3 mx-auto flex-wrap">
                {breedPhotos?.map(b => <div key={b?.id} className="otherPhotos mx-auto">
                    <img src={b?.url} alt=""></img>  
                </div>)}
            </div>
        </div>
    )
    
}


export default SeeBreed;
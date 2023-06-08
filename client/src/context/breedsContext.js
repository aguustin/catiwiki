import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import {  searchBreeds } from "../api/api";

const BreedContext = createContext();

export const BreedContextProvider = ({children}) => {

    let navigate = useNavigate();

    const [selectionBreed, setSelectBreed] = useState();

    const searchingBreeds = async (e) => {
        
        setSelectBreed(e);
        navigate("/seeBreed");
        await searchBreeds(e);
       
    }   

    return(
        <BreedContext.Provider value={{selectionBreed, setSelectBreed, searchingBreeds}}>{children}</BreedContext.Provider>
    )
}

export default BreedContext;
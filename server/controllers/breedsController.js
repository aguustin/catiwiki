import breedsModel from "../models/breedsModel.js";
import fetch from "node-fetch";

const api = "live_ZSS8KUufNXJlU1K2otjlJMoB94Zx4M9K9ceLziq4ZkD9lVrED4KqOfvLU97OricH";

export const breedsController = async (req, res) => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=67&api_key=${api}`)
    .then((resp) => {
        return resp.json()
    })
    .then((resp) => {
        res.send(resp);
    })

}


export const searchController = async (req, res) => {

    const e = req.body;
    const breedId = e.selectBreed;
   
    if(breedId){
        const breedExist = await breedsModel.find({idCompare: breedId});
        
        if(breedExist.length > 0){
            const counter = breedExist[0].searchCount + 1;
            const updateCount = await breedsModel.updateOne({idCompare : breedId}, {
                $set: {
                    searchCount: counter
                }
            });
            res.send(updateCount);

        }else{

        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${api}`)
        .then((resp) => {
            return resp.json();
        })
        .then(async (resp) => {
            const data = resp[0];
            const newBreed = new breedsModel({
            idCompare: data.breeds[0].id,
            breedName: data.breeds[0].name,
            description: data.breeds[0].description,
            adaptability: data.breeds[0].adaptability,
            affectionLvl: data.breeds[0].affectionLvl, 
            childFriendly: data.breeds[0].childFriendly,
            grooming: data.breeds[0].grooming,
            intelligence: data.breeds[0].intelligence, 
            healthIssues: data.breeds[0].healthIssues, 
            socialNeeds: data.breeds[0].socialNeeds, 
            strangerFriendly: data.breeds[0].strangerFriendly, 
            breedImg: data.url,
            searchCount: 1
             
            });

            await newBreed.save();
            res.send(newBreed);
        })
        }

    }
}


export const popularBreedsController = async (req, res) => {

    const popularBreeds = await breedsModel.find().sort({searchCount: - 1}).limit(10);

    res.send(popularBreeds);

}

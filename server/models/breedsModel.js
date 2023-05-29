import mongoose from "mongoose";

const breedModel = new mongoose.Schema({
    idCompare: {
        type: String,
        require: true
    },
    breedName: { 
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
	adaptability: {
        type: Number,
        require: true
    },
	affectionLvl: {
        type: Number,
        require: true
    } ,
	childFriendly: {
        type: Number,
        require: true
    },
	grooming: {
        type: Number,
        require: true
    },
	intelligence: {
        type: Number,
        require: true
    } ,
	healthIssues: {
        type: Number,
        require: true
    } ,
	socialNeeds: {
        type: Number,
        require: true
    },
	strangerFriendly: {
        type: Number,
        require: true
    } ,
	breedImg: {
        type: String,
        require: true
    },
	searchCount: {
        type: Number,
        require: true
    }
})

export default mongoose.model("breedModel", breedModel);
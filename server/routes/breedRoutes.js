import { Router } from "express";
import { searchController, popularBreedsController, breedsController } from "../controllers/breedsController.js";

const router = Router();

router.post("/search", searchController)

router.get("/popularBreeds", popularBreedsController);

router.get("/breeds", breedsController);


export default router;
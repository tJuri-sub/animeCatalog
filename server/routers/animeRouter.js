import express from "express";
import { addAnime, updateAnime } from "../controllers/animeController.js";

import { authorized } from "../middlewares/authorized.js";
import { authorize } from "../middlewares/roleAuth.js";

const router = express.Router();

router.post("/addAnime", authorized, authorize(["admin"]), addAnime);
router.put("/updateAnime/:id", authorized, authorize(["admin"]), updateAnime);

export default router;

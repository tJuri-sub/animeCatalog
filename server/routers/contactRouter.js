import express from "express";
import { ContactForm } from "../controllers/contactFormController.js";

const router = express.Router();

router.post("/sendMessage", ContactForm);

export default router;

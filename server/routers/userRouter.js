import express from "express";
import {
  adminLogin,
  logout,
  getAdminUser,
} from "../controllers/adminController.js";

import { authorized } from "../middlewares/authorized.js";
import { authorize } from "../middlewares/roleAuth.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/logout", logout);
router.get("/admin", authorized, authorize(["admin"]), getAdminUser);

export default router;

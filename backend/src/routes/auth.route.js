import express from "express";
import { logoutUser, loginUser, registerUser } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", upload.single('profilePic'), registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

// check if user is logged in
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

export default router;
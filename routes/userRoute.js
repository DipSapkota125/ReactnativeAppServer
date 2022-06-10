import express from "express";
import {
  addTask,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  removeTask,
  resetPassword,
  updatePassword,
  updateProfile,
  updateTask,
  verify,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/verify").post(isAuthenticated, verify);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/update/profile").put(isAuthenticated, updateProfile);
router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/forget/password").post(forgetPassword);
router.route("/reset/password").put(resetPassword);

router.route("/newtask").post(isAuthenticated, addTask);
router.route("/remove/task/:taskId").delete(isAuthenticated, removeTask);
router.route("/update/task/:taskId").get(isAuthenticated, updateTask);

export default router;

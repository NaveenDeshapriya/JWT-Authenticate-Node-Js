import express from "express";
import {login} from "../controller/login.js";
import { authenticate } from "../middleware/authentication.js";
import { home } from "../controller/home.js";

export const router=express.Router();

router.post("/login",login);
router.get("/home",authenticate,home);
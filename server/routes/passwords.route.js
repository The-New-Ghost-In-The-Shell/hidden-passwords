import express from "express";
import mongoose from "mongoose";
import { passwordModel } from "../models/passwordModel.js";

const router = express.Router();

// Create password



router.post("/create-password", async (req, res) => {
    const { passwords, year, month, day, hours, minutes } = req.body;
    const newPassword = new passwordModel({
        passwords,
        year,
        month,
        day,
        hours,
        minutes
    })
    await newPassword.save();
    res.json(newPassword);
})c

// Get a single password

router.get("/:passwordId", async (req, res) => {
    try {
        const password = await passwordModel.findById(req.params["passwordId"]);
        res.json(password);
    } catch (err) {
        res.json({ message: err });
    }
})

export default router
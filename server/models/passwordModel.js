import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
    passwords: {
        type: [String],
        required: true
    },
    year:{
        type: Number,
    },
    month:{
        type: Number,
    },
    day:{
        type: Number,
    },
    hours:{
        type: Number,
    },
    minutes:{
        type: Number,
    }

})

export const passwordModel = mongoose.model("passwords", passwordSchema)
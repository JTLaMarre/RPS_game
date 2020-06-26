const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({

    Initials:{
        type: String,
        trim: true,
        validate: [({ length }) => length <= 3, "only three letters for initals."]
    },
    Score:{
        type: Number
    }

})

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;
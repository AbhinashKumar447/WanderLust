const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defaultLink = "https://cdn.pixabay.com/photo/2017/01/03/19/41/forest-1950402_1280.jpg";

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    image: {
        filename: {
            type: String,
            default: "listingimage"
        },

        url: {
            type: String,
            default: defaultLink
        }
    },

    price: {
        type: Number
    },

    location: {
        type: String,
        required: true
    },

    country: {
        type: String
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
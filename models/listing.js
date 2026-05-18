const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defaultLink = "https://www.namasteindiatrip.com/blog/wp-content/uploads/2024/12/Kashi-Vishwanath-Temple.jpg";

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

            default: defaultLink,

            set: (v) => v === "" ? defaultLink : v
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
const mongooose = require("mongoose");

const postSchema = new mongooose.Schema({
    image : String,
    caption : String
})

const postModel = mongooose.model("post",postSchema);
module.exports = postModel;
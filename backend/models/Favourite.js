var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var FavouriteSchema = new Schema({
    userId: { type: String },
    recipeId: { type: String },
    image: { type: String },
    title: { type: String },
    extendedIngredients: { type: Array },
    instructions: { type: String }
});

module.exports = mongoose.model("Favourite", FavouriteSchema);

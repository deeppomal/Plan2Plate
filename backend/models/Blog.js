var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var BlogSchema = new Schema({
  BlogCategory: { type: String, required: true },
  BlogTopic: { type: String, required: true },
  BlogTitle: { type: String, required: true },
  BlogContent: { type: String, required: true },
  BlogAddedBy: { type: String, required: true },
  BlogAddedDate: { type: String, required: true },
});

module.exports = mongoose.model("Blog", BlogSchema);

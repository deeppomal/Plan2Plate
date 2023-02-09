var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var BlogSChema = new Schema({

  BlogTopic: { type: String, required: true },
    BlogTitle: { type: String, required: true },
  BlogContent:{ type: String, required: true},
  BlogAddedBy: { type: String, required: true },
    BlogAddedDate: { type: String, required: true },
  
});
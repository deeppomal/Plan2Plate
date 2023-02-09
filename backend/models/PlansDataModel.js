var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlanData = new Schema({
    PlanType: { type: String, required: true },
    PlanPrice: { type: String, required: true },
    PlanDuration: { type: String, required: true },
})
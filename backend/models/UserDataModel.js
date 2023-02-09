const mongoose = require("mongoose");
Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

var UserData = new Schema({
  userName: { type: String, required: true, index: { unique: true } },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Gender: { type: String },
  Age: { type: int },
  Weight: { type: int },
  Height: { type: int },
  BodyFat: { type: String },
  ActivityLevel: { type: String },
  Email: { type: String, required: true },
  ContactNumber: { type: String, required: true },
  Country: { type: String },
  userType: { type: String, required: true },

  Preference: {
    BMI: { type: String, required: true },
    TargetedCalories: { type: String },
    MealsCount: { type: int },
    PlanType: { type: String },
    DailyPriceLimit: { type: String },
    DietPreference: { type: String },
    Intolerances: [
      {
        type: String,
      },
    ],
  },

  FoodGoals: {
    Calorie: { type: int },
    Carbs: { type: int },
    Fat: { type: int },
    Protein: { type: int },
    Fiber: { type: int },
  },
});
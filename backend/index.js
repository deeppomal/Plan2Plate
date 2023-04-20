require("dotenv").config();
const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var User = require("./models/user");
var Blog = require("./models/Blog");
const Favourite = require("./models/Favourite");

const app = express();
mongoose.connect('mongodb+srv://Plan2Plate:Plan2PlateAdmin@plan2plate.bzuktav.mongodb.net/Plan2Plate?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("connected to DB");
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/login", (req, res) => {
  res.send("login");
});

app.post("/login", async (req, res) => {
  try {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (user) {
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (err) res.status(401).json({ message: "Error", error: err });

          if (isMatch)
            res.status(201).json({
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
            });
          else res.status(401).json({ message: "Invalid password" });
        });
      } else {
        res.status(401).json({
          message: `No user found with this username: ${req.body.email}`,
        });
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/register", (req, res) => {
  res.send("register");
});

app.post("/register", async (req, res) => {
  try {
    var user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });

    user.save(function (err) {
      if (err) console.log(err);
      res.status(201).json({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/favourite", async (req, res) => {
  try {
    var favourite = new Favourite({
      userId: req.body.userId,
      recipeId: req.body.recipeId,
      image: req.body.image,
      title: req.body.title,
      extendedIngredients: req.body.extendedIngredients,
      instructions: req.body.instructions,
    });

    favourite.save(function (err) {
      res.status(201).json({
        "message":"Added in favourites successfully"
      });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/get-fav/:userId", async (req, res) => {
  try {
    const favs = await Favourite.find({ 'userId': req.params.userId })
    console.log(favs);
    res.status(200).json(favs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

app.delete("/del-fav", async (req, res) => {
  try {
    Favourite.deleteOne({recipeId: req.body.recipeId},(function (err) {
      res.status(201).json({
        "message":"Removed from favourites"
      });
    }));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    // const blogSort = blogs.map(function (element) {
    //   console.log(element);
    //   element.BlogAdded_FormattedDate = new Date(element.BlogAddedDate);
    // });
    // console.log("New data");
    // console.log(blogSort);
    res.json({ status: 200, data: blogs });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/blog", async (req, res) => {
  try {
    var blog = new Blog({
      BlogCategory: req.body.BlogCategory,
      BlogTopic: req.body.BlogTopic,
      BlogTitle: req.body.BlogTitle,
      BlogContent: req.body.BlogContent,
      BlogAddedBy: req.body.BlogAddedBy,
      BlogAddedDate: req.body.BlogAddedDate,
    });

    blog.save(function (err) {
      if (err) throw err;
      res.status(201).json({
        Id: blog.id,
        BlogCategory: blog.BlogCategory,
        BlogTopic: blog.BlogTopic,
        BlogTitle: blog.BlogTitle,
        BlogContent: blog.BlogContent,
        BlogAddedBy: blog.BlogAddedBy,
        BlogAddedDate: blog.BlogAddedDate,
      });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3000);

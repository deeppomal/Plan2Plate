require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var User = require("./models/user");
var Blog = require("./models/Blog");

const app = express();
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("connected to DB");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//GET
app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/login", (req, res) => {
  res.send("login");
});

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json({ status: 200, data: blogs });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/register", (req, res) => {
  res.send("register");
});

//POST
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

app.post("/login", async (req, res) => {
  try {
    User.findOne({ username: req.body.username }, function (err, user) {
      if (user) {
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (err) res.status(401).json({ message: "Error", error: err });

          if (isMatch)
            res.status(201).json({
              id: user.id,
              username: user.username,
              email: user.email,
            });
          else res.status(401).json({ message: "Invalid password" });
        });
      } else {
        res.status(401).json({
          message: `No user found with this username: ${req.body.username}`,
        });
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    user.save(function (err) {
      if (err) throw err;
      res
        .status(201)
        .json({ id: user.id, username: user.username, email: user.email });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3001);

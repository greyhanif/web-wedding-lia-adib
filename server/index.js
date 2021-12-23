// const express = require("express");
// const path = require("path");
// const fs = require("fs");
import express from "express";
import path from "path";
import fs from "fs";
import axios from "axios";

// const { getPostById } = require("./stub/posts");
const app = express();

const PORT = process.env.PORT || 3001;
const indexPath = path.resolve(__dirname, "..", "build", "index.html");

// static resources should just be served as they are
app.use(express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" }));
// here we serve the index.html page
app.get("/", (req, res, next) => {
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    // inject meta tags
    htmlData = htmlData
      .replace("<title>Undangan Pernikahan Lia & Adib</title>", `<title>${post.title}</title>`)
      .replace("__META_OG_TITLE__", `Undangan Pernikahan Lia & Adib`)
      .replace("__META_OG_DESCRIPTION__", `Kepada Bapak/Ibu/Sodara/i di tempat`)
      .replace("__META_DESCRIPTION__", `Kepada Bapak/Ibu/Sodara/i di tempat`)
      .replace("__META_OG_IMAGE__", `src`);
    return res.send(htmlData);
  });
});

// here we serve the index.html page
app.get("/rsvp/to/:slug", (req, res, next) => {
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    // get post info
    const slug = req.params.slug;
    const contacts = axios.post(`https://api.liaadib-weddingday.id/apps/` + slug);
    if (!contacts) return res.status(404).send("Post not found");

    // inject meta tags
    htmlData = htmlData
      .replace("<title>Undangan Pernikahan Lia & Adib</title>", `<title>${post.title}</title>`)
      .replace("__META_OG_TITLE__", post.title)
      .replace("__META_OG_DESCRIPTION__", post.description)
      .replace("__META_DESCRIPTION__", post.description)
      .replace("__META_OG_IMAGE__", post.thumbnail);
    return res.send(htmlData);
  });
});
// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});

const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
// import express from "express";
// import path from "path";
// import fs from "fs";
// import axios from "axios";

// const { getPostById } = require("./stub/posts");
const app = express();

const PORT = process.env.PORT || 3001;
const indexPath = path.resolve(__dirname, "..", "build", "index.html");

// static resources should just be served as they are
app.use(express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" }));

// app.get("/*", (req, res, next) => {
//   fs.readFile(indexPath, "utf8", async (err, htmlData) => {
//     if (err) {
//       console.error("Error during file reading", err);
//       return res.status(404).end();
//     } else if (!req.params) {
//       // inject meta tags
//       htmlData = htmlData
//         .replace("<title>Undangan Pernikahan Lia & Adib | 22 Januari 2022</title>", `<title>Kepada Static</title>`)
//         .replace("__META_DESCRIPTION__", `Kepada Static`)
//         .replace("__META_OG_TITLE__", `Kepada Static`)
//         .replace("__META_OG_DESCRIPTION__", `Kepada Static`)

//         .replace("__META_OG_IMAGE__", `Kepada Static`);
//       return res.send(htmlData);
//     }
//   });
// });

app.get("/rsvp/to/:slug", (req, res, next) => {
  fs.readFile(indexPath, "utf8", async (err, htmlData) => {
    const slug = req.params.slug;
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    } else if (!slug) {
    }
    // get post info
    //
    const slug = req.params.slug;
    // const contacts = await axios.get(`http://localhost:5000/apps/` + slug);
    const contacts = axios.post(`https://api.liaadib-weddingday.id/apps/` + slug);
    console.log(contacts.data);
    console.log(slug);
    if (contacts.data.msg === "no data available") {
      return res.status(404).send("Post not found");
    } else {
      let name = contacts.data.contacts[0].name;
      let city = contacts.data.contacts[0].city;
      let ticketCode = contacts.data.tickets[0].ticketCode;

      // inject meta tags
      htmlData = htmlData
        .replace("<title>Undangan Pernikahan Lia & Adib | 22 Januari 2022</title>", `<title>Kepada ${name}</title>`)
        .replace("__META_DESCRIPTION__", `Kepada ${name}`)
        .replace("__META_OG_TITLE__", `Kepada ${name}`)
        .replace("__META_OG_DESCRIPTION__", `Kepada ${name}`)

        .replace("__META_OG_IMAGE__", `Kepada ${name}`);
      return res.send(htmlData);
    }
  });
});

// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});

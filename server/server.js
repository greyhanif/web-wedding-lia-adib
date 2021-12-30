const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");

app.get("/", function (request, response) {
  console.log(`${moment().local().format("HH:mm:ss")} [UMUM] - Seseorang membuka undangan`);
  const filePath = path.resolve(__dirname, "..", "build", "index.html");

  // read in the index.html file
  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      return console.log(err);
    }
    const config = await axios.get(`https://api.liaadib-weddingday.id/configuration/ogImage`);
    let configOgImage = config.data.valueStr;
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Lia & Adib Wedding Day | 22.01.2022");
    data = data.replace(/\$OG_DESCRIPTION/g, "Kepada Bapak/Ibu/Saudara/i di Tempat");
    data = data.replace(/\$OG_URL/g, "https://liaadib-weddingday.id");
    result = data.replace(/\$OG_IMAGE/g, `${configOgImage}`);
    response.send(result);
  });
});

app.get("/rsvp/to/:slug", (request, response) => {
  // console.log("About page visited!");
  const filePath = path.resolve(__dirname, "..", "build", "index.html");
  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    const slug = request.params.slug;
    // const contacts = await axios.get(`http://localhost:5000/apps/` + slug);
    const contacts = await axios.get(`https://api.liaadib-weddingday.id/apps/${slug}`);
    const config = await axios.get(`https://api.liaadib-weddingday.id/configuration/ogImage`);
    // console.log(config.data);
    // console.log(contacts.data);

    if (contacts.data.msg === "no data available") {
      return response.status(404).send("Post not found");
    } else {
      let name = contacts.data.contacts[0].name;
      let city = contacts.data.contacts[0].city;
      let org = contacts.data.contacts[0].organization;
      let ticketCode = contacts.data.tickets[0].ticketCode;
      let configOgImage = config.data.valueStr;
      // console.log(configOgImage);

      data = data.replace(/\$OG_TITLE/g, `Lia & Adib Wedding Day | 22.01.2022`);
      data = data.replace(/\$OG_DESCRIPTION/g, `Kepada ${name} di ${city}`);
      data = data.replace(/\$OG_URL/g, `https://liaadib-weddingday.id/rsvp/to/${slug}`);
      result = data.replace(/\$OG_IMAGE/g, `${configOgImage}`);
      console.log(`${moment().local().format("HH:mm:ss")} [RSVP] - ${ticketCode} -> ${name} dari ${city ? city : org} membuka undangan`);
      response.send(result);
    }
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", function (request, response) {
  const filePath = path.resolve(__dirname, "..", "build", "index.html");
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`${moment().local().format("HH:mm:ss")} [SERVER] Listening on port ${port}`));

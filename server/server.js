const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const axios = require("axios");

app.get("/", function (request, response) {
  console.log("Home page visited!");
  const filePath = path.resolve(__dirname, "..", "build", "index.html");

  // read in the index.html file
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Lia & Adib Wedding Day | 22.01.2022");
    data = data.replace(/\$OG_DESCRIPTION/g, "Kepada Bapak/Ibu/Saudara/i di Tempat");
    data = data.replace(/\$OG_URL/g, "https://liaadib-weddingday.id");
    result = data.replace(
      /\$OG_IMAGE/g,
      "https://lh3.googleusercontent.com/fife/AAWUweW2uF1ek3mg6ES1EQirjpqwr9KrpqfuTJOVfEqL7P9dVIzVRvjuyJXtrKsySZOOGQ8wQ84BLyyOesu2hvEQNqZhoeMwtU04Nl6wxkgvqYC_mJa6A2WyUjBpBdmy7CgNCb6D5fOe-OKsfs2ABfw6kVi3nrpARF7mbq0CK-C_lwutW39Yj_LkdZzLLc1zyNj2Q14yPiACD_6Bt7kqyDcXsXAMR7gZdVJksbl5Xl5kgxqFPvCGY8RP0hmhlIpaGfuLXlhbWHyZ0lLNcHjPMOANtNYreyuG9EB0iH6RPp3_9FbzIMLKtzd6M_0sbyV1T3wJOi-POozVQhfK8RnkgYWvyBskaWRC61YIfnabkNTb2qvb_90TWctEpWSw4uG2yZYAQaLOf41yD0eRsuN3dS7aoTzh8CYBOYlXEV6hoqMbIoqBDckKtxcamrsYvDrtEW4YRgcLPRf_kBWuMtnwB06ArA8A8lquR2ari5rkY9DSAG59Oj1Tvn_ensFqm6AuR0vekQFe1Lw9Wr6pkRksGpSbIpR9pc_cXdVe8W7aF2ZKtJTKDZiZl2xM0BBxqDeZcc2vxq-V3BsJEks2hbhJ3XQ7dMj1FxMYxkQAHpRDwPdD5Wd6LDSzVjO3JfbMM2YiG1kwwHc_p5PMo13GfyfzYJbYCKL3KSDSmYslq_dM7mRFi3boLkIUSuPtx7_6Vxu8a33u7sRPuBchuIJ3w0qYF0JxkZ9_ZIXOWfdFzw=w562-h935-ft"
    );
    response.send(result);
  });
});

app.get("/rsvp/to/:slug", (request, response) => {
  console.log("About page visited!");
  const filePath = path.resolve(__dirname, "..", "build", "index.html");
  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    const slug = request.params.slug;
    const contacts = await axios.get(`http://localhost:5000/apps/` + slug);
    console.log(contacts);
    console.log(slug);
    if (contacts.data.msg === "no data available") {
      return res.status(404).send("Post not found");
    } else {
      let name = contacts.data.contacts[0].name;
      let city = contacts.data.contacts[0].city;
      let ticketCode = contacts.data.tickets[0].ticketCode;

      data = data.replace(/\$OG_TITLE/g, `Lia & Adib Wedding Day | 22.01.2022`);
      data = data.replace(/\$OG_DESCRIPTION/g, `Kepada ${name} di ${city}`);
      //   result = data.replace(/\$OG_IMAGE/g, "https://i.imgur.com/V7irMl8.png");
      data = data.replace(/\$OG_URL/g, `https://liaadib-weddingday.id/rsvp/to/${slug}`);
      result = data.replace(
        /\$OG_IMAGE/g,
        "https://lh3.googleusercontent.com/fife/AAWUweW2uF1ek3mg6ES1EQirjpqwr9KrpqfuTJOVfEqL7P9dVIzVRvjuyJXtrKsySZOOGQ8wQ84BLyyOesu2hvEQNqZhoeMwtU04Nl6wxkgvqYC_mJa6A2WyUjBpBdmy7CgNCb6D5fOe-OKsfs2ABfw6kVi3nrpARF7mbq0CK-C_lwutW39Yj_LkdZzLLc1zyNj2Q14yPiACD_6Bt7kqyDcXsXAMR7gZdVJksbl5Xl5kgxqFPvCGY8RP0hmhlIpaGfuLXlhbWHyZ0lLNcHjPMOANtNYreyuG9EB0iH6RPp3_9FbzIMLKtzd6M_0sbyV1T3wJOi-POozVQhfK8RnkgYWvyBskaWRC61YIfnabkNTb2qvb_90TWctEpWSw4uG2yZYAQaLOf41yD0eRsuN3dS7aoTzh8CYBOYlXEV6hoqMbIoqBDckKtxcamrsYvDrtEW4YRgcLPRf_kBWuMtnwB06ArA8A8lquR2ari5rkY9DSAG59Oj1Tvn_ensFqm6AuR0vekQFe1Lw9Wr6pkRksGpSbIpR9pc_cXdVe8W7aF2ZKtJTKDZiZl2xM0BBxqDeZcc2vxq-V3BsJEks2hbhJ3XQ7dMj1FxMYxkQAHpRDwPdD5Wd6LDSzVjO3JfbMM2YiG1kwwHc_p5PMo13GfyfzYJbYCKL3KSDSmYslq_dM7mRFi3boLkIUSuPtx7_6Vxu8a33u7sRPuBchuIJ3w0qYF0JxkZ9_ZIXOWfdFzw=w562-h935-ft"
      );
      response.send(result);
    }
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", function (request, response) {
  const filePath = path.resolve(__dirname, "..", "build", "index.html");
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

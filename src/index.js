const path = require("path");
const hbs = require("hbs");
const express = require("express");
const parser = require("body-parser");
const app = express();

const request = require("request-promise");
const port = process.env.PORT || 3000;

//define paths for express configs
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.use(parser.text());
app.use(parser.urlencoded({ extended: false }));
app.get("", async (req, res) => {
  try {
    res.render("index", {
      title: "Express Amiibo Application"
    });
  } catch {
    res.status(500).send();
  }
});

app.get("/pokemon", async (req, res) => {
  try {
    res.render("pokemon", {
      title: "Pokemon Amiibo!"
    });
  } catch (error) {
    res.status(500).send();
  }
});
app.post("/showcase/:id", async (req, res) => {
  const amiiboId = req.params.id;
  console.log(amiiboId)
  //const amiiboId = req.body;
  //console.log('http://localhost:3000/showcase/pokemon'.split('/').find('showcase'))
  //console.log(req.body)
  let result = await request.get(
    `https://www.amiiboapi.com/api/amiibo/?gameseries=${amiiboId}`
  );
  res.send(result);
});
app.get("/showcase/:id", async (req, res) => {
  const amiibo = req.params.id;

  try {
    res.render("showcase", {
      title: `Zelda`
    });
  } catch (error) {
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

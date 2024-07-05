// lehi bel routes
const express = require("express");
const dotenv = require("dotenv");
// bech yconnectili 3al database (nosql)
const mongoose = require("mongoose");

const categorieRouter = require("./routes/categorie.route");
const scategorieRouter = require("./routes/scategorie.route");
const articleRouter = require("./routes/article.route");

const app = express();
dotenv.config();
// miiddleware
app.use(express.json());

mongoose
  .connect(process.env.DATABASECLOUD)
  .then(() => {
    console.log("DataBase Successfully Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
    process.exit();
  });

app.use("/api/categories", categorieRouter);
app.use("/api/scategories", scategorieRouter);
app.use("/api/articles", articleRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Application running on ${PORT}`);
  console.log(`http://localhost:${PORT}/`);
});

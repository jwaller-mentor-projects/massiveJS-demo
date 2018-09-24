require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const { getItems, addItem, updatePrice, deleteItem } = require("./ctrl");

const app = express();
app.use(json());
// console.log(process.env.CONNECTION_STRING);

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get("/api/items", getItems);
app.post("/api/item", addItem);
app.put("/api/item/:id", updatePrice);
app.delete("/api/item/:id", deleteItem);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening @ port ${port}`));

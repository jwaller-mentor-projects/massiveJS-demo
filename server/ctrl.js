const getItems = (req, res) => {
  let db = req.app.get("db");
  db.getItems().then(response => {
    res.status(200).json(response);
  });
};

const addItem = (req, res) => {
  const { name, price } = req.body;
  let db = req.app.get("db");
  db.addItem([name, price]).then(response => {
    res.status(200).json(response);
  });
};

const updatePrice = (req, res) => {
  const { price } = req.body;
  const { id } = req.params;
  let db = req.app.get("db");
  db.updatePrice([id, price]).then(response => {
    res.status(200).json(response);
  });
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  let db = req.app.get("db");
  db.deleteItem(id).then(response => {
    res.status(200).json(response);
  });
};

module.exports = {
  getItems,
  addItem,
  updatePrice,
  deleteItem
};

const MenuItem = require("../models/MenuItem");

// CREATE (admin)
exports.createMenuItem = async (req, res) => {

  try {

    const { name, price, description, category, imageUrl } = req.body;

    const item = new MenuItem({
      name,
      price,
      description,
      category,
      imageUrl
    });

    await item.save();

    res.status(201).json(item);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// READ (public)
exports.getMenuItems = async (req, res) => {
  const items = await MenuItem.find().populate("category");
  res.json(items);
};

// UPDATE (admin)
exports.updateMenuItem = async (req, res) => {
  const item = await MenuItem.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
};

// DELETE (admin)
exports.deleteMenuItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Menu item removed" });
};

// GET ALL (public)
exports.getMenu = async (req, res) => {

  const items = await MenuItem
    .find()
    .populate("category");

  res.json(items);
};


import Item from "../models/Item.js";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const trimmedValue = value.trim();
    if (trimmedValue === "") return Number.NaN;
    return Number(trimmedValue);
  }
  return Number(value);
};

const buildItemPayload = (requestBody) => {
  const payload = {};

  if ("name" in requestBody) payload.name = requestBody.name;
  if ("category" in requestBody) payload.category = requestBody.category;
  if ("description" in requestBody) payload.description = requestBody.description;
  if ("imageUrl" in requestBody) payload.imageUrl = requestBody.imageUrl;
  if ("price" in requestBody) payload.price = toNumber(requestBody.price);
  if ("stockQuantity" in requestBody) {
    payload.stockQuantity = toNumber(requestBody.stockQuantity);
  }

  return payload;
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch item" });
  }
};

export const createItem = async (req, res) => {
  try {
    const newItem = await Item.create(buildItemPayload(req.body));
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create item",
      error: error.message,
    });
  }
};

export const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      buildItemPayload(req.body),
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update item",
      error: error.message,
    });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete item" });
  }
};
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error(err));

// Model
// const ItemSchema = new mongoose.Schema({ name: String });
// const Item = mongoose.model("Item", ItemSchema);

// Routes
app.get("/api/items", async (req, res) => {
  //const items = await Item.find();
  const items = [
			{
				"id": 1,
				"name": "ranjeet",
			},
			{
				"id": 2,
				"name": "sanjeet",
			}

		];
  res.json(items);
});

app.post("/api/items", async (req, res) => {
  // const newItem = new Item({ name: req.body.name });
  // await newItem.save();
  // res.json(newItem);
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);

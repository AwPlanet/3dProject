const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://asifel1997:VygADAwxFYozVtqk@3dcraftzone.zyq9k.mongodb.net/3d", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

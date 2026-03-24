const express = require("express");
const cors = require("cors");

const conciergeRoutes = require("./routes/concierge");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/concierge", conciergeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

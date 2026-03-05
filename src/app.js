import express from "express";
import bookingRoutes from "./modules/booking/booking.route.js";

const app = express();

app.use(express.json());

/* ROOT ROUTE */
app.get("/", (req, res) => {
  res.send("Exp4.3 Redis Locking API Running 🚀");
});

/* API ROUTES */
app.use("/api", bookingRoutes);

export default app;
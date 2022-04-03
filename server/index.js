require("dotenv").config();

const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
const multer = require("multer");
const path = require("path")

const imageUpload = require("./src/services/images");

const app = express();

// Initialize Stripe
const stripe = new Stripe(
    "sk_test_51Kc0UeEqY7vcnX4vtubNZsrn9BO65xn4XHPjlefTJMNrfm3L2LTNXWDE8vTCEsOavSICYIv6vq7cUrqzt4SWh01u00kBhps0xg"
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static(__dirname + "/public"));
app.use(multer({ dest: path.join(__dirname, "/public/img") }).single("image"));

// Routes
app.post("/api/checkout", async (req, res) => {
    try {
        const { id, amount, description } = req.body;

        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            description,
            payment_method: id,
            confirm: true,
        });

        return res.send({ error: false, message: "Pago satisfactorio" });
    } catch (error) {
        return res.json({
            error: true,
            code: error.code,
            decline_code: error.decline_code,
        });
    }
});

app.post("/api/blog/image/upload", async (req, res) => {
    try {
        if (!req.file) {
            return res.json({
                error: true,
                message: "No hay imagen por subir",
            });
        }
        const { imageName, message } = await imageUpload(req);
        if (imageName !== "") {
            return res.json({ error: false, imageName, message });
        }
        return res.json({ error: true, imageName, message });
    } catch (error) {
        return res.json({
            error: true,
            imageName: "",
            message: "Error al subir imagen",
        });
    }
});

app.listen(3001, () => {
    console.log("listen on port 3001");
});

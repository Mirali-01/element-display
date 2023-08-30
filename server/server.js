require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ElementRouter = require("./routes/ElementRoutes");
const dbConfig = require("./config/mongoDB");
const Element = require("./models/Element");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(dbConfig.url, dbConfig.options)
  .then(async () => {
    console.log("Connected to MongoDB");

    // Check if data exists before seeding
    const elementsCount = await Element.countDocuments();
    if (elementsCount === 0) {
      // Seed data example
      const seedData = [
        {
          name: "Hydrogen",
          appearance: "colorless gas",
          atomic_mass: 1.008,
          boil: 20.271,
          category: "diatomic nonmetal",
          density: 0.08988,
          discovered_by: "Henry Cavendish",
          melt: 13.99,
          molar_heat: 28.836,
          named_by: "Antoine Lavoisier",
          number: 1,
          period: 1,
          group: 1,
          phase: "Gas",
          source: "https://en.wikipedia.org/wiki/Hydrogen",
          bohr_model_image:
            "https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen_srp_th.png",
          bohr_model_3d:
            "https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen.glb",
          spectral_img:
            "https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg",
          summary:
            "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
          symbol: "H",
          xpos: 1,
          ypos: 1,
          wxpos: 1,
          wypos: 1,
          shells: [1],
          electron_configuration: "1s1",
          electron_configuration_semantic: "1s1",
          electron_affinity: 72.769,
          electronegativity_pauling: 2.2,
          ionization_energies: [1312],
          cpk_hex: "ffffff",
          image: {
            title:
              "Vial of glowing ultrapure hydrogen, H2. Original size in cm: 1 x 5",
            url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg",
            attribution:
              "User:Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hydrogen.php",
          },
          block: "s",
        },
      ];

      // Insert seed data into MongoDB
      await Element.insertMany(seedData);
      console.log("Seed data inserted");
    } else {
      console.log("Database already contains data, skipping seed");
    }
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use API routes
app.use("/api", ElementRouter);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

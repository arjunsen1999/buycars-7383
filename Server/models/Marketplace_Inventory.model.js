const mongoose = require("mongoose");
const Marketplace_InventorySchema = new mongoose.Schema(
  {
    KMsOnOdometer: {
      type: Number,
      required: true,
    },
    MajorScratches: {
      type: Boolean,
      required: true,
    },
    OriginalPaint: {
      type: Boolean,
      required: true,
    },
    NumberOfAccidents: {
      type: Number,
      required: true,
    },
    NumberOfPreviousBuyers: {
      type: Number,
      required: true,
    },
    RegistrationPlace: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Marketplace_Inventory_Model = mongoose.model(
  "Marketplace_Inventory",
  Marketplace_InventorySchema
);
module.exports = {
  Marketplace_Inventory_Model,
}

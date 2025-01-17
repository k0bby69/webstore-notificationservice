const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    recepient: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["email", "push", "sms"],
      default:"email",
      required: true,
    },
    // status: {
    //   type: String,
    //   enum: ["sent", "delivered", "read", "failed"],
    //   default: "sent",
    // },
  },
  { timestamps: true }
);

// Middleware to update `updatedAt` on save
NotificationSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Notification = mongoose.model("Notification", NotificationSchema);

module.exports = Notification;

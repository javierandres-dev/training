import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/userInterface";

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    image: { type: String, require: true },
    phone: { type: Number, require: true },
    enable: { type: Boolean, require: true },
    birthDay: { type: Date, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema);

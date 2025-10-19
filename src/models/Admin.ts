import mongoose, { Schema, type Document } from "mongoose"

export interface IAdmin extends Document {
  email: string
  name: string
  passwordHash: string
  createdAt: Date
  updatedAt: Date
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export default mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema)

import mongoose, { Schema, type Document } from "mongoose"

export interface IProject extends Document {
  title: string
  client: string
  description: string
  services: string[]
  techStack: string[]
  link: string
  images: string[]
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    services: [String],
    techStack: [String],
    link: {
      type: String,
      required: true,
    },
    images: [String],
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema)

import mongoose, { Schema, type Document } from "mongoose"

export interface IEssay extends Document {
  title: string
  excerpt: string
  content: string
  author: string
  readTime: number
  publishedDate: Date
  tags: string[]
  category: string
  published: boolean
  createdAt: Date
  updatedAt: Date
}

const EssaySchema = new Schema<IEssay>(
  {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    readTime: {
      type: Number,
      required: true,
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    tags: [String],
    category: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

export default mongoose.models.Essay || mongoose.model<IEssay>("Essay", EssaySchema)

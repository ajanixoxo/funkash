import mongoose, { Schema, type Document } from "mongoose"

export interface IAnalytics extends Document {
  eventType: "page_view" | "essay_read" | "message_submitted" | "project_viewed"
  metadata: Record<string, any>
  createdAt: Date
}

const AnalyticsSchema = new Schema<IAnalytics>(
  {
    eventType: {
      type: String,
      enum: ["page_view", "essay_read", "message_submitted", "project_viewed"],
      required: true,
    },
    metadata: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true },
)

export default mongoose.models.Analytics || mongoose.model<IAnalytics>("Analytics", AnalyticsSchema)

import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import dbConnect from "@/lib/db"
import Analytics from "@/models/Analytics"
import Essay from "@/models/Essay"
import Message from "@/models/Message"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

    // Get daily page views for the last 30 days
    const pageViewsData = await Analytics.aggregate([
      {
        $match: {
          eventType: "page_view",
          createdAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ])

    // Get essay performance
    const essayPerformance = await Analytics.aggregate([
      {
        $match: {
          eventType: "essay_read",
          createdAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: "$metadata.essayId",
          reads: { $sum: 1 },
        },
      },
      {
        $sort: { reads: -1 },
      },
      {
        $limit: 5,
      },
    ])

    // Get essay titles for performance data
    const essayIds = essayPerformance.map((e) => e._id)
    const essays = await Essay.find({ _id: { $in: essayIds } }).select("title")
    const essayMap = Object.fromEntries(essays.map((e) => [e._id.toString(), e.title]))

    const essayPerformanceWithTitles = essayPerformance.map((e) => ({
      name: essayMap[e._id] || "Unknown",
      reads: e.reads,
    }))

    // Get message trends
    const messageTrends = await Message.aggregate([
      {
        $match: {
          createdAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ])

    // Get total stats
    const totalPageViews = await Analytics.countDocuments({
      eventType: "page_view",
      createdAt: { $gte: thirtyDaysAgo },
    })

    const totalEssayReads = await Analytics.countDocuments({
      eventType: "essay_read",
      createdAt: { $gte: thirtyDaysAgo },
    })

    const totalMessages = await Message.countDocuments({
      createdAt: { $gte: thirtyDaysAgo },
    })

    return NextResponse.json(
      {
        pageViews: pageViewsData,
        essayPerformance: essayPerformanceWithTitles,
        messageTrends,
        stats: {
          totalPageViews,
          totalEssayReads,
          totalMessages,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Analytics data error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

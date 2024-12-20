// pages/api/reports.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const reports = await prisma.report.findMany()
      return res.status(200).json(reports)
    } else if (req.method === 'POST') {
      const { title, content, authorId } = req.body;

      // Validate incoming data
      if (!title || !content || !authorId) {
        return res.status(400).json({ message: 'All fields are required (title, content, authorId).' });
      }

      const report = await prisma.report.create({
        data: {
          title,
          content,
          authorId,
        },
      })
      return res.status(201).json(report)
    } else {
      res.setHeader('Allow', ['GET', 'POST'])
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
    }
  } catch (error) {
    console.error('Error in API handler:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message })
  } finally {
    // Close the Prisma Client connection when the API route is complete (optional)
    await prisma.$disconnect();
  }
}

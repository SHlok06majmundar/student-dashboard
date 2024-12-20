import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const reports = await prisma.report.findMany()
      res.status(200).json(reports)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching reports' })
    }
  } else if (req.method === 'POST') {
    try {
      const report = await prisma.report.create({
        data: req.body,
      })
      res.status(201).json(report)
    } catch (error) {
      res.status(500).json({ message: 'Error creating report' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}


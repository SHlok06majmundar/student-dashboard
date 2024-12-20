import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const chapters = await prisma.chapter.findMany()
      res.status(200).json(chapters)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching chapters' })
    }
  } else if (req.method === 'POST') {
    try {
      const chapter = await prisma.chapter.create({
        data: req.body,
      })
      res.status(201).json(chapter)
    } catch (error) {
      res.status(500).json({ message: 'Error creating chapter' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}


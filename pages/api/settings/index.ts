// pages/api/settings/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const settings = await prisma.settings.findFirst();
      res.status(200).json(settings);
    } catch (error) { // eslint-disable-line @typescript-eslint/no-unused-vars
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: 'Error fetching settings' });
    }
  } else if (req.method === 'PUT') {
    try {
      const settings = await prisma.settings.update({
        where: { id: 1 }, // Assuming there's only one settings record
        data: req.body,
      });
      res.status(200).json(settings);
    } catch (error) { // eslint-disable-line @typescript-eslint/no-unused-vars
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: 'Error updating settings' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

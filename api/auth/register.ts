import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { email, password, firstName, lastName, company, role } = body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  if (role && !['AGENCY', 'CLIENT'].includes(role)) {
    return res.status(400).json({ error: 'Invalid role' });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return res.status(409).json({ error: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      company,
      role: role === 'AGENCY' ? 'AGENCY' : 'CLIENT',
    },
  });

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  return res.status(201).json({
    user: { id: user.id, email: user.email, role: user.role, firstName: user.firstName, lastName: user.lastName, company: user.company },
    token,
  });
} 
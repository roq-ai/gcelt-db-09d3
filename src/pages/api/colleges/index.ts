import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { collegeValidationSchema } from 'validationSchema/colleges';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getColleges();
    case 'POST':
      return createCollege();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getColleges() {
    const data = await prisma.college
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'college'));
    return res.status(200).json(data);
  }

  async function createCollege() {
    await collegeValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.college.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}

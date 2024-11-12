import { PrismaClient } from '@prisma/client';
import { getQueryParams, getRequestBody } from '../utils/requestUtils';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  // let q1 = new URL(req.url).searchParams.get('id');
  let q1 = await getQueryParams(req);
  console.log('req.query', q1);
  return Response.json({message: "GET - Site is up and running", queryParams: q1});
}

export async function POST(req: Request) {
  const reqBody = await getRequestBody(req);
  console.log('req.body', reqBody);
  return Response.json({message: "POST - Site is up and running", requestBody: reqBody});
}

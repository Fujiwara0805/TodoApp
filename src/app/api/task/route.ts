import prisma from "@/lib/db";
import { NextResponse } from "next/server";

interface ParamsProps {
  params: { TaskId: string };
}

/* Task全取得API */
export const GET = async (req: Request, res: NextResponse) => {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
};

/* Task追加API */
export const POST = async (req: Request, res: NextResponse) => {
  const { content } = await req.json();
  const task = await prisma.post.create({
    data: {
      content,
    },
  });
  return NextResponse.json(task);
};

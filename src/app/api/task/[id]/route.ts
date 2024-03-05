import prisma from "@/lib/db";
import TASK from "@/types/type";
import { NextResponse } from "next/server";

interface paramsProps {
  params: TASK;
}

/* Task編集用API */
export const PUT = async (req: Request, { params }: paramsProps) => {
  const taskId = params.id;
  const { content } = await req.json();
  const post = await prisma.post.update({
    data: { content },
    where: { id: parseInt(taskId) },
  });
  return NextResponse.json(post);
};

/* Task削除用API */
export const DELETE = async (req: Request, { params }: paramsProps) => {
  const taskId = params.id;
  const post = await prisma.post.delete({
    where: { id: parseInt(taskId) },
  });
};

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

interface ParamsProps {
  params: { TaskId: string };
}

/* Task編集用API */
export const PUT = async (req: Request, { params }: ParamsProps) => {
  const TaskId = await parseInt(params.TaskId);
  const { content } = await req.json();
  const post = await prisma.post.update({
    data: { content },
    where: { id: TaskId },
  });
  return NextResponse.json(post);
};

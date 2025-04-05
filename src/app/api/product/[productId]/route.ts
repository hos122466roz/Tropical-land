import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
  productId: string;
}
export async function DELETE(request: Request, { params }: { params: IParams }) {
  const currnetUser = await getCurrentUser();
  if (!currnetUser) return NextResponse.error();
  const { productId } = params;
  if (!productId || typeof productId !== "string") {
    throw new Error("Invalid ID");
  }
  const deleteProduct = await prisma.product.deleteMany({
    where: {
      id: productId,
    },
  });
  return NextResponse.json(deleteProduct);
}

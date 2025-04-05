import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface Iparams {
  productId?: string;
}
export async function DELETE(request: Request, { params }: { params: Iparams }) {
  const currnetUser = await getCurrentUser();
  if (!currnetUser) return NextResponse.error();
  const { productId } = params;
  console.log(productId)
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

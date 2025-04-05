import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const cuntrerUser = await getCurrentUser();
  if (!cuntrerUser) return NextResponse.error();
  const body = await request.json();
  const { title, description, imageSrc, category, price } = body;
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });
  const product = await prisma.product.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      price: parseInt(price, 10),
      userId: cuntrerUser.id,
    },
  });
  return NextResponse.json(product);
}


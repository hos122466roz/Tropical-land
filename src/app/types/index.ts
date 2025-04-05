import { Blog, Product, User } from "@prisma/client";

export type SefProduct = Omit<Product, "createdAt"> & { createdAt: string };
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
export type SafeBlog = Omit<Blog, "createdAt"> & { createdAt: string };

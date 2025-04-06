import { Blog, Product, User } from "@prisma/client";

export type SefProduct = Omit<Product, "createdAt"> & { createdAt: string };

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string | null;
  updatedAt: string | null;
  emailVerified: string | null;
};
export type SafeBlog = Omit<Blog, "createdAt"> & {
  createdAt: string;
  user: SafeUser;
};

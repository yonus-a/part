"use server";

import prisma from "@lib/prisma";

export default async function getHomePageData() {
  return await prisma.home.findMany();
}

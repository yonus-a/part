"use server";

import prisma from "@lib/prisma";

export default async function updateFooterAction(data: any) {
  return await prisma.general_info.update({
    where: {
      id: 1,
    },
    data: data,
  });
}

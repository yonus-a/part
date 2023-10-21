"use server";

import prisma from "@lib/prisma";
import uniqueFilename from "@utils/uniqueFilename";
import uploadFile from "@utils/uploadFile";

export default async function updateServicesAction(
  data: any,
  formData: FormData
) {
  let image: any = formData.get("image");

  if (image) {
    image = uniqueFilename(image, image.name);
  }

  const result = await prisma.home.update({
    where: {
      id: 1,
    },
    data: {
      services: data.services,
      servicesImage: image?.name,
    },
  });

  if (result.id) {
    if (image) {
      console.log("ok");
      uploadFile(image.file, image.name, "public/images");
    }
  }

  return result;
}

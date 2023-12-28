import { Request } from "express";
import { FileArray, UploadedFile } from "express-fileupload";
import path from "path";
import fs from "fs";
import { v4 as uuidV4 } from "uuid";

export const generateFileName = (req: Request) => {
  const file: FileArray | null | undefined = req.files;
  const imageUrl = file?.imageUrl as UploadedFile;
  let filename = uuidV4() + ".jpg";

  const saveStaticImage = () => {
    imageUrl.mv(path.resolve(__dirname, "..", "static", filename));
  };

  return {
    filename,
    saveStaticImage,
  };
};

export const removeImg = async (url: string) => {
    fs.unlink(path.resolve(__dirname, "../static", url), (err) => {
      err
        ? console.log("FS operation failed")
        : console.log("File deleted successfully!");
    });
  };

export const generateBody = (req: Request, filename: string) => {
  const { body } = req;

  const types = body.types.split(",").map((item: string) => Number(item));
  const sizes = body.sizes.split(",").map((item: string) => Number(item));

  return {
    ...body,
    types,
    sizes,
    imageUrl: filename || body.imageUrl,
  };
};

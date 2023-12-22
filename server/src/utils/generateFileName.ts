import { Request } from "express";
import { FileArray, UploadedFile } from "express-fileupload";
import path from "path";
import { v4 as uuidV4 } from "uuid";

export const generateFileName = (req: Request) => {
    const file: FileArray | null | undefined = req.files;
    const imageUrl = file?.imageUrl as UploadedFile;
    let filename = uuidV4() + ".jpg";

    const saveStaticImage = () => {
        imageUrl.mv(path.resolve(__dirname, "..", "static", filename));
    }

    return {
        filename,
        saveStaticImage,
    }
}
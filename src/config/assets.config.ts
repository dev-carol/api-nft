import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";
import { extname } from "path";
import filesValidator from "src/utils/files-validator";

export default (resourceFolderName: string): MulterOptions => ({
    storage: diskStorage({
        destination: `./public/${resourceFolderName}`,
        filename: (_, file, cb) =>{
            const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random()+16).toString(16))
            .join(``)
            return cb(null, `${randomName}${extname(file.originalname)}`)
        }
    }),
    fileFilter: (req, file, cb) => filesValidator(req, file, cb),
})
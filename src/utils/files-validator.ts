import { BadRequestException } from "@nestjs/common";

const whiteList = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

export default (_, file, cb) =>{
    if(!whiteList.includes(file.mimetype)){
        return cb(new BadRequestException("File type is not supported"))
    }

    return cb(null,true)
}
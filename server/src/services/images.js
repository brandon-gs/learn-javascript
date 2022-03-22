const path = require("path")
const fs = require("fs-extra")
const cloudinary = require("cloudinary")

const VALID_EXTENSIONS = [".png", ".jpg", ".jpeg"]

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

// const generateRandomName = (currentImage) => {
//   const possible = "abcdefghijklmnopqrstuvwxyz0123456789"
//   let randomName = ""
//   for(let i = 0; i < 6; i++) {
//     randomName += possible.charAt(Math.floor(Math.random() * possible.length))
//   }
//   if (randomName === currentImage.split("/").pop()) {
//     generateRandomName(currentImage)
//   }
//   return randomName
// }

async function imageUpload(req) {
  if (req.file) {
    const image = req.file
    const result = await cloudinary.v2.uploader.upload(image.path)
    const ext = path.extname(image.originalname).toLocaleLowerCase()
    await fs.unlink(image.path)
    if (result && VALID_EXTENSIONS.includes(ext)) {
      return { imageName:  result.secure_url, message: "Imagen subida correctamente" }
    }
    return {
      imageName: "",
      message: "La imagen no es válida",
    }
  }
  return {
    imageName: "",
    message: "No hay imagen por subir",
  }
}

module.exports = imageUpload
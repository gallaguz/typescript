// enum ImageFormat {
//     Png = 'png',
//     Jpeg = 'jpeg',
// }
//
// interface IResolution {
//     width: number;
//     height: number;
// }
//
// interface IImageConversion extends IResolution {
//     format: ImageFormat;
// }
//
// class ImageBuilder {
//     private formats: ImageFormat[] = [];
//     private resolutions: IResolution[] = [];
//
//     addPng(): ImageBuilder {
//         if (this.formats.includes(ImageFormat.Png)) {
//             return this;
//         }
//         this.formats.push(ImageFormat.Png);
//         return this;
//     }
//
//     addJpeg(): ImageBuilder {
//         if (this.formats.includes(ImageFormat.Jpeg)) {
//             return this;
//         }
//         this.formats.push(ImageFormat.Jpeg);
//         return this;
//     }
//
//     addResolution(width: number, height: number): ImageBuilder {
//         this.resolutions.push({ width, height });
//         return this;
//     }
//
//     build(): IImageConversion[] {
//         const res: IImageConversion[] = [];
//         for (const resolution of this.resolutions) {
//             for (const format of this.formats) {
//                 res.push({
//                     format: format,
//                     width: resolution.width,
//                     height: resolution.height,
//                 });
//             }
//         }
//         return res;
//     }
// }
//
// console.log(
//     new ImageBuilder()
//         .addJpeg()
//         .addPng()
//         .addResolution(100, 100)
//         .addResolution(200, 200)
//         .build(),
// );

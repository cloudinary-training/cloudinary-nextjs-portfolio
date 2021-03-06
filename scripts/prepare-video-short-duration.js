require("dotenv").config();
const cloudinary = require("cloudinary").v2;

function update(publicId) {
  const options = {
    resource_type: "video",
    eager: [
      {
        format: "mp4",
        transformation: [{ duration: "5" }],
      },
      {
        format: "webm",
        transformation: [{ duration: "5" }],
      },
      {
        format: "jpg",
      },
      {
        format: "ogv",
        transformation: [{ duration: "5" }],
      },
    ],
    type: 'upload',
    eager_async: true,
    eager_notification_url:
      "https://webhook.site/0a6a349c-aa0b-4e24-b168-709722890bbb",
  };


  cloudinary.uploader
    .explicit(publicId, options)
    .then((result) => {
      console.log(result);
    })
    .then((error) => {
      console.log(error);
    });
}

const publicIds = [
  "nextjs-portfolio/diningroom-vid",
  "nextjs-portfolio/kitchen-vid",
  "nextjs-portfolio/livingroom-vid",
  "nextjs-portfolio/stairs-vid",
  "nextjs-portfolio/bathroom-vid",
];

publicIds.forEach((publicId) => {
  update(publicId);
});

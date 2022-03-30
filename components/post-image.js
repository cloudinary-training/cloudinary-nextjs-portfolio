import { Cloudinary } from '@cloudinary/url-gen';
// Using the Next.js Image component
import Image from 'next/image';

export default function PostImage({ title, slug, publicid, cloudname }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudname,
      secure: true,
    },
  });

  const cldImage = cld.image(publicid).toURL();

  
  return (
    <div className='sm:mx-0'>
      <Image
        src={cldImage}
        alt={title}
        width='800px'
        height='400px'
        layout='responsive'
      />
    </div>
  );
}

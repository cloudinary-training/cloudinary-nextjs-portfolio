import { CloudinaryImage } from '@cloudinary/url-gen';
// Using the Next.js Image component
import Image from 'next/image';

export default function PostImage({ title, image }) {
  return (
    <div className='sm:mx-0'>
      <Image
        src={image}
        alt={title}
        width='800px'
        height='400px'
        layout='responsive'
        priority='true'
      />
    </div>
  );
}

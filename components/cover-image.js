import cn from 'classnames';
import Link from 'next/link';

// Import React SDK and Url Generator
import { AdvancedImage, responsive } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions and qualifiers.
import { fill } from '@cloudinary/url-gen/actions/resize';

export default function CoverImage({ title, slug, publicid, cloudname }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudname,
      secure: true,
    },
  });

  const cldImage = cld.image(publicid);
  cldImage
    .resize(fill().width(2000).height(550).gravity('auto'))
    .quality('auto')
    .format('auto');

  const image = (
    <AdvancedImage
      cldImg={cldImage}
      plugins={[
        responsive({
          steps: [375, 390, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        }),
      ]}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

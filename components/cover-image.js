import cn from 'classnames';
import Link from 'next/link';

// Import React SDK and Url Generator
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions and qualifiers.
import { fill } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';

export default function CoverImage({ title, slug, publicid, cloudname }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudname,
      secure: true,
    },
  });

  const cldImage = cld.image(publicid);
  cldImage.resize(fill().width(2000).height(550).gravity('auto'));
  cldImage.quality('auto');
  cldImage.format('auto');

  const image = (
    <AdvancedImage
      cldImg={cldImage}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />

    // <Image
    //   publicId={publicid}
    //   cloudName={cloudname}
    //   width='2000'
    //   height='550'
    //   crop='fill'
    //   gravity='auto'
    //   fetch_format='auto'
    //   secure='true'
    //   alt={`Cover Image for ${title}`}
    //   className={cn('shadow-small', {
    //     'hover:shadow-medium transition-shadow duration-200': slug,
    //   })}
    // />
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

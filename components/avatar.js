// Import React SDK and Url Generator
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions and qualifiers.
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

export default function Avatar({ name, picture, publicid, cloudname }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudname,
      secure: true,
    },
  });

  const cldImage = cld.image(publicid);
  cldImage.resize(
    thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))
  );
  cldImage.quality('auto');
  cldImage.format('auto');

  return (
    <div className='flex items-center'>
      <AdvancedImage
        className='w-12 h-12 rounded-full mr-4'
        cldImg={cldImage}
      />
      <div className='text-xl font-bold'>{name}</div>
    </div>
  );
}

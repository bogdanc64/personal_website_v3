import Image from 'next/image'
import portrait from '../assets/images/portrait-min2.jpg'

function Avatar() {
  return (
    <figure className="portrait">
      <Image
        src={portrait}
        alt="Bogdan Maftei"
        layout="fill"
        objectFit="cover"
        objectPosition="center 18%"
        priority
      />
    </figure>
  )
}

export default Avatar

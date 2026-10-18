import Image from 'next/image'
import portrait from '../assets/images/portrait-min2.jpg'

function Avatar() {
  return (
    <figure className="portrait">
      <Image
        src={portrait}
        alt="Bogdan Maftei"
        width={900}
        height={1100}
        layout="responsive"
        priority
      />
      <figcaption>Bogdan Maftei</figcaption>
    </figure>
  )
}

export default Avatar

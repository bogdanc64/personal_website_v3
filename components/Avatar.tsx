import Image from "next/image"
import avatar from '../assets/images/portrait-min2.jpg'

function Avatar() {
  return (
    <div className="h-28 w-28 overflow-hidden rounded-full shadow-avatar sm:h-36 sm:w-36">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={avatar}
        alt="Portrait of Bogdan Maftei"
        quality={75}
        width={320}
        height={320}
      />
    </div>
  )
}

export default Avatar

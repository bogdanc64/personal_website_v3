import Image from "next/image"
import avatar from '../assets/images/portrait-min2.jpg'

function Avatar({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const frame = size === 'lg'
    ? 'h-44 w-44 sm:h-64 sm:w-64 lg:h-[22rem] lg:w-[22rem]'
    : 'h-28 w-28 sm:h-36 sm:w-36'

  return (
    <div className={`${frame} relative overflow-hidden rounded-full shadow-avatar`}>
      <Image
        layout="fill"
        objectFit="cover"
        src={avatar}
        alt="Portrait of Bogdan Maftei"
        quality={90}
        sizes="(min-width: 1024px) 22rem, (min-width: 640px) 16rem, 11rem"
      />
    </div>
  )
}

export default Avatar

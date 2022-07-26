import Image from "next/image"
import avatar from '../assets/images/portrait-min.jpg'

function Avatar() {
  return (
    <div className="shadow-avatar3 rounded-full flex justify-center p-2">
        <div className="shadow-avatar2 rounded-full flex justify-center p-2">
          <div className="shadow-avatar rounded-full flex justify-center text-center align-middle w-52 h-52">
            <Image className="rounded-full z-[-10]" objectFit="cover" src={avatar} quality={75} width={700} height={700}></Image>
          </div>
        </div>
    </div>
  )
}

export default Avatar
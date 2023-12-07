import { StaticImageData } from "next/image"
import Image from "next/image"
import { MdTimer } from "react-icons/md"
import Link from "next/link"

interface Props {
  content: {
    title: string
    body: string
    readTime: string
    date: string
    img: {
      src: StaticImageData | string
      alt: string
    }
  }
}

function truncate(str: string) {
  const maxLength = 120

  // Check if the string is already within the desired length
  if (str.length <= maxLength) {
    return str
  }

  // If the string is longer than maxLength, truncate and add "..."
  const truncated = `${str.slice(0, maxLength)}...`
  return truncated
}

export default function BlogCard({
  content: { title, body, date, img, readTime },
}: Props) {
  return (
    <Link className="flex" href="#">
      <article className="group max-w-md w-full bg-primary-600 p-8 rounded-xl flex flex-col gap-8 duration-300 shadow-md shadow-black hover:shadow-black hover:shadow-xl">
        <div className="h-80">
          <Image
            src={img.src}
            width={400}
            height={400}
            alt={img.alt}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <h3 className="font-bold text-accent-500 text-lg duration-300 group-hover:text-secondary-300 md:text-xl">
              {truncate(title)}
            </h3>

            <p className="text-accent-700 text-base sm:text-base">
              {truncate(body)}
            </p>
          </div>
          {/* read min and tags */}
          <div className="flex justify-between items-center text-accent-700 text-sm sm:text-base">
            <div className="flex gap-2 items-center">
              <MdTimer />
              <p>{readTime} read</p>
            </div>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

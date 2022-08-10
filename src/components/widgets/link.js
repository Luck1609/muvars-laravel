import Link from "next/link"

export default function LinkItem({ url, children, className }) {
  return (
    <Link href={url}>
      <a className={className}>
        { children }
      </a>
    </Link>
  )
}


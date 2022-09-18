import LinkItem from "next/link"

export default function Link({ url, children, className }) {
  return (
    <LinkItem href={url}>
      <a className={className}>
        { children }
      </a>
    </LinkItem>
  )
}


import Link from 'next/link'

const staticLinks = [
  { url: '/', label: 'HOME' },
  { url: '/ch1', label: '§1' },
  { url: '/ch2', label: '§2' },
  { url: '/ch3', label: '§3' }
]

export const Header = () => {
  return (
    <>
      <div>
        {staticLinks.map(link => (
          <Link href={link.url} key={link.label}>
            <a>{link.label}</a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        a {
          margin: 1em 0.5em;
        }
      `}</style>
    </>
  )
}

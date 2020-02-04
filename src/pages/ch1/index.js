import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'

// =====================================
// §1．CSRでのルーティング
const Chapter1 = () => {
  console.count('chapter1だよ')

  return (
    <div>
      <h1>§1．CSRでのルーティング</h1>
      <div>
        <h2>Linkを使う方法</h2>
        <Ex1 />
      </div>
      <div>
        <h2>useRouterを使う方法</h2>
        <Ex2 />
      </div>
      <div>
        <h2>withRouterを使う方法</h2>
        <Ex3 />
      </div>
    </div>
  )
}

Chapter1.getInitialProps = async () => {
  console.count('Chapter1のgetInitialPropsだよ')
  return {}
}

// =====================================
// 方法１．Link
const Ex1 = () => {
  return (
    <>
      <Link href='/ch1'>
        <a>§1．CSRでのルーティング</a>
      </Link>
    </>
  )
}
// =====================================
// 方法２．useRouter
const Ex2 = () => {
  const router = useRouter()

  return (
    <>
      <button onClick={() => router.push('/ch1')}>
        §1．CSRでのルーティング(default)
      </button>
      <button onClick={() => router.push('/ch1', '/ch1', { shallow: true })}>
        §1．CSRでのルーティング(shallow: true)
      </button>
    </>
  )
}
// =====================================
// 方法３．withRouter
const Comp = ({ router }) => {
  return (
    <>
      <button onClick={() => router.push('/ch1')}>
        §1．CSRでのルーティング(default)
      </button>
      <button onClick={() => router.push('/ch1', '/ch1', { shallow: true })}>
        §1．CSRでのルーティング(shallow: true)
      </button>
    </>
  )
}
const Ex3 = withRouter(Comp)

export default Chapter1

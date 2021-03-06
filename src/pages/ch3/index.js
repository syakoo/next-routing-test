import Link from 'next/link'

// =====================================
// §3．asを忘れてはいけない．
const Chapter3 = () => {
  console.count('Chapter3だよ')

  return (
    <div>
      <h1>§3．asを忘れてはいけない．</h1>
      <div>
        <h2>✖asなし</h2>
        <Ex1 />
      </div>
      <div>
        <h2>〇asあり</h2>
        <Ex2 />
      </div>
    </div>
  )
}

Chapter3.getInitialProps = async () => {
  console.count('Chapter3のgetInitialPropsだよ')
  return {}
}

// =====================================
// 方法１．asを消してみた．
const Ex1 = () => {
  return (
    <ul>
      <li>
        <Link href='/ch3/ex1/hoge'>
          <a>/ch3/ex1/hoge</a>
        </Link>
      </li>
      <li>
        <Link href='/ch3/ex1/foo'>
          <a>/ch3/ex1/foo</a>
        </Link>
      </li>
    </ul>
  )
}
// =====================================
// 方法２．asを残した．
const Ex2 = () => {
  return (
    <ul>
      <li>
        <Link href='/ch3/ex2/[user]' as='/ch3/ex2/hoge'>
          <a>/ch3/ex2/hoge</a>
        </Link>
      </li>
      <li>
        <Link href='/ch3/ex2/[user]' as='/ch3/ex2/foo'>
          <a>/ch3/ex2/foo</a>
        </Link>
      </li>
    </ul>
  )
}

export default Chapter3

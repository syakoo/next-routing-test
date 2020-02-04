import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'

// =====================================
// §2．動的ルーティングは[name].jsシンタックスを使え．
const Chapter2 = () => {
  console.count('Chapter2だよ')

  return (
    <div>
      <h1>§2．動的ルーティングは[name].jsシンタックスを使え．</h1>
      <div>
        <h2>✖hrefにqueryを追加する方法．</h2>
        <Ex1 />
      </div>
      <div>
        <h2>〇[name].jsシンタックスを使用．</h2>
        <Ex2 />
      </div>
      <div>
        <h2>〇[...args].jsシンタックスを使用．</h2>
        <Ex3 />
      </div>
    </div>
  )
}

Chapter2.getInitialProps = async () => {
  console.count('Chapter2のgetInitialPropsだよ')
  return {}
}

// =====================================
// 方法１．hrefにqueryを追加する方法．
const Ex1 = () => {
  return (
    <ul>
      <li>
        <Link
          href={{ pathname: '/ch2/ex1', query: { user: 'hoge' } }}
          as='/ch2/ex1/hoge'
        >
          <a>/ch2/ex1/hoge</a>
        </Link>
      </li>
      <li>
        <Link
          href={{ pathname: '/ch2/ex1', query: { user: 'foo' } }}
          as='/ch2/ex1/foo'
        >
          <a>/ch2/ex1/foo</a>
        </Link>
      </li>
    </ul>
  )
}
// =====================================
// 方法２．[name].jsシンタックスを使用．
const Ex2 = () => {
  return (
    <ul>
      <li>
        <Link href='/ch2/ex2/[user]' as='/ch2/ex2/hoge'>
          <a>/ch2/ex2/hoge</a>
        </Link>
      </li>
      <li>
        <Link href='/ch2/ex2/[user]' as='/ch2/ex2/foo'>
          <a>/ch2/ex2/foo</a>
        </Link>
      </li>
    </ul>
  )
}
// =====================================
// 方法3．[...args].jsシンタックスを使用．
const Ex3 = () => {
  return (
    <ul>
      <li>
        <Link href='/ch2/ex3/[...args]' as='/ch2/ex3/hoge'>
          <a>/ch2/ex3/hoge</a>
        </Link>
      </li>
      <li>
        <Link href='/ch2/ex3/[...args]' as='/ch2/ex3/foo/hoge/foo'>
          <a>/ch2/ex3/foo/hoge/foo</a>
        </Link>
      </li>
    </ul>
  )
}

export default Chapter2

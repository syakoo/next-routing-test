import { useRouter } from 'next/router'

const Ex1 = props => {
  console.count('Chapter2/Ex1だよ．')
  const router = useRouter()

  return (
    <div>
      <p>getInitialPropsのquery: {props.query.user}</p>
      <p>routerのquery: {router.query.user}</p>
    </div>
  )
}

Ex1.getInitialProps = async ({ query }) => {
  console.count('Chapter2/Ex1のgetInitialPropsだよ')

  return { query }
}

export default Ex1

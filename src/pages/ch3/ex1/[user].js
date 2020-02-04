import { useRouter } from 'next/router'

const Ex1 = props => {
  console.count('Chapter3/Ex1だよ．')
  const router = useRouter()

  return (
    <div>
      <p>getInitialPropsのquery: {JSON.stringify(props.query)}</p>
      <p>routerのquery: {JSON.stringify(router.query)}</p>
    </div>
  )
}

Ex1.getInitialProps = async ({ query }) => {
  console.count('Chapter3/Ex1のgetInitialPropsだよ')

  return { query }
}

export default Ex1

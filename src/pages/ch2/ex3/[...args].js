import { useRouter } from 'next/router'

const Ex3 = props => {
  console.count('Chapter2/Ex3だよ．')
  const router = useRouter()

  return (
    <div>
      <p>getInitialPropsのquery: {JSON.stringify(props.query)}</p>
      <p>routerのquery: {JSON.stringify(router.query)}</p>
    </div>
  )
}

Ex3.getInitialProps = async ({ query }) => {
  console.count('Chapter2/Ex2のgetInitialPropsだよ')

  return { query }
}

export default Ex3

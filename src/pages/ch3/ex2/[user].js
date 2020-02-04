import { useRouter } from 'next/router'

const Ex2 = props => {
  console.count('Chapter3/Ex2だよ．')
  const router = useRouter()

  return (
    <div>
      <p>getInitialPropsのquery: {JSON.stringify(props.query)}</p>
      <p>routerのquery: {JSON.stringify(router.query)}</p>
    </div>
  )
}

Ex2.getInitialProps = async ({ query }) => {
  console.count('Chapter3/Ex2のgetInitialPropsだよ')

  return { query }
}

export default Ex2

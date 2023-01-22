import Layout from "../components/layout";
import "../styles/globals.css";
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  if (router.pathname === '/login') {
    return <Component {...pageProps} />
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};

export default App ;
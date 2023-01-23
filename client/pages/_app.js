import Layout from "../components/layout";
import "../styles/globals.css";
import { useRouter } from 'next/router'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ["300","400","500","600","800"],
  subsets:["latin"]
})


const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <main className={poppins.className}>
      {router.pathname === "/login" ? 
        <Component {...pageProps} /> : 
        
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </main>
  )
};

export default App ;
import Head from 'next/head'
import styles from '../styles/Home.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Styrate</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <main></main>
       
    </div>
  );
};

export default App ;
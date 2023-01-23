import React from "react";
import styles from './layout.module.css';
import Head from 'next/head';
import Navbar from "./elements/navbar";
import Footer from "./elements/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
		<Head>
			<title>Styrate</title>
			<link rel="icon" href="/favicon.ico" /> 
		</Head>

		<Navbar />

	    {children}

		<Footer />

	</div>
  );
};


export default Layout ;
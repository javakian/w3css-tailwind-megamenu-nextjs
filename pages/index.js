import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

import Carousel from '../components/Carousel';

function Index() {
  return (
    <>
  <Head>
    <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <Link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <Link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet" /> 
    <Link rel="stylesheet" href="/static/globals.css" />
    <Link rel="stylesheet" href="/static/home.css" />
    <Link rel="stylesheet" href="/static/w3.css" />
        
  </Head>

      <main>
            <Navbar /> 
            <Carousel />
              
              <div className={styles.container}>
                  <br />      <br />
                  <section className="section">
                  <h1>Index --- Mega Menu and Multi-Level Dropdown Menu</h1>
                    
                </section>
             </div>     
        </main>

      <Footer />
   
    </>
  )
}
export default Index
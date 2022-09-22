import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { WindowMockup } from 'react-mockup'
import 'react-mockup/dist/index.css'
import 'html5-device-mockups/dist/device-mockups.min.css';
import { Macbook} from 'react-device-mockups';
import Header from './Header'
import Footer from './Footer'
import { MdCode, MdOutlineDownload } from "react-icons/md";

export default function Home() {
  const [versionData, setVersionData] = useState();

  return (
    <div className={'container'}>
      <Head>
        <title>ShastraOS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="Shastra, ShastraOS, Shastra linux, shastraos, Shastra OS, ShastraOS websites, Linux, Linux OS, OS, Gnome, Web3 OS, Web3 based OS, Web3 based Operating System, Vivek Pal, Arch Linux " />
        <meta name="theme-color" content="#317EFB"/>
        <link rel="icon" href="/favicon.ico" />
				<link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-192x192.png' />
      </Head>

      <Header/>

      <main className={styles.main}>
        <div className={styles.duoGrid}>
          <section className={styles.padding2em}>
            <h2>Your Decentralized OS</h2>
            <div className={styles.headStyle}>
              <h1>ShastraOS- Dignity</h1>
              {/* <span>v{versionData}</span> */}
            </div>
            <div className={styles.buttonGap}>
              <button className={styles.blueBtn} onClick={() => { window.open('install') }}><MdOutlineDownload className={styles.icon}/>Beta</button>
              <button className={styles.whiteBtn} onClick={() => { window.open('hacktoberform', "_blank") }}><MdCode className={styles.icon}/>CODE</button>
            </div>
          </section>
          <section className="mockupContainer">
            {/* <WindowMockup
              src="/screen02.png"
              type="mac"
              color="black"
            /> */}
            <Macbook
              width="100%"
              orientation="landscape"
              color="black"
              buttonProps={{
                onClick: () => alert('Home Button Clicked!'),
              }}
            >
              <iframe
                title="showcase"
                src="/screen02.png"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Macbook>
          </section>
        </div>

        <div className={styles.duoGrid}>
          <section>
            <ul>
              <li>Currently under developemnt</li>
              <li>Easy to install applications</li>
              <li>Seamless experience with Gnome 42</li>
              <li>We care your privacy and protection</li>
              <li>Privacy Redefined- Comes with Brave Default Browser</li>
            </ul>
          </section>
          <section className={styles.padding2em}>
            <h1 className={styles.title}>Shastra Dignity Beta</h1>
            <h2>Beta version of Shastra Dignity is out there! This is for development and testing, first version coming soon.</h2>
            <p className={styles.description}>
             Anyone can help us by contributing to the Shastra Project. The Beta version is released to get you the essence of upcoming ShastraOS versions. You can run it on your PC and test it out.
             If you are facing some issues regarding installation or post installation, hold on till the official first release of Shastra OS.
             Shastra Dignity is the rolling version of ShastraOS, which means as soon as we have, we will push the update.
            </p>
          </section>
        </div>


        <div className={styles.duoGrid}>
          <section className={styles.padding2em}>
            <h1 className={styles.title}>Upcoming tastes of your Shastra</h1>
            <h2>Gnome &rarr;</h2>
            <h2>Gnome Lite &rarr;</h2>
            <h2>Cutefish (Not Developed) &rarr;</h2>
          </section>
          <div className={styles.carousel}>
            <div className={styles.card}>
              <WindowMockup src="/gnomescreen01.png" />
            </div>
            <div className={styles.card}>
              <WindowMockup src="/lite.jpeg" />
            </div>
            <div className={styles.card}>
              <WindowMockup src="/cinnamon.webp" />
            </div>
          </div>
        </div>
      </main>

      
      <Footer/>
    </div >
  )
}

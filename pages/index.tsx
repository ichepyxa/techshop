import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div id={styles.page}>
			<Head>
				<title>TechShop - магазин с широким выбором и не высокими ценами</title>
				<meta
					name="description"
					content="TechShop - магазин с широким выбором и не высокими ценами."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<Navbar />
				<div className={`${styles.container} ${styles.headerContent}`}>
					<div className={styles.headerContentLeft}>
						<h2 className={styles.title}>Discover Most Suitable Watches</h2>
						<p className={styles.subtitle}>
							Find the best, reliable, and cheap smart watches here. We focus on
							product quality. Here you can find smart watches of almost all
							brands. So why you are waiting? Just order now!
						</p>
					</div>
					<div className={styles.headerContentRight}></div>
				</div>
			</header>

			<main>
				<h1>MAIN</h1>
			</main>

			<footer>FOOTER</footer>
		</div>
	)
}

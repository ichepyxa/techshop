import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>TechShop - магазин с широким выбором и не высокими ценами</title>
				<meta
					name="description"
					content="TechShop - магазин с широким выбором и не высокими ценами."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<h1>MAIN</h1>
			</main>

			<footer>FOOTER</footer>
		</div>
	)
}

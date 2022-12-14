import Head from 'next/head'
import Image from 'next/image'
import Brands from '../components/Brands'
import Search from '../components/Icons/Search'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { IBrand } from '../types/IBrand'

const brands: IBrand[] = [
	{
		imgSrc:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1661027785546',
		name: 'Apple',
	},
	{
		imgSrc:
			'https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-launched-with-snapdragon-ram-14.png',
		name: 'Xiaomi',
	},
	{
		imgSrc:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlOE7xG4ypDARLiiduNOXHgC3v7jIu12H9Q&usqp=CAU',
		name: 'Samsung',
	},
]

export default function Home() {
	return (
		<div id="page">
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
						<h2 className={styles.title}>Techshop</h2>
						<p className={styles.subtitle}>
							Здесь вы найдете лучшую, надежную и недорогую технику. Мы
							ориентируемся на качество продукции. У нас вы можете найти технику
							практически всех брендов. Так почему вы ждете? Просто закажите
							сейчас!
						</p>
						<Input
							icon={<Search />}
							type={'text'}
							placeholder={'Найдите лучший бренд'}
							buttonText={'Найти'}
						/>
					</div>
					<div className={styles.headerContentRight}>
						<img src="/hero.png" alt="" />
					</div>
				</div>
			</header>

			<main className={styles.main}>
				<Brands
					brands={brands}
					isAllBrands={false}
					pathOnAllBrands={'/brands'}
				/>
			</main>

			<footer className={styles.footer}>FOOTER</footer>
		</div>
	)
}

import Link from 'next/link'
import { MouseEvent, useRef, useState } from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
	const [shopCartCount, setShopCartCount] = useState<number>(10)
	const nav = useRef<HTMLElement>(null)

	const toggleBurger = (e: MouseEvent<HTMLElement>) => {
		if (nav.current?.classList.contains(styles.show)) {
			document.body.classList.remove('overflow-hidden')
			e.currentTarget.classList.remove(styles.active)
			return nav.current.classList.remove(styles.show)
		}

		document.body.classList.add('overflow-hidden')
		e.currentTarget.classList.add(styles.active)
		nav.current?.classList.add(styles.show)
	}

	return (
		<div className={styles.navbar}>
			<div className={styles.container}>
				<Link href="/" className={styles.logo}>
					Techshop
				</Link>
				<nav className={styles.nav} ref={nav}>
					<ul className={styles.menu}>
						<li className={styles.menuItem}>
							<Link href="/" className={styles.menuLink}>
								Главная
							</Link>
						</li>
						<li className={styles.menuItem}>
							<Link href="/" className={styles.menuLink}>
								Бренды
							</Link>
						</li>
						<li className={styles.menuItem}>
							<Link href="/" className={styles.menuLink}>
								Каталог
							</Link>
						</li>
						<li className={styles.menuItem}>
							<Link href="/" className={styles.menuLink}>
								Контакты
							</Link>
						</li>
						<li className={styles.menuItem}>
							<Link href="/" className={styles.menuLink}>
								О нас
							</Link>
						</li>
					</ul>
					<div className={styles.controls}>
						<Link href="/" className={styles.controlsItem}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={styles.conrolsSearch}
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<circle cx="10" cy="10" r="7"></circle>
								<line x1="21" y1="21" x2="15" y2="15"></line>
							</svg>
						</Link>
						<Link href="/" className={styles.controlsItem}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={styles.conrolsUser}
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<circle cx="12" cy="7" r="4"></circle>
								<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
							</svg>
						</Link>
						<Link href="/" className={styles.controlsItem}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={styles.conrolsShopCart}
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<circle cx="6" cy="19" r="2"></circle>
								<circle cx="17" cy="19" r="2"></circle>
								<path d="M17 17h-11v-14h-2"></path>
								<path d="M6 5l14 1l-1 7h-13"></path>
							</svg>
							{shopCartCount > 0 ? (
								<span className={styles.controlsItemCount}>
									{shopCartCount > 99 ? `99+` : shopCartCount}
								</span>
							) : (
								<></>
							)}
						</Link>
					</div>
				</nav>
				<div className={styles.burger} onClick={toggleBurger}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	)
}

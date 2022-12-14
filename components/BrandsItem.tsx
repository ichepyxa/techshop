import Link from 'next/link'
import styles from '../styles/BrandsItem.module.css'
import { IBrand } from '../types/IBrand'

export default function BrandsItem({ imgSrc, name }: IBrand) {
	return (
		<Link href={`/brands/${name.toLowerCase()}`} className={styles.brandsItem}>
			<img src={imgSrc} alt="" />
			<div className={styles.overlay}>
				<h4 className={styles.name}>{name}</h4>
			</div>
		</Link>
	)
}

import Link from 'next/link'
import styles from '../styles/Brands.module.css'
import { IBrand } from '../types/IBrand'
import BrandsItem from './BrandsItem'

type Props = {
	brands: IBrand[]
	isAllBrands: boolean
	pathOnAllBrands: string
}

export default function Brands({
	brands,
	isAllBrands,
	pathOnAllBrands,
}: Props) {
	return (
		<section className={`${styles.brands} ${styles.container}`}>
			<h2 className={styles.title}>Бренды</h2>
			<div className={styles.brandsItems}>
				{brands &&
					brands.map(brand => (
						<BrandsItem imgSrc={brand.imgSrc} name={brand.name} />
					))}
			</div>
			{!isAllBrands ? (
				<Link className={styles.btn} href={pathOnAllBrands}>
					Больше
				</Link>
			) : (
				<></>
			)}
		</section>
	)
}

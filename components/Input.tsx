import { ReactNode } from 'react'
import styles from '../styles/Input.module.css'

type Props = {
	icon: ReactNode
	buttonText: string
	placeholder: string
	type: string
}

export default function Input({
	icon = <></>,
	placeholder,
	type = 'text',
	buttonText,
}: Props) {
	return (
		<div className={styles.search}>
			<div className={styles.searchIcon}>{icon}</div>
			<input
				className={styles.searchInput}
				placeholder={placeholder}
				type={type}
			/>
			<button className={styles.searchButton}>{buttonText}</button>
		</div>
	)
}

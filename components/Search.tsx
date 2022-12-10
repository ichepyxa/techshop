import React, { FC } from 'react'
import styles from '../styles/Search.module.css'

type Props = {
	withIcon: boolean
}

export default function Search({ withIcon }: Props) {
	return (
		<div className={styles.search}>
			{withIcon ?? <i></i>}
			<input className={styles.searchInput} />
			<button></button>
		</div>
	)
}

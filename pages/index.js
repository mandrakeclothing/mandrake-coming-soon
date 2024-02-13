import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import styles from './home.module.css'

export default function Home() {
	return (
		<div className={styles['container']}>
			<img src='/mandrake.svg' className={styles['mandrake-image']} />
			<span className={styles['coming-soon']}>Coming Soon</span>
		</div>
	)
}

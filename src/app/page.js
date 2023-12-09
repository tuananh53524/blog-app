import Image from 'next/image'
import styles from './page.module.css'
import ImageUpload from '@/components/ImageUpload'
import Homepage from '@/components/Homepage'

export default function Home() {
  return (
    <main className={styles.main}>
        <Homepage />
    </main>
  )
}

import Link from 'next/link';
import styles from './start.module.scss';

const StartContainer = () => {
    return (
        <section className={styles.main}>
            <Link href={'/notes'}>
                Lets get started!
            </Link>
        </section>
    )
}

export default StartContainer
import styles from './header.module.scss'
import { BiSolidUser } from 'react-icons//bi';
import { AiFillHome } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
import { IoMdNotifications } from 'react-icons/io'
import { useRouter } from 'next/navigation';

const Header = ({ pathname }) => {
  const router = useRouter()

  return (
    <nav className={styles.header}>
      <AiFillHome onClick={() => router.push('/notes')} className={pathname === '/notes' ? `${styles.svgActive}` : ''} />
      <BiTask onClick={() => router.push('/notes/done')} className={pathname === '/notes/done' ? `${styles.svgActive}` : ''} />
      <IoMdNotifications onClick={() => router.push('/notes/activity')} className={pathname === '/notes/activity' ? `${styles.svgActive}` : ''} />
      <BiSolidUser />
    </nav>
  )
}

export default Header
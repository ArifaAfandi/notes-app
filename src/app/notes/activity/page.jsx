import { getTodos } from '@/api/api'
import styles from './activity.module.scss'
import CompletedTodos from '@/components/pages/Todos/CompletedTodos'

const ActivityPage = () => {

  return (
    <main className={styles.main}>
      <h1>Activity</h1>
      <CompletedTodos activity getTodos={getTodos} />
    </main>
  )
}

export default ActivityPage
import styles from './done.module.scss'
import CompletedTodos from '@/components/pages/Todos/completedTodos'
import { getCompletedTodos } from '@/api/api'

const donePage = () => {
  return (
    <main className={styles.main}>
      <h1>{`Completed to-do's`}</h1>
      <CompletedTodos getTodos={getCompletedTodos} />
    </main>
  )
}

export default donePage
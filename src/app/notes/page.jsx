import AddTodo from '@/components/addTodo/AddTodo'
import styles from './notes.module.scss'
import Todos from '@/components/Todos/Todos'
import { addTodo, deleteTodos, getTodos, handleDone, handleDelete } from '@/api/api'


const notes = () => {
    return (
        <main className={styles.main}>
            <h1>Notes App</h1>
            <AddTodo addTodo={addTodo} getTodos={getTodos} deleteTodos={deleteTodos} />
            <Todos deleteTodos={deleteTodos} handleDone={handleDone} handleDelete={handleDelete} />
        </main>
    )
}

export default notes
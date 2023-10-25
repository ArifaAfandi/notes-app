'use client'
import Card from '@/components/card/Card'
import styles from './todos.module.scss'
import { MdDone } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { setIsLoading } from '@/redux/slices/todoSlice'
import { useRouter } from 'next/navigation'

const Todos = ({ deleteTodos, handleDone, handleDelete }) => {

    const router = useRouter()
    const { isLoading, todos } = useSelector((state) => state.todoSlice)

    const deleteTodosButton = async () => {
        try {
            setIsLoading(true)
            await deleteTodos(true)
            window.location.reload()
        }
        finally {
            setIsLoading(false)
        }
    }

    const handleDoneButton = async (id) => {
        try {
            setIsLoading(true)
            await handleDone(id)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
            router.push('/notes/done')
        }
    }

    const handleDeleteTodo = async (id) => {
        try {
            setIsLoading(true)
            await handleDelete(id)
            window.location.reload()
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }



    return (
        <section className={styles.main}>
            <div className={styles.headerTodos}>
                <h1>My notes</h1>
                <button onClick={deleteTodosButton}><RiDeleteBin6Line /> Delete all</button>
            </div>
            {isLoading ? 'Loading...' : (
                <div className={styles.cards}>
                    {todos && todos.map((todo) => <Card key={todo.id} content={todo.title} icons={
                        <>
                            <MdDone onClick={() => handleDoneButton(todo.id)} />
                            <RxCross2 onClick={() => handleDeleteTodo(todo.id)} />
                        </>
                    } />)}
                </div>
            )}
        </section>
    )
}

export default Todos
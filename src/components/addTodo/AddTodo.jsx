'use client'
import styles from './add-todo.module.scss'
import { useState, useEffect } from 'react'
import { VscAdd } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { setIsLoading, setTodos } from '@/redux/slices/todoSlice'


const AddTodo = ({ getTodos, addTodo }) => {

    const [data, setData] = useState('')
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const dispatch = useDispatch()

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        gettingTodos()
    }, [])

    const gettingTodos = async () => {
        try {
            const newTodos = await getTodos()
            setIsLoading(true)
            dispatch(setTodos(newTodos))
        }
        finally {
            setIsLoading(false)
        }
    }

    const sendTodo = async () => {
        try {
            dispatch(setIsLoading(true))
            await addTodo(data)
            setData('')
            gettingTodos()
        }
        finally {
            dispatch(setIsLoading(false))
        }

    }

    return (
        <section className={styles.main}>
            <textarea onChange={(e) => data.length === 0 ? setData(e.target.value.toUpperCase()) : setData(e.target.value)} value={data} maxLength={500} name="title" id="todo" placeholder='Add your plan..' />
            <button onClick={sendTodo}>{isMobile ? <VscAdd /> : 'Add'}</button>
        </section>
    )
}

export default AddTodo
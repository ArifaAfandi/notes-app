'use client'
import React, { useState, useEffect } from 'react'
import styles from './completed-todos.module.scss'
import Card from '@/components/card/Card'



const CompletedTodos = ({ getTodos, activity }) => {

  const [todos, setTodos] = useState(null)

  const fetchTodos = async () => {
    try {
      const result = await getTodos()
      setTodos(result)
    }
    catch (err) {
      console.log(err, 'error++++++++++++++++')
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className={styles.done}>
      {todos && (activity ? (
        todos.map((todo) => <Card key={todo.id} createDate={todo.createdAt} content={todo.title} activity />)
      ) : (
        todos.map((todo) => <Card key={todo.id} content={todo.title} completed />)
      ))}
    </div>
  )
}

export default CompletedTodos
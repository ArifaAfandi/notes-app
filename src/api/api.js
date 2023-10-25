import { prisma } from '@/db'

export const getCompletedTodos = async () => {
  'use server'
  try {
    const completed = await prisma.todo.findMany({
      where: {
        complete: true,
      },
      select: {
        id: true,
        title: true,
        complete: true,
        createdAt: true,
        updatedAt: true,
      }
    })
    return completed
  } catch (error) {
    throw error;
  }
  finally {
    await prisma.$disconnect();
  }
}


export const addTodo = async (data) => {
  'use server'
  if (!data) {
    throw new Error('invalid todo')
  }
  await prisma.todo.create({ data: { title: data, complete: false } })
  getTodos()
}

export const deleteTodos = async (clicked) => {
  'use server'
  clicked && await prisma.todo.deleteMany()
}

export const getTodos = async (limit, offset) => {
  'use server'
  try {
    const todos = await prisma.todo.findMany({
      select: {
        id: true,
        title: true,
        complete: true,
        createdAt: true,
        updatedAt: true,
      },
      take: limit,
      skip: offset,
    });

    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export const handleDone = async (id) => {
  'use server'
  try {
    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        complete: true
      },
    })
  } catch (error) {
    console.error('Error ++++++++', error);
    throw error;
  } finally {
  }
}

export const handleDelete = async (id) => {
  'use server'
  try {
    await prisma.todo.delete({
      where: {
        id,
      }
    })
  } catch (error) {
    console.error('Error ++++++++', error);
    throw error;
  } finally {
  }
}
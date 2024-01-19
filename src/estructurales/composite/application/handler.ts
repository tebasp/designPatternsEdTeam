import { Todo } from '../domain/Todo'
import { TodoList } from '../domain/TodoList'

export function handler() {
    // Create container
    const todoList = new TodoList('My To Do List')

    // Add leaves to the container
    todoList.add(new Todo('To Do 1', 'Description 1'))
    todoList.add(new Todo('To Do 2', 'Description 2'))
    todoList.add(new Todo('To Do 3', 'Description 3'))

    // Just ask parent to print
    // All children will be printed
    todoList.print()
}

handler()

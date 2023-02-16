import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

/* const initialStateTodos = [
    { id: 1, title: "Complete online javascript course", completed: true },
    { id: 2, title: "Go to the gym", completed: false },
    { id: 3, title: "10 minutes meditation", completed: false },
    { id: 4, title: "Pick up groceries", completed: false },
    { id: 5, title: "Complete Todo App on Frontend Mentor", completed: false },
]; */

const initialStateTodos = JSON.parse(localStorage.tailwindTodos) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodo] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.tailwindTodos = JSON.stringify(todos);
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };

        setTodo([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodo(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodo(todos.filter((todo) => todo.id !== id));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearcompleted = () => {
        setTodo(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;

        if (!destination) return;

        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodo((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <div
            className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] 
            bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 
            dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
            md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
        >
            <Header />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filteredTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </DragDropContext>

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearcompleted={clearcompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center text-gray-400 transition-all duration-1000 dark:text-gray-500">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;

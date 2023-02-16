import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (title.trim().length > 0) {
            createTodo(title.trim());
            return setTitle("");
        }

        setTitle("");
    };

    return (
        <form
            onSubmit={handleAddTodo}
            className="flex items-center gap-4 overflow-hidden rounded-md
					bg-white p-4 transition-all duration-1000 dark:bg-gray-800"
        >
            <span
                className="inline-block h-6 w-6 flex-none rounded-full border-2 
                transition-all duration-1000 dark:border-gray-600"
            ></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;

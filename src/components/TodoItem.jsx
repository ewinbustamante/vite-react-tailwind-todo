import React from "react";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {
    const { id, title, completed } = todo;

    return (
        <article
            ref={ref}
            {...props}
            className="flex gap-4 border-b-[1.5px] border-b-gray-200 
                        transition-all duration-1000 dark:border-b-gray-600"
        >
            {/* <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
            </button> */}
            <button
                className={`h-6 w-6 flex-none rounded-full transition-all duration-1000 dark:border-gray-600 ${
                    completed
                        ? "grid place-items-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500"
                        : "inline-block border-2"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <CheckIcon />}
            </button>
            <p
                className={`grow font-medium transition-all duration-1000 ${
                    completed
                        ? " text-gray-300 line-through dark:text-gray-600"
                        : "text-gray-600 dark:text-gray-400"
                }`}
            >
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
});

export default TodoItem;

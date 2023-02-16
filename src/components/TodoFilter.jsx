const TodoFilter = ({ changeFilter, filter }) => {
    const setColorText = (text) =>
        text === filter
            ? "text-blue-500 hover:text-gray-400"
            : "text-gray-400 hover:text-blue-500";

    return (
        <section className="container mx-auto mt-6">
            <div
                className="flex justify-center gap-4 rounded-md bg-white p-4 
                            transition-all duration-1000 dark:bg-gray-800"
            >
                <button
                    className={`${
                        filter === "all"
                            ? "font-bold text-blue-500 hover:text-gray-400"
                            : "font-bold text-gray-400 transition-all duration-1000 hover:text-blue-500 dark:text-gray-500"
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "font-bold text-blue-500 hover:text-gray-400"
                            : "font-bold text-gray-400 transition-all duration-1000 hover:text-blue-500 dark:text-gray-500"
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "font-bold text-blue-500 hover:text-gray-400"
                            : "font-bold text-gray-400 transition-all duration-1000 hover:text-blue-500 dark:text-gray-500"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;

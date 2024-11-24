import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="grid h-screen place-content-center px-4 dark:bg-base-300">
                <div className="text-center">
                    <h1 className="text-9xl font-black dark:text-gray-700">404</h1>
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Ops!
                    </p>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Parece que esta página não existe.</p>
                    <Link to="/">
                        <button
                        className="btn mt-6 hover:bg-indigo-900 focus:outline-none"
                        >
                        Voltar para Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound;
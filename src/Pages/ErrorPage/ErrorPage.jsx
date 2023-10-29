const ErrorPage = () => {
    return (
        <div className="h-screen flex col-span-1 justify-center items-center">
            <div className="text-center">
            <h1 className="text-9xl font-bold mb-5 text-neutral-700">404</h1>
            <h3 className="text-3xl font-bold mb-5 text-neutral-700">Not Found</h3>
            <p>The resource requested could not be found on this server!</p>
            </div>
        </div>
    );
};

export default ErrorPage;
export const H1 = ({ children, className }) => {
    return (
        <h1
            className={`text-[120px] font-extrabold  leading-normal font-main ${className}`}
        >
            {children}
        </h1>
    );
};
export const H2 = ({ children, className }) => {
    return (
        <h2
            className={`text-4xl font-bold leading-snug  font-main ${className}`}
        >
            {children}
        </h2>
    );
};
export const H3 = ({ children, className }) => {
    return (
        <h3
            className={`text-[20px] font-semibold leading-snug  font-main ${className}`}
        >
            {children}
        </h3>
    );
};

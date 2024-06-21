export const H1 = ({ children, className }) => {
    return (
        <h1
            className={`user-select: none cursor-default text-[120px] font-extrabold  leading-tight text-primary ${className}`}
        >
            {children}
        </h1>
    );
};
export const H2 = ({ children, className }) => {
    return (
        <h2
            className={`cursor-default text-4xl font-bold leading-snug  text-primary ${className}`}
        >
            {children}
        </h2>
    );
};
export const H3 = ({ children, className }) => {
    return (
        <h3
            className={`cursor-default text-[20px] font-semibold leading-snug  text-primary ${className}`}
        >
            {children}
        </h3>
    );
};

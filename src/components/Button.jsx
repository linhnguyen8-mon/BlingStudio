export const IconButton = ({ svg, name, strokeColor }) => {
    return (
        <button className=" h-12 px-6 pt-[15px]  bg-brand  rounded-full gap-2.5 inline-flex font-main ">
            <span className="text-white text-base font-bold ">{name}</span>
        </button>
    );
};

export const StyledButton = ({ name, className, classNameChild }) => {
    return (
        <button className={`px-5 pt-[11px] pb-2.5 rounded-full ${className}`}>
            <span
                className={`uppercase text-center text-sm font-bold ${classNameChild}`}
            >
                {name}
            </span>
        </button>
    );
};
export const OutlineButton = ({ name, className, classNameChild, color }) => {
    return (
        <button
            className={`px-5 pt-[11px] pb-2.5 rounded-full border inline-block border-${color}  ${className}`}
        >
            <span
                className={`uppercase  text-sm font-medium ${classNameChild} text-${color}`}
            >
                {name}
            </span>
        </button>
    );
};


const TemplateCard = ({ children }) => {
    return (
        <div className="container bg-[#fff] mt-4 rounded-3xl p-4 sm:p-8 text-base md:text-xl shadow-custom-light">
            {children}
        </div>
    );
};

export default TemplateCard;

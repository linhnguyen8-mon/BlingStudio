
const TemplateCard = ({ children }) => {
    return (
        <div className="container bg-[#fff] mt-4 rounded-3xl p-8 text-xl  shadow-custom-light">
            {children}
        </div>
    );
};

export default TemplateCard;

const SectionTitle = ({ title , sub_title}) => {
    return (
        <section className="section-title mb-10 text-center">
            <h1 className="text-2xl md:text-3xl font-medium text-slate-700">{title ? title : "No title available"}</h1>
            <p className="text-sm text-gray-500 font-medium">{sub_title ? sub_title : ""}</p>
        </section>
    );
};

export default SectionTitle;
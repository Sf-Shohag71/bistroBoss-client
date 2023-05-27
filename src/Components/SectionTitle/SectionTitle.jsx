

const SectionTitle = ({headings, subHeadings}) => {
    return (
        <div className="my-10 text-center w-4/12 mx-auto">
            <p className="text-warning text-lg mb-2">--- {subHeadings} ---</p>
            <h3 className="text-3xl font-bold border-y-4 py-2 uppercase">{headings}</h3>
        </div>
    );
};

export default SectionTitle;
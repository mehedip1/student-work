

const SectionTittle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center mt-12">
           <h2 className="text-4xl uppercase py-4 ">{heading}</h2>
            <p className="text-red-600 p-2 text-2xl">{subHeading}</p>
        </div>
    );
};

export default SectionTittle;
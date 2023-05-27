import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"


const Featured = () => {
    return (
        <div className="featured-item text-white py-10 my-32">
            <SectionTitle headings={"from our menu"} subHeadings={"Check it out"}></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div className="ml-10">
                    <h5>May 26, 2023</h5>
                    <h5 className="uppercase">where can i get some</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi sit voluptate aliquam velit harum qui ut obcaecati ipsam corporis perspiciatis ullam, fuga rerum nulla possimus asperiores aperiam atque nesciunt dicta assumenda quidem odio consequuntur!</p>
                    <button className="hover:bg-warning uppercase cursor-pointer rounded-lg border-b-4 border-warning px-4 py-2 mt-5">read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
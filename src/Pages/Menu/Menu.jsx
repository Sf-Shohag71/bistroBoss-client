import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import bannerImg from "../../assets/menu/banner3.jpg";
import desserts from "../../assets/menu/dessert-bg.jpeg";
import soups from "../../assets/menu/soup-bg.jpg";
import salads from "../../assets/menu/salad-bg.jpg";
import pizzas from "../../assets/menu/pizza-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <div className="mb-16">
        <Cover
          title={"our menu"}
          img={bannerImg}
          subtitle={"Would you like to try a dish?"}
        ></Cover>
        <SectionTitle
          headings="Today's offer"
          subHeadings="Don't Miss"
        ></SectionTitle>
        <MenuCategory title={"offered"} items={offered}></MenuCategory>
      </div>

      {/* desserts */}
      <div className="mb-16">
        <Cover
          title={"Desserts"}
          img={desserts}
          subtitle={
            "Each heavenly bite unveils a perfect balance of decadence and elegance, leaving your taste buds dancing with joy"
          }
        ></Cover>
        <MenuCategory title={"dessert"} items={dessert}></MenuCategory>
      </div>

      {/* soups */}
      <div className="mb-16">
        <Cover
          title={"Soups"}
          img={soups}
          subtitle={
            "Each heavenly bite unveils a perfect balance of decadence and elegance, leaving your taste buds dancing with joy"
          }
        ></Cover>
        <MenuCategory title={"soup"} items={soup}></MenuCategory>
      </div>

      {/* pizza */}
      <div className="mb-16">
        <Cover
          title={"Pizza"}
          img={pizzas}
          subtitle={
            "Each heavenly bite unveils a perfect balance of decadence and elegance, leaving your taste buds dancing with joy"
          }
        ></Cover>
        <MenuCategory title={"pizza"} items={pizza}></MenuCategory>
      </div>

      {/* salad */}
      <div className="mb-16">
        <Cover
          title={"Salads"}
          img={salads}
          subtitle={
            "Each heavenly bite unveils a perfect balance of decadence and elegance, leaving your taste buds dancing with joy"
          }
        ></Cover>
        <MenuCategory title={"salad"} items={salad}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;

import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = ({btnText}) => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular')
    return (
        <section className="mb-24">
        
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    popular.map(item=> <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
            <button className="hover:bg-warning uppercase cursor-pointer rounded-lg border-b-4 border-warning px-4 py-2 mt-20 text-center flex mx-auto bg-orange-50">{btnText}</button>
        </section>
    );
};

export default PopularMenu;

import GlobalBtn from "../../Shared/GlobalBtn/GlobalBtn";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({items,title}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    items.map(item=> <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
            <GlobalBtn link={`/order/${title}`} btnText={"order your favorite food"}></GlobalBtn>
        </div>
            
    );
};

export default MenuCategory;
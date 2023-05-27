
const MenuItems = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[118px] h-[104px] border-4 border-gray-200" src={image} alt="" />
            <div>
                <h4 className="text-xl uppercase">{name} --------- </h4>
                <p className="text-[#737373] text-md">{recipe}</p>
            </div>
            <p className="text-warning font-bold">${price}</p>
        </div>
    );
};

export default MenuItems;
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`,{
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro Boss | my Cart</title>
      </Helmet>
      <div className="uppercase text-xl h-[60px] font-bold flex justify-between items-center px-10">
        <h4>My Cart: {cart.length}</h4>
        <h4>Total: {totalPrice}</h4>
        <button className="btn btn-warning text-white">pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th>
              </th>
              <th>Foods</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item, index)=> <tr
                key={item._id}
                >
                    <td>
                      <label>
                        {index+1}
                      </label>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12">
                            <img
                              src={item.image}
                              alt="Food image"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-bold">
                    {item.name}
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <button onClick={()=>handleDelete(item)} className="btn btn-md bg-red-500 border-0"><AiFillDelete className="text-lg"></AiFillDelete></button>
                    </td>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;

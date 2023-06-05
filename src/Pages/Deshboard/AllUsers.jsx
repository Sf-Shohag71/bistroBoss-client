import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { AiFillDelete } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleUserRole = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user as an admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, i am sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
                refetch();
              Swal.fire(`${user.name} is admin now`);
            }
          });
      }
    });
  };

  const handleDelete = (user) => {};

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro Boss | all users</title>
      </Helmet>
      <div className="uppercase text-xl h-[60px] font-bold flex justify-between items-center px-10">
        <h4>Total Users: {users.length}</h4>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>
                  <label>{index + 1}</label>
                </td>
                <td className="font-bold">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <span className="py-1 px-2 bg-[#D1A054] rounded-full text-white">
                      Admin
                    </span>
                  ) : (
                    <button
                      onClick={() => handleUserRole(user)}
                      className="btn btn-md bg-[#D1A054] border-0"
                    >
                      <FaUserShield className="text-lg"></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-md bg-red-500 border-0"
                  >
                    <AiFillDelete className="text-lg"></AiFillDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

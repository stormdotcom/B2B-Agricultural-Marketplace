import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFarmers } from "../features/farmers/farmersSlice";

function FarmerListTab() {
  const dispatch = useDispatch();
  const { data: farmers, loading, error } = useSelector((state) => state.farmers);

  useEffect(() => {
    dispatch(fetchFarmers());
  }, [dispatch]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl overflow-hidden border border-green-200">
        <div className="bg-green-800 text-white text-lg font-semibold p-4 text-center">
          🌾 Farmer List
        </div>

        <table className="w-full border-collapse text-sm">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Product</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map((f, i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? "bg-green-50" : "bg-green-100"} hover:bg-green-200 transition`}
              >
                <td className="py-2 px-4 font-medium text-gray-800">{f.name}</td>
                <td className="py-2 px-4 text-gray-700">{f.email}</td>
                <td className="py-2 px-4 text-gray-700">{f.product}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-green-50 text-center text-xs text-gray-600 py-3">
          Total farmers: {farmers.length}
        </div>
      </div>
    </div>
  );
}

export default FarmerListTab;

import React, { useState, useEffect } from "react";

function AdminPage() {
  const [data, setData] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    completed: false,
    isEdit: false,
  });

  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newData={...data,id:Date.now()}
    setData(newData);
    setArr((arr) => [...arr, newData]);
    

  };

  const handleDelete=(id)=>{
    const filteredTasks = arr.filter((each)=>each.id!==id);
    setArr(filteredTasks)
  }
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("products"));
    if (savedData) setArr(savedData);
  }, []);

  useEffect(() => {
    if (arr.length > 0) localStorage.setItem("products", JSON.stringify(arr));
  }, [arr]);

  return (
    <main className="p-8 space-y-6">
      <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
        <input
          className="border border-gray-500 p-2"
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Enter Product Name"
          value={data.name}
        />
        <input
          className="border border-gray-500 p-2"
          type="number"
          name="price"
          placeholder="Enter Product Price"
          value={data.price}
          onChange={handleChange}
        />
        <select
          name="category"
          className="border border-gray-500 p-2"
          value={data.category}
          onChange={handleChange}
        >
          <option value={""}>Select...</option>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>

      {["Electronics", "Food", "Entertainment"].map((category) => (
        <section key={category}>
          <h2 className="pl-2 mt-4 mb-2 text-lg font-semibold border-l-4 border-blue-500">
            {category}
          </h2>
          {arr
            .filter((item) => item.category === category)
            .map((item) => (
              <div
                className="p-2 mb-2 bg-white shadow-lg rounded-lg"
                key={item.id}
              >
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-gray-500">${item.price}</p>
                <button 
                className="px-2 py-1 mt-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                onClick={()=>handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </section>
      ))}
    </main>
  );
}

export default AdminPage;
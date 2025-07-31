import react, { useState } from "react";

function Book() {
  let [formData, setFormData] = useState({
    title: "",
    published_date: "",
    author_id: "",
  });

  let handleChange = (ben) => {
    setFormData({ ...formData, [ben.target.name]: ben.target.value });
  };
  let handleSubmit = async (event) => {
    event.preventDefault();

    const response = async () => {
      try {
        const res = await fetch("http://localhost:3021/book/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            credentials: "include",
          body: JSON.stringify(formData),
        });
        // if (!res.ok) {
        //   throw new Error("Network response was not ok");
        // }
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    response();
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white flex-col">
      <h1 className="text-4xl font-bold">Book</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-80 mt-4 space-y-4"
      >
        <label className="flex flex-col">
          <span className="text-lg"> title:</span>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </label>
         <label className="flex flex-col">
          <span className="text-lg"> isbn:</span>
          <input
            onChange={handleChange}
            type="text"
            name="isbn"
            className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-lg">published_date:</span>
          <input
            onChange={handleChange}
            type="text"
            name="published_date"
            className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-lg">status:</span>
          <input
            onChange={handleChange}
            type="text"
            name="status"
            className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </label>
        <button type="submit" className="mt-4 p-2 bg-blue-500 rounded">
          Book
        </button>
      </form>
    </div>
  );
}

export default Book;

import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Loading from "./Loading";

function Homepage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProductList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        productList.map((product, index) => (
          <div
            key={index}
            className="md:flex shadow-lg mx-6 md:mx-auto mb-12 max-w-lg md:max-w-2xl cursor-pointer"
            onClick={() => handleClick(product.id)}
          >
            <img
              className="h-full w-full md:w-1/3 rounded-lg rounded-r-none p-8"
              src={product.image}
              alt={product.title}
            />
            <div className="w-full md:w-2/3 p-4 bg-white rounded-lg">
              <div className="flex items-center">
                <h2 className="w-2/3 text-xl text-gray-800 font-medium mr-auto">
                  {product.title}
                </h2>
                <p class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  {product.category}
                </p>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-4 top-auto">
                <p className="text-gray-800 font-semibold tracking-tighter">
                  ${product.price}
                </p>
                <button className=" bg-gray-800 text-gray-100 px-2 py-2 rounded-md mr-2">
                  Update
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Homepage;

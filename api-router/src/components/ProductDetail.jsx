import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import Loading from "./Loading";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data !== null) {
          setProduct(data);
        } else {
          history.push("/404");
        }
      })
      .catch((err) => console.log(err));
  }, [id, history]);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="w-3/4 mx-auto shadow-2xl">
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container p-5 py-12 mx-auto">
              <div className="lg:w-4/5 mx-auto flex justify-between flex-column">
                <img
                  alt={product.title}
                  className="w-1/3 h-full mt-4 rounded"
                  src={product.image}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6">
                  <h1 className="text-gray-900 mb-8 text-3xl title-font font-medium">
                    {product.title}
                  </h1>
                  <p className="leading-relaxed mb-8">{product.description}</p>
                  <div className="flex justify-between">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${product.price}
                    </span>
                    <p class="p-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-red-800">
                      {product.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default ProductDetail;

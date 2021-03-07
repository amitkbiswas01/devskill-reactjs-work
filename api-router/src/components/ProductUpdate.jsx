import { React, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// outside main function to prevent re-rendering
const initValues = {
  title: "",
  price: 0,
  description: "",
  image: "",
  category: "",
};

// validation for input
const validationSchema = Yup.object({
  title: Yup.string().required("REQUIRED"),
  price: Yup.number().positive().required("REQUIRED"),
  description: Yup.string().required("REQUIRED"),
  image: Yup.string().url().required("REQUIRED"),
  category: Yup.string().required("REQUIRED"),
});

function ProductCreate() {
  const [product, setProduct] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleSubmit = (values, submitProps) => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: values.title,
        price: values.price,
        description: values.description,
        image: values.image,
        category: values.category,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        submitProps.resetForm();
      });
  };
  return (
    <div className=" w-3/4 md:w-1/2 shadow-2xl mx-auto p-8 mt-12">
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form
              className="flex flex-col"
              onChange={() => setErrorMessage(null)}
            >
              {errorMessage ? (
                <p className="w-full px-2 py-4 mb-4 bg-red-500 text-center text-lg font-normal text-white">
                  {errorMessage}
                </p>
              ) : null}
              <div className="flex flex-col pt-4">
                <label htmlFor="title" className="text-lg">
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Product Title"
                  className="input"
                  value={product.title}
                />
                <ErrorMessage name="title">
                  {(error) => <p className="error-msg">{error}</p>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="price" className="text-lg">
                  Price
                </label>
                <Field
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price"
                  className="input"
                  value={product.price}
                />
                <ErrorMessage name="price">
                  {(error) => <p className="error-msg">{error}</p>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="description" className="text-lg">
                  Description
                </label>
                <Field
                  type="textarea"
                  id="description"
                  name="description"
                  placeholder="Description of Product"
                  className="input"
                  value={product.description}
                />
                <ErrorMessage name="description">
                  {(error) => <p className="error-msg">{error}</p>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="image" className="text-lg">
                  Image URL
                </label>
                <Field
                  type="url"
                  id="image"
                  name="image"
                  placeholder="Image URL"
                  className="input"
                  value={product.image}
                />
                <ErrorMessage name="image">
                  {(error) => <p className="error-msg">{error}</p>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="category" className="text-lg">
                  Category
                </label>
                <Field
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Product Category"
                  className="input"
                  value={product.category}
                />
                <ErrorMessage name="category">
                  {(error) => <p className="error-msg">{error}</p>}
                </ErrorMessage>
              </div>
              <div className="mt-8 flex justify-around items-center">
                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                  className="w-1/2 btn btn-filled"
                >
                  Submit
                </button>
                {loading === true ? (
                  <div className="w-1/2 transform translate-x-1/2 translate-y-1/2">
                    <div
                      style={{ borderTopColor: "transparent" }}
                      className="border-solid animate-spin rounded-full border-blue-400 border-8 h-8 w-8"
                    ></div>
                  </div>
                ) : null}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ProductCreate;

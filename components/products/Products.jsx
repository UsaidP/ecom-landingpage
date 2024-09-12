import React, { useState, useEffect } from "react";
import SideScrollContainer from "./SideScrollContainer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='mx-16 p-4 bg-white mt-3'>
      <h1 className='text-3xl p-4'>Best Deals</h1>
      <SideScrollContainer>
        <div className='md:flex '>
          {products.map((product) => (
            <div key={product.id} className='p-2 border  border-gray-600'>
              <a href='#'>
                <img
                  className='m-auto p-auto max-w-48 max-h-48'
                  width={120}
                  height={150}
                  src={product.image}
                  alt={product.id}
                />
                <h1 className="w-3">{product.title}</h1>
              </a>
            </div>
          ))}

          {/* {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className='w-64 h-40 bg-blue-200 flex items-center justify-center'
            >
              Item {item}
            </div>
          ))} */}
        </div>
      </SideScrollContainer>
    </div>
  );
};

export default Products;

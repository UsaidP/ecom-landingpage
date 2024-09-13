async function ProductsData() {
  const data = await fetch("https://dummyjson.com/products").then((res) =>
    res.json().then((res) => res.products)
  );

  return data;
}
export default ProductsData;

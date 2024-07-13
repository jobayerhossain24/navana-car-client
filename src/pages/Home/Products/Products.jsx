import breakPad from "../../../assets/images/products/1.png";
import breakShoe from "../../../assets/images/products/2.png";
import airFilter from "../../../assets/images/products/3.png";
import battery from "../../../assets/images/products/4.png";
import tyre from "../../../assets/images/products/5.png";
import enginePlug from "../../../assets/images/products/6.png";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      title: "Break Pad",
      img: breakPad,
      price: 20,
    },
    {
      title: "Break Shoe",
      img: breakShoe,
      price: 25,
    },

    {
      title: "Air Filter",
      img: airFilter,
      price: 15,
    },
    {
      title: "Battery",
      img: battery,
      price: 18,
    },
    {
      title: "Tyre",
      img: tyre,
      price: 30,
    },
    {
      title: "Engine Plug",
      img: enginePlug,
      price: 50,
    },
  ];
  return (
    <div>
      <div className="text-center mt-12 mb-4">
        <p className="text-2xl font-bold text-orange-600">Products</p>
        <h2 className="text-5xl font-semibold">Our Products </h2>
      </div>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

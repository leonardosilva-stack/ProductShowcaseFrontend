import React, { useState, useEffect } from "react";
import { getBrands, getProducts } from "../services/api";
import ProductPopup from "./ProductPopup";

const ProductSection = () => {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeBrand, setActiveBrand] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchBrandsAndProducts = async () => {
      try {
        const brandsResponse = await getBrands();
        const productsResponse = await getProducts();

        if (Array.isArray(brandsResponse.data)) {
          setBrands(brandsResponse.data);
        } else {
          console.error("Brands are not an array:", brandsResponse.data);
        }

        if (Array.isArray(productsResponse.data.products)) {
          setProducts(productsResponse.data.products);
          setFilteredProducts(productsResponse.data.products);
        } else {
          console.error("Products are not an array:", productsResponse.data);
        }
      } catch (error) {
        console.error("Error when searching for brands and products:", error);
      }
    };

    fetchBrandsAndProducts();
  }, []);

  const handleBrandClick = (brandId) => {
    setActiveBrand(brandId);
    if (brandId === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => String(product.brand_id) === String(brandId)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="container mx-auto py-10 px-4 lg:px-0">
      <div className="flex gap-y-3 lg:gap-y-0 lg:flex-row flex-col gap-x-5 justify-center mb-4">
        <button
          onClick={() => handleBrandClick(null)}
          className={`font-semibold text-lg px-6 py-2 hover:bg-[#407CBF] duration-300 rounded-lg text-white ${
            activeBrand === null ? "bg-[#FFB400]" : "bg-[#407CBF]"
          }`}
        >
          All
        </button>
        {brands.map((brand) => (
          <button
            key={brand._id}
            onClick={() => handleBrandClick(brand._id)}
            className={`font-semibold text-lg px-6 py-2 hover:bg-[#407CBF] duration-300 rounded-lg text-white ${
              activeBrand === brand._id ? "bg-[#FFB400]" : "bg-[#407CBF]"
            }`}
          >
            {brand.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(product)}
            >
              <img
                src={`http://127.0.0.1:8000/storage/${product.image}`}
                alt={product.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={handleClosePopup} />
      )}
    </section>
  );
};

export default ProductSection;

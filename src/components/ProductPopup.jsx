import React from "react";

const ProductPopup = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{product.title}</h2>
        <h3 className="text-lg font-semibold">
          Nutritional Table ({product.nutritionalTable.portionSize})
        </h3>
        <ul className="mt-2">
          <li className="flex justify-between font-semibold mb-2">
            <span>Item</span>
            <div className="flex justify-between w-1/2">
              <span className="w-1/2 text-center">Amount per Portion</span>
              <span className="w-1/2 text-center">%VD</span>
            </div>
          </li>
          {product.nutritionalTable.values.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <div className="flex justify-between w-1/2">
                <span className="w-1/2 text-center">
                  {item.quantity} {item.unit}
                </span>
                <span className="w-1/2 text-center">({item.vd}%)</span>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductPopup;

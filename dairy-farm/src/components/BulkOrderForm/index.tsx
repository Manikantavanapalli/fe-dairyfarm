import React, { useState } from "react";

interface BulkOrderFormProps {
  onSubmit: (order: {
    name: string;
    email: string;
    phone: string;
    products: { id: number; name: string; quantity: number }[];
    notes: string;
  }) => void;
  products: { id: number; name: string }[];
}

const BulkOrderForm: React.FC<BulkOrderFormProps> = ({ onSubmit, products }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<
    { id: number; name: string; quantity: number }[]
  >([]);
  const [notes, setNotes] = useState("");

  const handleProductChange = (productId: number, productName: string, quantity: number) => {
    const updatedProducts = selectedProducts.filter((p) => p.id !== productId);
    if (quantity > 0) {
      updatedProducts.push({ id: productId, name: productName, quantity });
    }
    setSelectedProducts(updatedProducts);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      email,
      phone,
      products: selectedProducts,
      notes,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Bulk Order Form</h2>

      {/* Customer Details */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Product Selection */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Products</h3>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between">
              <label className="text-gray-700">{product.name}</label>
              <input
                type="number"
                min="0"
                onChange={(e) =>
                  handleProductChange(product.id, product.name, parseInt(e.target.value))
                }
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Quantity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Any special instructions or requirements"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >
          Submit Bulk Order
        </button>
      </div>
    </form>
  );
};

export default BulkOrderForm;
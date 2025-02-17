import React from "react";
import Spinner from "../../components/LoadingSpinner";
import Carousel from "../../components/carousel";
import Pagination from "../../components/pagination";
import SearchBar from "../../components/SearchBar";
import ButtonBtn from "../../components/Button";
import ProductCard from "../../components/productCard";
import Rating from "../../components/Rating";

const TestPage: React.FC = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-200 p-6">
      <h1>Test Page</h1>

      <SearchBar onSearch={function (): void {
        throw new Error("Function not implemented.");
      } } />

      <Spinner/>

      <Carousel images={[]}/>

      <Pagination currentPage={1} totalPages={3} onPageChange={function (): void {
        throw new Error("Function not implemented.");
      } }/>

      <ButtonBtn text={"button"} onClick={function (): void {
        throw new Error("Function not implemented.");
      } }/>

      <ProductCard image={""} title={""} price={""} description={""} onAddToCart={function (): void {
        throw new Error("Function not implemented.");
      } }/>

      <Rating rating={2}/>

    </div>
  );
};

export default TestPage;

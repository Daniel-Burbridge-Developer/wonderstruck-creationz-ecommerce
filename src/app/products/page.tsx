import SearchBar from "./(components)/search-bar";
import DynamicProductGrid from "./(components)/dynamic-product-grid";
import CategoryFilter from "./(components)/category-filter";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-purple-300">
          Wonderstruck Emporium
        </h1>
        <SearchBar />
        <div className="mt-8 flex flex-col gap-8 md:flex-row">
          <CategoryFilter />
          <DynamicProductGrid />
        </div>
      </div>
    </div>
  );
}

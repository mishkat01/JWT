import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProductGrid from "../components/ProductGrid";

function AllProductPage() {
  return (
    <>
      <Nav />
      <div>
        <hr />
        <h1 style={{ textAlign: "center" }}>All Products In Store</h1>
        <hr />
        <ProductGrid />
      </div>
      <br />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default AllProductPage;

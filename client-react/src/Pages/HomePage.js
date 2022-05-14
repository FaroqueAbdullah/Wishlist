import Product from "../Components/Product";

function HomePage() {
  return (
    <div className="w-full flex justify-center mt-4 p-2">
        <div className="max-w-screen-desktop w-full grid gap-4 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
    </div>
  );
}

export default HomePage;
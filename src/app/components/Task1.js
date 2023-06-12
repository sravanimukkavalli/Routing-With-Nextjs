import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Task1() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-white">
      <div className="flex flex-row justify-center items-center h-3/6 w-3/6 bg-white drop-shadow-2xl rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
          alt="Product"
          className="w-3/6 h-full"
        />
        <div className="w-3/6 pl-10 flex flex-col mb-4">
          <h2 className="pt-3 text-gray-500 text-xl">P E R F U M E</h2>
          <h1 className="font-bold text-black pt-2 text-xl font-serif">
            Gabrielle <br /> Essence Eau <br /> De Parfum
          </h1>
          <p className="font-500 text-md text-gray-500 font-medium">
            A floral, solar and voluptuous <br /> interpretation composed by
            <br /> Olivier Polge ,Perfumer-Creator <br /> for the House of
            CHANEL.
          </p>
          <div className="flex flex-row mt-3">
            <h2 className="font-serif text-xl text-green-800 font-bold">
              $149.99
            </h2>
            <p className="font-serif text-gray-500 pl-6 line-through">
              $169.99
            </p>
          </div>
          <div className="flex flex-row justify-center bg-green-900 w-4/6 ml-8 mt-4 text-white rounded-xl pt-3">
            <AiOutlineShoppingCart className="pt-1 text-2xl" />
            <p className="pb-4 pl-2">Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

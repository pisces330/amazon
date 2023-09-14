import Carousel from "./Carousel";

const Main = () => {
  return (
    <div className="bg-amazon-backgorund">
      <div className="min-w-[1000px] max-w-[1500ox] m-auto bg-purple-600">
        Main
        <Carousel />
        {/* tailwind grid learning  2023.09.13 */}
        <div className="grid grid-cols-3 xl:grid-cols-4">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
  );
};

export default Main;

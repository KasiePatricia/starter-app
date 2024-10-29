

export const HoverToShowText = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 my-14">
      <h2 className="mb-4 text-2xl font-semibold">Reveal additional content on hover</h2>
      <div className="w-[300px] h-[280px] p-0 shadow-md rounded-lg overflow-hidden transition-all duration-300 ease-in-out group">
        <img
          src="https://picsum.photos/id/404/367/267"
          alt="Card image"
          className="w-[300px] h-56 object-cover block transition-all duration-300 ease-in-out group-hover:-mt-20 group-focus-within:-mt-20"
        />
      
        <h3 className="p-3 pb-12 m-0 text-xl font-medium leading-8 transition-all duration-300 ease-in-out group-hover:pb-0 group-focus-within:pb-0">
          Lorem ipsum
        </h3>
      
        <div className="block p-2">
          <p className="m-0 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br/>
            <a href="#" className="text-blue-600 hover:text-blue-800">Link to source</a>
          </p>
        </div>
      </div>
    </section>
  );
};


  export default HoverToShowText;
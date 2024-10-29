
const HoverMenu = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 my-14">
      <h2 className="mb-4 text-2xl font-semibold">Show menu on image hover</h2>
      <figure className="relative overflow-hidden m-2 min-w-[340px] max-w-[480px] max-h-[290px] w-full bg-black text-center group">
        <img
           src="https://picsum.photos/id/1060/800/480.jpg"
          alt="Menu background"
          className="relative max-w-full top-0 right-0 opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-50 group-hover:right-[-120px]"
        />
      
        <nav className="absolute top-0 -left-[120px] w-[120px] h-full bg-black transition-all duration-300 ease-in-out group-hover:left-0 group-hover:opacity-100 flex flex-col justify-center">
          <a href="#" className="block text-white opacity-80 relative transition-all duration-300 ease-in-out hover:opacity-100">
            Home
          </a>
          <a href="#" className="block text-white opacity-80 relative transition-all duration-300 ease-in-out hover:opacity-100">
            Pricing
          </a>
          <a href="#" className="block text-white opacity-80 relative transition-all duration-300 ease-in-out hover:opacity-100">
            About
          </a>
        </nav>
      </figure>
    </section>
  );
};

export default HoverMenu;
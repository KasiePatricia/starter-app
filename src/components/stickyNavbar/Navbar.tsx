import { useEffect, useState } from "react";
import reactLogo from "@assets/react.svg";
import "./navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState<boolean>(false);  
	  
	useEffect(() => {  
		window.addEventListener("scroll", () => {  
		setScroll(window.scrollY > 10);  
		});  
	});

  return (
    <header className={` bg-black/40 py-6 ${scroll ? "sticky-navbar" : "bg-black"}`}>
      <div className={`container mx-auto flex justify-between items-center`}>
        <img src={reactLogo} alt="logo" />
        <nav>
          <ul className="flex items-center w-full gap-4">
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
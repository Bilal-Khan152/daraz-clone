import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearSearchTerm, setSearchTerm } from "../Redux/Slices/searchSlice";
import NavbarForProductPage from "./NavbarForProductPage";
import MobileViewLinks from "./MobileViewLinks";
import DesktopViewLinks from "./DesktopViewLinks";
import NavLogoSearchCart from "./NavLogoSearchCart";
import logo from "../assets/images/daraz.PK.png"

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideDesktopLinks, setHideDesktopLinks] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight / 2;

      setScrolled(window.scrollY > 10);
      setHideDesktopLinks(window.scrollY > halfScreen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isProductPage =
    location.pathname.startsWith("/product") ||
    location.pathname.startsWith("/productDetails/:id");

  const handleOnChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSearchBtn = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div
      className={`w-full sticky top-0 z-20 bg-brand transition-all duration-300 ${
        hideDesktopLinks
          ? "lg:h-[75px]"
          : isScrolled
          ? "lg:h-[100px]"
          : isProductPage
          ? "lg:h-[101px]"
          : "lg:h-[118px]"
      }`}
    >
      <div
        className={`transition-all duration-300 overflow-hidden ${
          hideDesktopLinks ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
        }`}
      >
        <DesktopViewLinks />
      </div>

      <div className="flex justify-between items-center lg:hidden px-6 py-3 text-white ">
        <img
          onClick={() => navigate("/")}
          className="w-[30%] h-auto cursor-pointer"
          src={logo}
          alt="Logo"
        />
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <MobileViewLinks
        handleSearchBtn={handleSearchBtn}
        isMobileMenuOpen={isMobileMenuOpen}
        handleOnChange={handleOnChange}
      />

      <NavLogoSearchCart
        hideDesktopLinks={hideDesktopLinks}
        handleSearchBtn={handleSearchBtn}
      />
      <NavbarForProductPage />
    </div>
  );
};

export default Navbar;

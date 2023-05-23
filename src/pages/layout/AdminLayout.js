import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import ProductCard from "../Product/ProductCard";
import ProfilePage from "../profile/ProfilePage";
import { Footer } from "./Footer";
import { GlobalMsg } from "./GlobalMsg";
import { Header } from "./Header";
import NavHead from "./NavHead";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const AdminLayout = ({ slideshow, productCard }) => {
  const { filteredProducts } = useSelector((state) => state.product);
  const [isNavHeadVisible, setIsNavHeadVisible] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setIsNavHeadVisible(false);
    } else {
      setIsNavHeadVisible(true);
    }
  };



  return (
    <>
      <div className="sticky-head">
        <GlobalMsg />
        <Header />
        {isNavHeadVisible && <NavHead />}
      </div >
      <div className="scroller">
        {filteredProducts.length > 0 ? (
          <div className="mt-3">
            {productCard}
          </div>

        ) : (
          <>
            {slideshow}
            <Container className="mainPage m-5">
              {productCard}
            </Container>
          </>
        )}

        <Banner />

        <Footer />
      </div>

    </>
  );
};

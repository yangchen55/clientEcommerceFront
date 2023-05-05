import React from "react";
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
  return (
    <>
      <div className="sticky-head">
        <GlobalMsg />
        <Header />
        <NavHead />
      </div >
      <div className="scroller">


        {filteredProducts.length > 0 ? (

          <div className="mt-5">
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

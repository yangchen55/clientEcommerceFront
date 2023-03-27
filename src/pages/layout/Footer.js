import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <h3 style={{ fontWeight: 'bold' }} className="mx-5">Follow us</h3>

      <div class="w-50  m-4 fa-2x">
        <i class="fa-brands fa-facebook-f footer-icon"></i>
        <i class="fa-brands fa-instagram footer-icon"></i>
        <i class="fa-brands fa-tiktok footer-icon"></i>
        <i class="fa-solid fa-envelope footer-icon "></i>
      </div>


      <div className="p-3 f-last">
        <p>Feminal Fashion - Chitwan , Nepal &copy; Copyright FeminalFashion {new Date().getFullYear()}  </p>
      </div>
    </div >
  );
};

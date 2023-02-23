import React, { Fragment } from "react";
import Cards from "../../components/cards/cards";
import Info_Cards from "../../components/cards/info_cards";
import Result_Cards from "../../components/cards/result_cards";
import Demo_section from "../../components/demo_section/demo_section";
import Footer_section from "../../components/footer_section/footer_section";
import Hero_section from "../../components/hero_section/hero_section";
import Navbar from "../../components/navbar/navbar";
import Pricing_section from "../../components/pricing_section/pricing_section";
import Product_info from "../../components/product_info/product_info";
import Product_info_reverse from "../../components/product_info/product_info_reverse";
import Review_section from "../../components/review_section/review_section";
import Show_case from "../../components/show_case/show_case";
import Tools_container from "../../components/tools_section/tools_container";
import Tools_section from "../../components/tools_section/tools_section";

function Landingpage() {
  return (
    <Fragment>
      <Hero_section />
      <Cards />
      <Demo_section demobuttons />
      <Info_Cards />
      <Show_case />
      <Result_Cards />
      <Demo_section />
      <Product_info />
      <Product_info_reverse />
      <Product_info />
      <Tools_section />
      <Pricing_section />
      <Review_section />
      <Footer_section />
    </Fragment>
  );
}

export default Landingpage;

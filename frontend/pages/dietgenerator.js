import React from "react";
import { NavbarNew } from "../components/NavbarNew";
import DietGenerator from "../components/DietGenerator";
import Footer from "../components/Footer";

const dietGenerator = () => {
    return(
        <div>
            <NavbarNew />
            <DietGenerator />
            <Footer />  
        </div>
    )
};

export default dietGenerator;
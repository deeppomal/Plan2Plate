import React from "react";
import { NavbarNew } from "../components/NavbarNew";
import DietGenerator from "../components/DietGenerator";

const dietGenerator = () => {
    return(
        <div>
            <NavbarNew />
            <DietGenerator />
        </div>
    )
};

export default dietGenerator;
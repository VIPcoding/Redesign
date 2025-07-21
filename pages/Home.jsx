import React from "react"
import Header from "../components/Header"
import HeroSection from "@/components/HeroSection";
import Client from "@/components/Client";
import Services from "@/components/Services";

import { Newsletter } from "@/components/Newsletter";
import Market from "@/components/Market";


const Home = () =>{
    return (
        <>
       
        <HeroSection/>
        <Services/>
        <Client/>
        <Market/>
        <Newsletter/>
     
        </>
    )
}

export default Home;
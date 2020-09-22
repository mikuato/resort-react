import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Sevices from "../components/Services";
import FeaturedRoom from '../components/FeaturedRooms'
export default function Home() {
  return (
    <>
    <Hero>
      <Banner title='luxurious rooms' subtitle='deluxerooms starting at $299'>
        <Link to='/rooms' className='btn-primary'>
          our rooms
        </Link>
      </Banner>
    </Hero>
    <Sevices />
    <FeaturedRoom />
    </>
  );
}

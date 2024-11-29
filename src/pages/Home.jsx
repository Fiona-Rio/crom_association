import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Tremplin from './tremplin'
import Navbar from '../navbar';
import MainCard from '../mainCard';
import Card from '../card';
import Footer from '../footer';
import Line from '../line';
import asso from '../assets/data/asso';
import groups from '../assets/data/groups';

export default function Home() {
  return (
    <div>
      <main className='px-5 pt-3 md:px-8 md:pt-10 lg:pb-6 lg:px-14'>
        <MainCard />
        <section className='flex flex-wrap justify-evenly gap-y-10 lg:gap-x-8 lg:gap-y-14 my-10'>
          {groups.map((group) => (
            <Card
              key={group.id}
              name={group.name}
              genre={group.genre}
              description={group.description}
              image_promo={group.image_promo}
              image_logo={group.image_logo}
              facebook={group.facebook}
              instagram={group.instagram}
              youtube={group.youtube}
            />
          ))}
        </section>
        <Line />
        <Line />
        {asso.map((asso) => (
          <Footer
            facebook={asso.facebook}
            instagram={asso.instagram}
            youtube={asso.youtube}
          />
        ))}
      </main>
    </div>
  )
}
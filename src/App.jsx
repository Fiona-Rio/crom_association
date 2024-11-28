import React from 'react';
import Navbar from './navbar';
import MainCard from './mainCard';
import Card from './card';
import Footer from './footer';
import Line from './line';
import groups from './assets/data/groups';

export default function App() {
  return (
    <div>
      <Navbar />
      <main className='px-5 pt-3 md:px-8 md:pt-10 lg:px-14'>
        <MainCard />
        <section className='flex flex-wrap justify-evenly lg:gap-x-8 lg:gap-y-14 my-10'>
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
            // className={group.id === 3 ? 'col-span-2 justify-self-center' : ''}
            />
          ))}
        </section>
        <Line />
        <Line />
        <Footer />
      </main>
    </div>
  )
}
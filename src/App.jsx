import React from 'react';
import Navbar from './navbar';
import MainCard from './mainCard';
import Card from './card';
import groups from './assets/data/groups';

export default function App() {
  return (
    <div>
      <Navbar />
      <main className='md:px-8 md:py-10 lg:px-14'>
        <MainCard />
        <section className='grid lg:grid-cols-2 md:gap-x-20 md:gap-y-24 lg:gap-x-28 mx-16 my-16'>
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
      </main>
    </div>
  )
}
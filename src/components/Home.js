import React from 'react';

import profile from '../assets/index.png';

function Home() {
  return (
    <div className="home text-center">
      <div className="nav-text-component m-4">
        <img
          src={profile}
          className="img-fluid rounded-circle"
          style={{ width: '300px' }}
          alt={'profile img'}
        />
      </div>

      <h1>Hi, I'm Bugra Senocak</h1>
      <h2>Business Administration</h2>
    </div>
  );
}

export default Home;

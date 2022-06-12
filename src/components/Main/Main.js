import React from 'react';
import Lead from './Lead/Lead';
import Intro from './Intro/Intro';
import Photos from './Photos/Photos';
import Places from './Places/Places';
import Cover from './Cover/Cover';

function Main() {
  return (
    <main>
      <Lead />
      <Intro />
      <Photos />
      <Places />
      <Cover />
    </main>
  );
}

export default Main;

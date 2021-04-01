import React from 'react';

export default function Home() {
  return (
    <>
      <h1>Hello from Home page</h1>
      <iframe
        title="https://www.youtube.com/embed/thv8myYCUQE"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/thv8myYCUQE"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; encrypted-media"
      ></iframe>
    </>
  );
}

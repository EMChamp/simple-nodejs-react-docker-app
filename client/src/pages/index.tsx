// pages/index.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [data, setData] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:5040/endpoint')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Simple Node.js and React App</h1>
        <p>The data below is populated by our Node.js Backend. This page is build with React.</p>
      </header>
      <main className="content">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <section>
            <h2>API Data</h2>
            <p>{data}</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Home;
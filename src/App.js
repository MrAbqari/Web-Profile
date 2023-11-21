import React from 'react';
import './App.css';

function App() {
  const nama = "Muhammad Riza Abqari";
  const nim = "2200908";

  const formatTanggal = () => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  const tanggalBelajar = formatTanggal();

  const styleParagraph = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: '20px',
    animation: 'fadeIn 1s ease',
  };

  return (
    <div className="App">
      <header className="App-header">
        <p style={styleParagraph}>
          Hallo, nama saya <strong>{nama}</strong> (<em>{nim}</em>) <br />
          Saya mulai belajar React JS pada {tanggalBelajar}
        </p>
      </header>
    </div>
  );
}

export default App;

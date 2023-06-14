# React with CRA

## Touring Folder Structures

* node_modules: file dependencies yang akan dipakai oleh react (dependencies untuk develop website)
* public: assets yang bersifat public 
* src: folder yang berisi file react kita (ada css, js, pointing webpack-> untuk build code react kita yang kita tulis di folder ini)

## Event Handlers

Function yang kita buat yang ke-trigger berdasarkan interaksi seperti click, hover, mouse-in, mouse-out, dsb. Contohnya pada App.js dapat kita tulis kode sebagai berikut: <br>

```
import './App.css';

function App() {

  const onSubmit = () => {
    console.log("Submit Form");
  }

  return (
    <div className="App">
      <h1>Belajar React</h1>
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
}

export default App;

```

## Destructuring Technique

Mari coba tambahkan props libary di halaman index.js <br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App library="ReactJS"/>
  </React.StrictMode>
);
```
<br>

Kemudian pada App.js, untuk memanggil props sebagai berikut: <br>

```
import './App.css';

function App(props) {

  const onSubmit = () => {
    console.log("Submit Form");
  }

  return (
    <div className="App">
      <h1>Belajar {props.library}</h1>
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
}

export default App;
```
<br>

Nah, kita dapat melakukan pemanggilan library langsung dengan destructuring, dengan cara berikut: <br>

```
import './App.css';

function App({library}) {

  const onSubmit = () => {
    console.log("Submit Form");
  }

  return (
    <div className="App">
      <h1>Belajar {library}</h1>
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
}

export default App;

```
<br>

Selain itu, kita bisa juga melakukan **destructuing objet** 
<br>

```
const data = {
    nama: 'Rara',
    alamat: 'Bali',
    sekolah: {
        nama: 'SMA 1 Bali',
        alamat: 'Badung'
    }
};

const { nama, alamat, sekolah: { nama: namaSekolah, alamat: alamatSekolah } } = data;
console.log(nama, alamat, namaSekolah,alamatSekolah);
```
<br>

Selain itu, kita juga bisa melakukan **destructuring array** <br>

```
//cara pertama
const array = ['badung', 'denpasar', 'bedugul', 'uluwatu', 'canggu']
console.log(array[0]);

//cara kedua
const [lokasiSatu, lokasiDua, ...sisa] = array;
console.log("lokasiSatu ===", lokasiSatu);
console.log("lokasiDua ===", lokasiDua);
console.log("lokasiSisa ===", sisa);
```
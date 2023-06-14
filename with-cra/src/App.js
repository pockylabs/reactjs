import './App.css';

function App({library}) {

  const onSubmit = () => {
    console.log("Submit Form");
  }

  const data = {
    nama: 'Rara',
    alamat: 'Bali',
    sekolah: {
      nama: 'SMA 1 Bali',
      alamat: 'Badung'
    }
  };

  const { nama, alamat, sekolah: { nama: namaSekolah, alamat: alamatSekolah } } = data;
  console.log(nama, alamat, namaSekolah, alamatSekolah);

  //cara pertama
  const array = [
    'badung', 'denpasar', 'bedugul', 'uluwatu', 'canggu'
  ]
  console.log(array[0]);

  //cara kedua
  const [lokasiSatu, lokasiDua, ...sisa] = array;
  console.log("lokasiSatu ===", lokasiSatu);
  console.log("lokasiDua ===", lokasiDua);
  console.log("lokasiSisa ===", sisa);



  return (
    <div className="App">
      <h1>Belajar {library}</h1>
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
}

export default App;

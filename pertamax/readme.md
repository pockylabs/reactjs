# Catatan pertama

React merupakan library javascript untuk membuat UI Website. <br>
React Official Docummentation: https://react.dev/learn 

## Intro

Berikut ini adalah syntax untuk render konten di dalam reactjs:

`ReactDOM.createRoot(container).render("h1", null, "ngulik react");`
<br>
detailnya:
* `ReactDOM.createRoot()`: perintah agar react membuat react root untuk menampilkan konten di browser DOM node
* `.render()`: berfungsi menampilkan jsx atau react node di browser

<br>
Misal ingin membuat unordered list:
    <div id="root"></div>
    
    <script type="text/javascript">
        const container = document.getElementById("root");

        const ul = React.createElement(
            "ul",
            null,
            React.createElement("li",null,"React"),
            React.createElement("li",null,"GraphQL"),
            React.createElement("li",null,"NextJS")
        )

        ReactDOM.createRoot(container).render(ul);
    </script>

<br>

Namun seiring dengan perkembangan proyek, tidak mungkin kita menuliskan hal seperti di atas menggunakan createElement. Butuh sesuatu yang bisa mempermudah kita, namanya adalah JSX. <br>

JSX: syntax extension dimana kita dapat menulis kode seperti html di dalam Javascript. <br>

Untuk menggunakan jsx pada browser dapat copy cdn berikut: `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>` <br>

source: https://babeljs.io/setup/#installation <br>

Lalu ubah dari `<script type="text/javascript">` ke `<script type="text/babel">` <br>

Selain penulisan html di Javascript. Pada JSX, kita dapat inject dinamic content ke dalamnya. Contohnya: <br>
```

    const mie = "Mie Ayam";
    const sate = 'Sate';
    const bakso = 'bakso';

    ReactDOM.createRoot(container).render(
        <ul>
            <li>{mie}</li>
            <li>{sate}</li>
            <li>{bakso.toUpperCase()}</li>
        </ul>
    );

```


## Component

Component adalah bagian-bagian kecil dari User Interface (seperti menyusun lego). <br>

Pembuatan Component menggunakan function yang diawali dengan huruf besar, misalnya: 
<br>

```
    function Header() {
        return(
            <header>Roemah Makan Pocky</header>
        )
    }

    ReactDOM.createRoot(container).render(
        <Header />
    );
```
<br>
Mari mencoba menambah 1 component lagi: 
<br>

`
    function Content() {
        return(
            <main>
                <p>Roemah Makan Pocky Semarang</p>
            </main>
        )
    }
`
<br>
Apabila kita merender Header dan Content seperti ini: <br>
`
    ReactDOM.createRoot(container).render(
        <Header/>
        <Content />
    );
`
<br>
Maka akan muncul error, karena react hanya ingin merender single component. Oleh sebab itu, kita perlu wrapping dulu dengan `div` misalnya. <br>

`
    ReactDOM.createRoot(container).render(
        <div>
            <Header/>
            <Content />    
        </div>
    );
`
<br>

Atau kita bisa wrap semua Component dalam function App, sebagai berikut:

```
    function App() {
        return(
            <div>
                <Header/>
                <Content />    
            </div>
        )
    }

    ReactDOM.createRoot(container).render(<App />);
```
<br>

## Props

Mari mencoba parsing dinamic data ke component. Coba untuk parsing data ke header: <br>

```
    function App() {
        return(
            <div>
                <Header nama="Poem"/>
                <Content />    
            </div>
        )
    }
```
<br>

Kemudian di header, kita panggil data yang telah diparsing tersebut: <br>
```
    function Header(props) {
        console.log('props ===', props);
        return(
            <header><h1>Roemah Makan {props.nama}</h1></header>
        )
    }
```
<br>

Mari mencoba parsing data array: <br>
```
    const menu = [
        'Lontong Cap Gomeh',
        "Rawon",
        'Gudeg Jogja'
    ]
```
<br>

Kemudian kita parsing menggunakan map dan unique list key yang bisa berupa index untuk mencegah error saat mapping pada react: <br>

```
    function Content(props) {
        return(
            <main>
                <p>Roemah Makan Pocky {props.lokasi}</p>
                <ul>
                    {menu.map((menu, index) => <li key={index}>{menu}</li>)}    
                </ul>
            </main>
        )
    }
```
<br>

Ada cara lain untuk mendapatkan key yaitu dengan teknik **Remap**. Untuk mengubah bentuk array seperti di atas menjadi array object: <br>

```
    const menuRemap = menu.map((menu, index) => ({
        id: index,
        nama: menu
    }));

    console.log("menuRemap===", menuRemap);
```
<br>

Kita bisa menggunakannya di Component Content: <br>
```
    function Content(props) {
        return(
            <main>
                <p>Roemah Makan Pocky {props.lokasi}</p>
                <ul>
                    {menuRemap.map((menu) => <li key={menu.id}>{menu.nama}</li>)}    
                </ul>
            </main>
        )
    }
``` 
<br>

Selain itu, kita juga bisa parsing menu sebagai props: <br>
```
    function Content(props) {
        return(
            <main>
                <p>Roemah Makan Pocky {props.lokasi}</p>
                <ul>
                    {props.menu.map((menu) => <li key={menu.id}>{menu.nama}</li>)}    
                </ul>
            </main>
        )
    }

    function App() {
        return(
            <div>
                <Header nama="Poem"/>
                <Content lokasi="Semarang" menu={menuRemap}/>
                <Footer tahun={new Date().getFullYear()}/>    
            </div>
        )
    }
```

## Menampilkan Image 

Contoh: <br>
```
    function Content(props) {
        return(
            <main>
                <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                height={300}
                alt="Foto Rumah Makan Pocky"
                />
                <p>Roemah Makan Pocky {props.lokasi}</p>
                <ul>
                    {props.menu.map((menu) => <li key={menu.id}>{menu.nama}</li>)}    
                </ul>
            </main>
        )
    }
```
<br>
Ada hal lain yang perlu diperhatikan. Bila kita inspect element, maka susunan element html kita di browser adalah sebagai berikut: <br>

```
<body>
    <div>
        <header></header>
        <main></main>
        <footer>2023</footer>
    </div>
    <script type="text/babel">...</script>
</body>
```
<br>

Kita bisa menghilangkan `<div>` yang membungkus header, main, dan footer dengan menggunakan **React Fragment** agar tidak terlalu banyak nested ke dalam DOM. Caranya sebagai berikut: <br>

```
    function App() {
        return(
            <React.Fragment>
                <Header nama="Poem"/>
                <Content lokasi="Semarang" menu={menuRemap}/>
                <Footer tahun={new Date().getFullYear()}/>    
            </React.Fragment>
        )
    }
```
<br> Atau bisa juga seperti ini <br>

```
    function App() {
        return(
            <>
                <Header nama="Poem"/>
                <Content lokasi="Semarang" menu={menuRemap}/>
                <Footer tahun={new Date().getFullYear()}/>    
            </>
        )
    }
```

<br>
Sehingga susunan element nya sudah sesuai: <br>

```
<body>
    <header></header>
    <main></main>
    <footer>2023</footer>

    <script type="text/babel">...</script>
</body>
```
# React

## with Vanilla Javascript
Bila menggunakan vanilla javscript akan lebih rumit: <br>
```
<script type="text/javascript">
      // Seleksi elemen div dengan id 'app'
      const app = document.getElementById('app');

      // Buat elemen h1 baru
      const header = document.createElement('h1');

      // Buat text node untuk elemen h1 tadi
      const headerContent = document.createTextNode('Belajar React bareng WPU 🚀');

      // Append teks ke dalam h1
      header.appendChild(headerContent);

      // simpan elemen h1 di dalam div
      app.appendChild(header);
</script>
```

## JSX
* JSX adalah ekstensi sintaks untuk javascript yang dapat mendeskripsikan UI dengan sintaks seperti HTML
* Untuk menulisnya, kita harus ingat **3 aturan JSX** yaitu:
    * Harus selalu mengembalikan satu elemen.
    * Selalu tutup semua tag
    * Gunakan camelCase untuk atribut

## Prerequisite
* HTML & CSS
* Javascript Fundamentals
* DOM
* Modern Javascript (ES6)
* Git & CLI (Command Line Interface)
* Package Manager (NodeJS + NPM)

## Modern Javascript (ES6)
* ES6 Variables (let & const)
* Functions & Arrow Functions
* Objects & Classes
* Arrays & Array Methods
* Destructuring
* Template Literals
* Ternary Operators
* ES Modules & Import / Export Syntax

## Editor Setup
* VSCode
* Linter: ESLint
* Code Formatter: Prettier
* Browser Extension: React Developer Tools

## Core Concepts React
* Components
* Props
* State

### Components
* UI bisa dipecah menjadi bagian-bagian kecil yang disebut dengan komponen
* Nama function ditulis diawali dengan huruf besar

### Props
* Props ditangkap sebagai object saat komponen dibuat.
* Props Refactor
    * Gunakan **destructuring, ternary operator**
* Unique Key: React butuh sesuatu untuk menandai sebuah elemen dengan nilai yang unik karena React harus tau **elemen mana yang berubah**

### State
* Menambah interaktivitas dengan State
* Data yang berubah seiring waktu pada React disebut **state**

### State dan Hooks
* Membuat tombol yang jika diklik, akan menambahkan jumlah angka sesuai dengan berapa kali tombol diklik
* React punya serangkaian **function** yang disebut dengan **Hooks**, yang memungkinkan kita **menambahkan logic** pada komponen kita.
* Salah satu Hooks yang bisa digunakan untuk mengelola state adalah **setState()** yang mengembalikan nilai berupa array, dan bisa kita akses menggunakan teknik **destructuring**


## What's Next?
* Bagaimana React bekerja?
    * Render & Commit
    * Virtual DOM
* Bagaimana mengelola State?
* Bagaimana menggunakan Context?
* Memahami apa itu Lifecycle?
* Bagaimana menggunakan Hooks?
* ....

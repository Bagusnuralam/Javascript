//FUNCTION JAVA_SCRIPT
console.log("--AWAL FUNCTION--");
//Function adalah suatu blok kode yang dapat digunakan kembali yang mengelompokkan urutan pernyataan untuk melakukan tugas tertentu.
function namaYudi(nama) {
    console.log(`Nama saya ${nama}`);
}

namaYudi ("Bagus Wachyu Nuralam")

function namaAli(nama) {
    console.log(`Nama saya ${nama}`)
}

namaAli ("Faathir Andar Nurali")

//Memanggil FUNCTION
const myName = "Bagus Wachyu Nuralam"

function namaDiri() {
    console.log(`Ganteng parah ${myName}`);
}

namaDiri();//Panggilan BISA BERULANG KALI
namaDiri();

//PARAMETER dan ARGUMENT
function triangle(width, height) {
    console.log(width*height);
}

triangle(24,4);
triangle(22,2);

//Contoh 2
function oval(jari,phi) {
    console.log(jari*jari*phi);
}

oval(14, 5);
//ATAU

function beliBuku(buku = "buku?",name = "User?", harga = "Harga?")/*Parameter*/ {
    console.log(`Terima kasih atas pembelian ${buku} dengan anda ${name} seharga ${harga}`);
}

beliBuku("PPKN", "Bagus Wachyu Nuralam", 23*100);//Pemanggilan argumen nya yang sesuai dengan yang ditulis parameter. 
beliBuku("Buku gitar", "Faathir Andar Nurali");
beliBuku();//Begini kalau disituasi saat tidak dipersonalisasikan akun user/akun terbaru user

//DEFAULT PARAMETER
function beliTanah(tanah1 = "Jawa", tanah2 = "Sumatra", tanah3 = "Bali") {
    console.log(`Selamat atas pembelian tanah nya di ${tanah1}.`);
    console.log(`Selamat atas pembelian tanah nya di ${tanah2}.`);
    console.log(`Selamat atas pembelian tanah nya di ${tanah3}.`);
}

beliTanah();//BIKIN RIBETIN sih Tapi namanya tetep belajar and learning by doing!

//RETURN, dalam arti bisa juga ditukar posisi antar body dan argumen

function ayam(dada, paha, pala) {
    if (dada > 2 || paha > 1 || pala > 2) {
        return dada + paha + pala//RETURN bisa aja dijadikan rumus
    }
    return "masak banyak"//BAGIAN INI NGGA ADA OUTPUT-nya
}

const paket = ayam(12, 12,12);
console.log(paket);

//LANJUTAN

function abjad(a, b, c){
    return a * b + c
}

const abc = abjad(2, 3, 4);
console.log(abc);

//LANJUTAN 2

function buku(ppkn, mtk, ipa) {
    if (ppkn === "suka" && mtk === "sulit" && ipa === "ribet") {
        return "Bismillah bisa belajar"
    } else if (ppkn !== "suka" || mtk !== "sulit" || ipa !== "ribet") {
        return "Ngga bisa apa-apa"
    }
}

console.log(buku("suka", "sulit", "Bisa"));

//LANJUTAN 3

function lampu(merah, kuning, hijau) {
    switch (merah = "merah", kuning = "kuning", hijau = "hijau") {
        case  merah : 
          return "Berhenti dulu untuk sejenak, oke"
        
        case  kuning :
          return "Harap bersiap-siap"

        case hijau :
          return "Bersiap jalan"

        default :
          return "Lagi rusak palang lampu nya"
    }
}

const jalan = lampu(merah = "merah");

console.log(jalan);

//LANJUTAN 4

function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
console.log(getFahrenheit(15)); 

function baca(buku) {
    return buku * 20;
};
  function beli(ngga) {
      return baca(ngga) + 20;
  }

console.log(beli(20));

/*
function lingkaran(diameter, jari, phi) {
    return diameter * jari * phi;
}

const diameter = parseInt(prompt("Masukkan diameter?"));
const jari = parseInt(prompt("Masukkan jari?"));
const phi = 3.14

const luas = lingkaran(diameter, jari, phi);
console.log(luas);
*/
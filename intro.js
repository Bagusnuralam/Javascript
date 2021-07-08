//BAGIAN PENGANTAR JAVASCRIPT
console.log("---START---")
//Data Primitf (Boolean, Integer, null, undefined, String)
console.log("Hello, World");
console.log(12*7);
console.log(25%2);
console.log(23+2);
console.log(43-11);
console.log(42/6);

var i = 24*4-20/2+(23-2) //INGET "KuKABATAKU (Kurung-kali-bagi-tambah-kurang)"
console.log(i);

console.log("sekarang latihan nge-push javascript")
console.log("Nama"+":"+"Bagus Wachyu Nuralam");
console.log("Umur"+":"+ 17);
console.log("Mulai"+ "Tanggal :" + "23-04-21");

console.log("Bagus Wachyu Nuralam".length); //Jumlah abjad dari kalimat
console.log("---");

//Methods JavaScript 
console.log ("gatau bingung".toUpperCase()); //Bakal jadi kapital
console.log ("gatau bingung".trim());

//Objek termasuk tipa data "." memiliki metode melakukan tindakan dan memiliki properti
let yudi = "2+2"
console.log (eval(yudi)); //Mengembalikan arti dari isi integer bukan menjadi string

var ali = "makan nasi"
console.log(ali.blink())//menyebabkan di HTML itu berkedip
console.log(ali.strike())
console.log(ali.bold())//Menyebabkan di HTML itu jdi BOLD
console.log(ali.italics())//Menyebabkan di HTML itu jadi miring

//Method. Bagian Math dari Objek bawaan Standar JS, BUANYAK liat di dokumentasinya 
console.log(Math.random()*40);//Perkalian dengan angka random ke 40
console.log(Math.ceil(40.25));//Membulatkan bilangan koma
console.log(Number.isInteger(25));
//Kita dapat mengakses properti dan metode dengan ".", nama metode dan tanda kurung 'hello'.toUpperCase()
console.log("---END---")
//AKHIR BAGIAN PENGANTAR JAVA SCRIPT

//AWAL BAGIAN VARIABEL JAVASCRIPT
//Bakal Belajar "var","const", "Let"
console.log("--START VARIABEL--")

var nama = "ali"
var nama = "yudi"
console.log(nama);//Bernilai true karena var itu berganti variabel saat makin kebawah

i = 20
var i
console.log(i)

var i
i = 20
console.log(i)//sama aja dengan yang diatas

var a = 2
if (a < 3) {
    var  a = 4
}
console.log(a)

let nameMasir = "yudi"
console.log(nameMasir)
nameMasir = "ali"
console.log(nameMasir)
//ATAU
let nameNeni //TIDAK BERLAKU UNTUK CONST
console.log(nameNeni)
nameNeni = "masan"
console.log(nameNeni)

const namaYudi = "yudi"//DIHARUSKAN UNTUK DEKLARASIKAN ISI VARIABEL DAHULU dan TIDAK MERUBAH ISI DISELANJUTNYA
console.log(namaYudi)

//Let = cara yang disukai untuk mendeklarasikan variabel ketika dapat ditetapkan kembali,
//Const =  cara yang disukai untuk mendeklarasikan variabel dengan nilai konstan.

//PENUGASAN ARITMATIKA
let main = 200
let mainYuk = 400
let mainAja = 500
let mainBiasa = 100

main += 100;//main =  main + 100
mainYuk -= 130;//mainYuk = mainYuk - 130
mainAja *= 2;//mainAja = mainAja * 2
mainBiasa /= 2;//mainBiasa = mainBiasa / 2

console.log(main);
console.log(mainYuk);
console.log(mainAja);
console.log(mainBiasa);
//ATAU
let makan = 26400
makan += 20 //ARTINYA -> makan = makan + 20
console.log("eh lu laper ga ini gw ada duit:", makan)

//OPERATOR INCREMENT dan DECREMENT
//INCREMENT = Ialah menambah 1 tingkat pada bilangan
//DECREMENT = ialah mengurangkan 1 tingkat pada bilangan
let nasi = 20//output = 21
let nasiPulen = 30//output = 29

nasi++;
nasiPulen--;

console.log(nasi);
console.log(nasiPulen);

//PENGGABUNGAN STRING dan VARIABEL
let masak = "Nasi Goreng"
console.log("mau makan apa hari ini gaes" + "eh gw mau:" + masak)
//SIMPELNYA GINI
console.log(`eh gw ada menu terbaru loh apatuh? ${masak}`)//INGET!! Pake kutip `` backsticks(kirinya nomer 1 keyboard) bukan ""/''

//MENGENALI TIPE JENIS DATA OPERATOR//
let benda = "Gelas"
let bendaMakan = "Piring"
let Jumlahbenda = 300
console.log(typeof benda);
console.log(typeof bendaMakan);
console.log(typeof Jumlahbenda);
console.log("---")
//KITA UBAH BENTUK DATA DIATAS
benda = 2406
bendaMakan = 2003
Jumlahbenda = "ada banyak"
console.log(typeof benda);
console.log(typeof bendaMakan);
console.log(typeof Jumlahbenda);

console.log("--AKHIR VARIABEL--")

console.log("--Intermezo 1--")
let buku = "ipdn"
console.log(`Eh lu punya: ${buku}`)
const bukuGede = "cpns"
console.log(`Eh btw lu gimana bukunya: ${bukuGede}`)
var bukuKecil = "kamus"
console.log(`eh gw pinjem : ${bukuKecil} dong!!`)

buku = "Poltekip"
bukuKecil = "quran"
//Ket = Const DATANYA NGGA BISA DIUBAH
console.log(typeof `Eh lu punya: ${buku}`.length);
console.log(typeof `eh gw pinjem : ${bukuKecil} dong!!`.length);

var hargaBuku = 12 * 100
var hargaMinum = 2300 - 100
var hargaMakan = 12300 / 20
var totalMenu = hargaBuku + hargaMinum + hargaMakan

console.log(`eh cuy tadi lu beli buku harganya kalo ga salah ${hargaBuku} sama minumnya ${hargaMinum} terus juga makannya ${hargaMakan} totalnya ${totalMenu}`);
console.log("okee siap makasih".toUpperCase())

console.log("--Akhir Intermezo--")




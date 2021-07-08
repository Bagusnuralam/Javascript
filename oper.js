//MULAI BELAJAR IF--STATEMENT
console.log("--START PERNYATAAN BERSYARAT--");
let bulu = 24
let buluAyam = 30

if (bulu < buluAyam) {
    console.log("Widih bener");//TIAP PERNYATAAN BENAR MAKA BISA DICETAK KALAO TIDAK NGGA AKAN MUNCUL OUTPUT
}

if (bulu > buluAyam) {
    console.log("Pernyataan anda salah");//SALAH DAN TIDAK AKAN MUNCUL OUTPUT
}

var barangEmas = "widih mahal"
 if (true) {
     console.log(`widih barang lu bagus ya ${barangEmas}`);
 }

//IF___ELSE PAKAI PERBANDINGAN OPERATOR

let tari = 200
let nari = 190

if (tari > nari) {
    console.log("Anda benar karena bernilai lebih besar dari pada nari");
} else {
    console.log("Anda salah");
}

if (tari < nari) {
    console.log("Anda benar");
} else {
    console.log("Anda salah karena tari seharusnya lebih besar dari nari");//ELSE --> Akan mencetak karena Dari IF Bernilai false.
}

if (tari <= nari) {
    console.log("Anda Benar")
} else {
    console.log("Anda salah karena nari dan tari bisa aja kecil sama dengan");//ELSE --> Akan mencetak karena Dari IF Bernilai false.
}

if (tari >= nari) {
    console.log(`Anda benar : ${nari} Tarian bernilai besar sama dengan`);
} else {
    console.log("Anda salah");
}

if (tari === nari) {
    console.log("Anda benar");
} else {
    console.log("Anda salah karena nari dan tari tidak sama");//ELSE --> Akan mencetak karena Dari IF Bernilai false.
}
 
if (tari !== nari) {
    console.log("Anda benar karena nilai tari tidak sama dengan nari");
} else {
    console.log("Anda salah");
}

//OPERATOR LOGIKA &&(dan) - ||(atau) - !(Merubah kebalikan dari nilai true atau false)
console.log("--OPERATOR LOGIKA--");
let kayu = "Mahoni"
let hargaKayu = 12500

if (kayu === "Mahoni" && hargaKayu > 10000) {
    console.log("Anda benar karena kedua pernyataan sama-sama benar");
} else {
    console.log("Anda salah");
}

if (kayu === "Jati" && hargaKayu > 10000) {
    console.log("Anda benar");
} else {
    console.log("Anda salah karena salah satu pernyataan salah");
}

if (kayu !== "Jati" || hargaKayu < 14000) {
    console.log("Anda benar karena salah satu dari pernyataan ialah benar");
} else {
    console.log("Anda salah");
}

if (kayu !== "Mahoni" || hargaKayu < 12500) {
    console.log("Anda benar");
} else {
    console.log("Anda salah karena kedua pernyataan salah");
}

let total = kayu < hargaKayu //Harusnya False
console.log(!total) //Tanda "!" membalikkan kenyataan yang sebenarnya

let totalan = kayu !== hargaKayu
console.log(!totalan)

//Truthy and Falsy, yang diliat itu dari sisi kiri apabila data valid maka akan dicetak apabila tidak maka dicetak bagian kanan pada operator || ("atau"),
let username = ""
//Saat userName di isi nama si user, outputnya -> isi dari let username
//Tapi saat userNamenya tidak valid, outputnya -> di isi dari operator string kanan
username = "Faathir andar Nurali"
let Data = username || "Maaf data anda tidak valid"

console.log(`Masukkan data yang benar dari user anda ${Data}`);

let naming = ""
naming = "Masan nurpian"
let sodara = naming || "Maaf data anda tidak valid"

console.log(`Masukkan data yang benar dari user anda ${naming}`)

//Penjabaran dari code diatas
let userName = ""
//Saat userName di isi nama si user, outputnya -> Name
//Tapi saat userNamenya tidak valid, outputnya -> Wrong
userName = "Bagus Wachyu Nuralam"

let Name = userName//kalo datanya valid dari nama si user
let Wrong = "Data tidak valid"//kalo datanya ngga valid

if (Name || Wrong) {
    console.log(`Masukkan data yang benar dari user anda ${Name}`);
} else {
    console.log(`Maaf ${Wrong}`);
}

//Operator Ternary, lebih mempersingkat dari penugasan IF--else dan sama aja
let perkakas = 25
let inventory = 5

bantu = perkakas + inventory

let alat = perkakas === inventory/*False*/ || perkakas !== inventory;/*True*/ 

alat ? console.log(`Eh ini ada alat lu coba deh pake ukuran ${bantu}`)/*Ini outputnya*/  : console.log("Kalo ngga bisa ya gapapa");

let canon = 20
let bcare = 25

Foto = canon + bcare

let kamera = canon === bcare && bcare !== canon;//Karena kedua pernyataan salah

kamera? console.log(`Gw mau beli kamera kira-kira harganya berapaan yak ${Foto * 1000}`)/*True*/ : console.log("Ngga jadi beli kamera deh")/*False*/;

//ATAU

let Perkakas = 25
//Pernyataan dibuat salah hanya menjadi perbandingan dari code yang diatas
Perkakas < 5 ? console.log("Eh ini ada yang murah nih harganya") : console.log("Ngga ada yang murah");

//ELSE--IF Statement
let imam = ""//begini karena kalo misal disuruh masukin username pada form
imam = "Bagus Wachyu Nuralam"
let makmum = ""
makmum = "Faathir Andar Nurali"

if (imam === makmum) {
    console.log("Imamnya solat bareng ama makmum");
} else if (imam !== makmum) {
    console.log("Emang sih imam sama makmum tidak bisa disamakan");
} else {
    console.log("Ngga jadi solat");
}

//ATAU juga bisa kita pake operator Ternery
jamaah = imam !== makmum

jamaah ? console.log("Emang ngga bisa disamakan")/*True statement*/ : console.log("Ya kalo gitu ngga jadi solat");/*False statement*/
//ATAU singkatnya ternery
imam !== makmum ? console.log("Emang ngga bisa disamakan-2") : console.log("Ya kalo gitu ngga jadi solat-2");

//SWITCH---CASE --- DEFAULT //HAMPIR SAMA KAYA IF--ELSE
let sayur = "kolak"
let buah = "manisan"

makanan = sayur + buah
console.log(makanan)

switch (makanan) {
    case "kolakmanisan":
        console.log("Kolaknya enak cuk");
        break;
    case "asinan":
        console.log("Asinannya enak cuk");
        break;
    default:
        console.log("Ngga ada yang enak cuk");
        break;
}

let hijau = 30
let merah = 30
let kuning = 30

let rambu = "Hijau"

switch (rambu) {
    case"Merah" :
        console.log(`Tanda untuk berhenti berkendara di ${merah} menit`);
        break;
    case "Kuning" :
        console.log(`Tanda untuk bersiap dan hati-hati di ${kuning} menit`);
        break;
    case "Hijau" :
        console.log(`Tanda untuk maju dan jalan di ${hijau} menit`);
        break;
    default:
        console.log("Rambunya sedang diperbaiki!");
        break;
} 

console.log("--AKHIR OPERATOR--");
//END







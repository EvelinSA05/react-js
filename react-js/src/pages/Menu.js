import { useState } from "react";
import Tabel from "./Tabel";

function Menu() {
    const titel = "Daftar Menu Restoran";
    const [menus, setMenu] = useState(
        [
            {
                idmenu: 46,
                idkategori: 82,
                menu: "Apel Manalagi",
                gambar: "apel.jpg",
                harga: 3000,
            },
            {
                idmenu: 47,
                idkategori: 82,
                menu: "Pisang Raja",
                gambar: "pisang.jpg",
                harga: 5000,
            },
            {
                idmenu: 48,
                idkategori: 83,
                menu: "Nasi Padang",
                gambar: "nasipadang.jpg",
                harga: 20000,
            },
            {
                idmenu: 49,
                idkategori: 83,
                menu: "Nasi Ayam",
                gambar: "nasiayam.jpg",
                harga: 15000,
            },
            {
                idmenu: 50,
                idkategori: 81,
                menu: "Es Teh",
                gambar: "esteh.jpg",
                harga: 5000,
            },
            {
                idmenu: 51,
                idkategori: 81,
                menu: "Es Jeruk",
                gambar: "esjeruk.jpg",
                harga: 7000,
            },
        ]
    )
    return (
        <div className="App">
            <Tabel menu={menus} titel={titel}/>
            <Tabel menu={menus.filter((data)=>(data.idkategori===81))} titel="MENU BUAH"/>
        </div>
    );
}

export default Menu;
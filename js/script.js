let number_WA = '+62 822-5758-9600';
let number_phone = '+62 822-5758-9600';

const perumahan = [
    {name:'mubarok',    fullname:'Mubarok Residence',       propinsi:'Jawa Timur',   dati2:'Banyuwangi', kecamatan:'Kalipuro',  kelurahan:'Bulusan',   jalan:'Pesantren',
        bgimg:'RiyadhSilver45a.jpg',
        point:['Dekat Pelabuhan', 'Keamanan 24 Jam', 'Dekat Pusat Kota', 'RTH & Play Ground', 'Dekat Kawasan Industri', 'Tempat Ibadah'],
        linkMaps:'https://www.google.com/maps/place/data=!3m1!4b1!4m5!3m4!1s0x2dd147a9dcb3bff3:0xb7fffadf230b9028!8m2!3d-8.1672743!4d114.3846535',
        embedMaps:'https://maps.google.com/maps?q=Mubarok+Residence+Bulusan&t=&z=13&ie=UTF8&iwloc=&output=embed',
        pictures:['facility.png', 'masterplan.jpg', 'gate1.jpg', 'rth1.jpg', 'mushola1.jpg', 'gate2.jpg', 'rth2.jpg', 'mushola2.jpg', 'rth3.jpg'],
        tipe:[{name:'Jeddah - 36', pictures:['Jeddah36.jpg']}, {name:'Riyadh Silver - 45', pictures:['RiyadhSilver45.jpg']}, {name:'Riyadh Gold - 45', pictures:['RiyadhGold45.jpg']}]
    },
    {name:'kertosari',  fullname:'Villa Kertosari Regency', propinsi:'Jawa Timur',   dati2:'Banyuwangi', kecamatan:'Banyuwangi', kelurahan:'Kertosari',   jalan:'Ikan Wijinongko',
        bgimg:'Edelweis45a.jpg',
        point:['Dekat Pusat Kota', 'Dekat Pusat Kuliner', 'Dekat Pusat Pendidikan', 'Dekat Pusat Perbelanjaan'],
        linkMaps:'https://www.google.com/maps/place/data=!3m1!4b1!4m5!3m4!1s0x2dd15ada390f4b61:0x725e67994e6dc58d!8m2!3d-8.2328826!4d114.3744907',
        embedMaps:'https://maps.google.com/maps?q=Villa+Kertosari&t=&z=13&ie=UTF8&iwloc=&output=embed',
        pictures:['facility.png','Dandelion36.jpg','Edelweis45.jpg'],
        tipe:[{name:'Dandelion - 36', pictures:['Dandelion36.jpg']}, {name:'Edelweis - 45', pictures:['Edelweis45.jpg']}]
    },
    {name:'kertosari2',  fullname:'Villa Kertosari 2', propinsi:'Jawa Timur',   dati2:'Banyuwangi', kecamatan:'Kertosari', kelurahan:'Tukangkayu',   jalan:'Ikan Tongkol',
        bgimg:'coming_soon.jpg',
        point:['Dekat Pusat Kota', 'Dekat Pusat Kuliner', 'Dekat Pusat Pendidikan', 'Dekat Pusat Perbelanjaan'],
        linkMaps:'https://maps.app.goo.gl/aL4koTSanBduzgrp7',
        embedMaps:'https://maps.google.com/maps?q=Ikan+Tongkol+Kertosari+Banyuwangi&t=&z=13&ie=UTF8&iwloc=&output=embed',
        pictures:['specification.jpg',]
    }];

function insertNumberToElements(name, text, href){
    document.getElementsByName(name).forEach(element => insertNumberToElement(element, text, href));
    
    function insertNumberToElement(element, text, href)
    {
        const split=text.split(' ');
        element.innerHTML += '0' + split[1];
        if (element.nodeName == "A" && href) element.href = href.replace(/-/g,'').replace(' ','');
    }
}

$(document).ready(function() {
    insertNumberToElements('number_WA',number_WA,'https://wa.me/'+number_WA.replace('+',''));
    insertNumberToElements('number_phone',number_phone,'tel:'+number_phone);
})
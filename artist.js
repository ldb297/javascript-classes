class Artist {
    constructor(name, age, genre, label) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.label = label;
        this.albums = [];
        this.songs = [];
        this.image = '';
        this.instagram = null;
    }

    addAlbum(album) {
        this.albums.push(album)
        console.log(`this is another ${album} for ${this.name}.`)
    }

    addSong(song) {
        this.songs.push(song)
        console.log(`this is another ${song} for ${this.name}.`)
    }

    addImage(imageLink) {
        this.image = imageLink
    }

    addIG(username) {
        this.instagram = username
    }
}

//instances of the Artist class
const drake = new Artist('Drake', '33', ['hip hop', 'r&b', 'pop'], 'cash money records');
const hozier = new Artist('Hozier', '25', 'rock', 'cash money records');
const carlCox = new Artist('Carl Cox', '47', 'house', 'cash money records');

//look up an artist
//find 2 albums
//find 2 songs
//find an image
//find their insta

const ringsOfSaturn = new Artist('Rings of Saturn', '9', 'Progressive Death Metal', 'Nuclear Blast')
ringsOfSaturn.addAlbum('Lugal Ki En')
ringsOfSaturn.addAlbum('Ulta Ulla')
ringsOfSaturn.addSong('Senseless Massacre')
ringsOfSaturn.addSong('Lalassu Xul')
ringsOfSaturn.addImage('https://f4.bcbits.com/img/a2347270823_10.jpg')
ringsOfSaturn.addIG('ringsofsaturnbandofficial')

console.log(ringsOfSaturn)
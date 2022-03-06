class Track {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

     describe(){
        return `${this,name} plays ${this.position}.`;
    }
}

class Cassette {
    constructor(name) {
        this.name = name;
        this.Tracks = [];
    }

 addTrack(Track) {
    if (Track instanceof Track) {
        this.Tracks.push(Track);
    } else {
        throw new Error(`You can only add an instance of Track. Argument is not a Track: ${Track}`);
    }
 }

 describe() {
    return `${this.name} has ${this.players.length} Tracks.`;
 } 
}

class Menu {
    constructor() {
        this.Cassettes = [];
        this.selectedCassette = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
           switch (selection) {
               case '1' :
                   this.createCassette();
                   break;
                case '2' :
                    this.viewCassette();
                    break;
                case '3':
                    this.deleteCassette();
                    break;
                case '4':
                    this.displayCassettes();
                    break;
                default:
                        selection = 0;
           }
           selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exist
        1) create new Cassette
        2) view Cassettes/Tracks
        3) delete Cassette
        4) display all Cassette
        `);
    }

    showCassetteMenuOptions(CassetteInfo){
        return prompt(`
        0) back
        1) create Track
        2) delete Track
        ------------------------
        ${CassetteInfo}
        `);
    }

    displayCassette() {
        let CassetteString ='';
        for (let i= 0; i < this.Cassettes.length; i++) {
            CassetteString += i + `) ` + this.Cassettes[i].name + '\n';
        }
        alert(CassetteString);
    }
    createCassette(){
        let name = prompt(' Enter name for a new Cassette:');
        this.Cassettes.push(new Cassette(name));
    }

    viewCassette() {
        let index = prompt('Enter the index of the Cassette you wish to view;');
        if (index > -1 && index < this.Cassettes.length) {
            this.selectedCassette = this.Cassettes[index];
            let description = 'Cassette name: ' + this.selectedCassette.name + '\n';

            for (let i = 0; i < this.selectedCassette.Tracks.length; i++) {
                description += i + ') ' + this.selectedCassette.Tracks[i].name 
                    + ' - ' + this.selectedCassette.Tracks[i].position + '\n';
            }

            let selection = this.showMainMenuOptions(description); 
            switch (selection) {
                case '1':
                    this.createTrack();
                    break;
                case '2':
                    this.deleteTrack();
            }
        }
    }

    deleteCassette(){
        let index = prompt('Enter the index of the Cassette you wish to delete:');
        if (index >-1 && index < this.Cassettes.lenght) {
            this.Cassettes.splice(index,1);
        }
     }
    createTrack() {
        let name = prompt('Enter name of a new Track:');
        let position = promt(' enter position for new Track:');
        this.selectedCassette.Tracks.push(new Track(name, position));
    }

    deleteTrack() {
        let index = prompt('Enter the index of the Track you wish to delete:');
        if (index > -1 && index < this.selectedCassette.Tracks.length) {
            this.selectedCassette.Tracks.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();






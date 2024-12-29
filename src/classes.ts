// class Coder {

//     private _name: string;
//     private readonly _age: number;
//     protected lang: string | undefined;

//     public get name(): string {
//         return this._name;
//     }
//     public set name(v: string) {
//         this._name = v + " tops";
//     }

//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
// }

// const dave = new Coder("Dave", 23);
// dave.name = "Roof";

// console.log(dave.name);


// class Dev extends Coder {
//     public computer: string;
//     constructor(computer: string, name: string, age: number) {
//         super(name, age);
//         this.computer = computer;
//     }
// }

///////////////////////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string;
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

///////////////////////////////////////////////////////////

class Peeps {
    private static count: number = 0;
    static getCount(): number {
        return Peeps.count;
    }
    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const john = new Peeps("John");
const rock = new Peeps("Rock");
const dude = new Peeps("John");

console.log(Peeps.getCount());
console.log(john);

/////////////////////////////////////////////////////

class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(v: string[]) {
        if (Array.isArray(v) && v.every(x => typeof x === "string")) {
            this.dataState = v;
            return;
        }
        else {
            throw new Error('Params not an array of strings');
        }
    }
}

let bands = new Bands();
bands.data = ["Haley", "Nick", "Bryan"];
console.log(bands.data);

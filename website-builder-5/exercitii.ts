interface Masina {
    greutate: Number
    kilometraj: Number
    start(): void
}

interface Conducere {
    merge(kilometri: number)
    

}

interface Technic {
    serie: String
}


class BMW implements Masina, Technic {
    greutate: Number;
    kilometraj: Number
    serie: String
    start() {
        
    }
}

class Dacia implements Masina, Conducere {
    greutate: Number
    kilometraj: Number
    serie: String
    constructor(){
        this.greutate = 0
        this.kilometraj = 0
    }
    merge(kilometri: Number) {
        this.kilometraj = +this.kilometraj + + kilometri
    }
    start() {
        
    }
}

class Mecanic {
    repara (masina: Masina) {
        masina.start()
    }
}

let o_dacie= new Dacia()
o_dacie.merge(30)
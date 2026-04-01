class Human{
    constructor(name){
        this.name=name;
        this.arms=2;
        this.legs=2;
    }
}


class Baby extends Human{
    constructor(name){
        super(name);
        this.cry=true;
    }

    cry(){
        return `Wa wa wa`
    }
}

const matin = new Baby("Matin");

console.log(matin.name)
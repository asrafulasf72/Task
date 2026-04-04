class Cat{
    meow(){
        let name='Biloi'
         console.log("mew mew mew")
    }
}

const mila = new Cat();

mila.meow()

class AngryCat extends Cat{
    meow(){
        console.log("Meeeeeeeeeeeeeew")

        this.name="Biiiiilowww"
        console.log(this.name)
    }

    his(){
        console.log("Hiiiiiiis")
    }
}

const elif = new AngryCat();

elif.meow()
elif.his() 
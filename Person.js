

class Person {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Occupation: ${this.occupation}`);
    }
}

const person1 = new Person("Surya", 23, "Male", "Devloper");
person1.displayInfo();
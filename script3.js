// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Regular method
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Arrow function as a member function
    getDetails = () => {
        return `Name: ${this.name}, Age: ${this.age}`;
    };
}


class Student extends Person {
    constructor(name, age, rollNo) {
        // Call the parent constructor
        super(name, age);

       
        this.rollNo = rollNo;

       
        if (this.rollNo <= 0) {
            throw new Error("Invalid roll number. Roll number must be greater than zero.");
        }
    }

    
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my roll number is ${this.rollNo}.`;
    }
}


try {
    const student1 = new Student("Spandan Deb", 20, 0);
    console.log(student1.greet());
} catch (error) {
    console.error(error.message); 
}


try {
    const student2 = new Student("Spandan Deb", 22, 5);
    
   
    console.log(student2.greet()); 
    console.log(student2.getDetails()); 
} catch (error) {
    console.error(error.message);
}
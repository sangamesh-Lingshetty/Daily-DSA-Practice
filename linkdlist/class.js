// in this we will learn the class and object how to use it in the javascript ES2015
// class is a blue print of the object
// this is the class instances method

class Student {
  constructor(firstName, lastName) {
    (this.firstName = firstName),
     (this.lastName = lastName),
     this.tarddies = 0;
  }

  fullName() {
    return `person full name is ${this.firstName} ${this.lastName}....`;
  }

  markLate(){
    this.tarddies +=1;
    return `${this.firstName} ${this.lastName} has been late ${this.tarddies} times...`
  }

}

const firstStudent = new Student("Sangamesh", "lingshetty");
const secondStudent = new Student("prabhu", "lingshetty"); //object
console.log(secondStudent.fullName());
console.log(firstStudent.markLate());


// class method is using the static keyword which is used for the object method
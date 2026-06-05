class Course {
 #maxStudents
 
  constructor(title, instructor, maxStudents) {
    
    this.title = title;
    this.instructor = instructor
    this.#maxStudents = maxStudents
    this.students = 0;
  }

  enrollStudent() {
    if (this.#maxStudents > this.students) {
      this.students ++;
      console.log("student added");
      
      return
    }
    console.log("you cant add more students for this course");
    
    return
  }


}

const javaScript = new Course("JavaScript Basics", "Dania", 30)
const python = new Course("Python Fundamentals", "Mohammad", 25);


console.log(javaScript.enrollStudent())
console.log(python.enrollStudent());

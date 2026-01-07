//your JS code here. If required.
const student = {
  name: "John",
  age:30,
  city:"New York",
};

Object.prototype.getKeys=function(){
	return Object.keys(this)
}
console.log(student.getKeys());
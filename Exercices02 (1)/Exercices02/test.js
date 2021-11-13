const user =  {
  firstname: "Michel", 
  lastname: "Tremblay",
  fullname: function() {
    return this.firstname + " " + this.lastname
  }
}

console.log(user.fullname())

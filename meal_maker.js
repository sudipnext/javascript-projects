const menu ={
  _courses ={
    appetizers: [],
    mains: [],
    desserts: [],
  },
    get appetizers(){
      return this._courses.appetizers;
  },
    get mains(){
      return this._courses.mains;
  },
    get desserts(){
      return this._courses.desserts;  
  },
    set appetizers(appetizers){
       return this._courses.appetizers; 
  },
    set mains(mains){
       return this._courses.mains; 
  },
    set desserts(desserts){
        return this._courses.desserts;
  },
  get courses(){
    return{
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  }
  addDishToCourse(courseName, dishName, dishPrice){
    const dish ={
    name: dishName,
    price: dishPrice,
  };
  this._courses[courseName].push(dish)

  }
  getRandomDishFromCourse(courseName){
    const dishes = this._course[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex];

    }
    generateRandomMeal(){
      
    }

 };








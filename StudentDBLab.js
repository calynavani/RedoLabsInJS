function StudentDB(){
    class Student{
    constructor(name, hometown, favFood, favColor){
        this.fullName = name;
        this.hometown = hometown;
        this.favFood = favFood;
        this.favColor = favColor;
    }
    }
    let students = [];
        students[0] = new Student("Calyn Greene", "Portage MI", "Potatoes","orange");
        students[1] = new Student("Andy Beer", "Berkley MI", "French Fries", "red");
        students[2] = new Student("Yosha Kunnummal", "Detroit MI", "Tacos", "yellow");
        students[3] = new Student ("Ramone Lynch", "Los Angeles CA", "Fried Chicken", "blue");
        
    
        let index = prompt("Which student would you like to learn about?  Index 0 through "+(students.length-1));
        
        if (index > students.length)
        {
            console.log("ERROR; no student exists at index "+index);
        }
        else{
    
        let specifics = prompt("What would you like to know? [1] Name, [2] Home Town, [3] Favorite Food, [4] Favorite Color");
        switch(specifics){
            case "1":
            {
                console.log(students[index].fullName);
                break;
            }
            case "2":
            {
                console.log(students[index].hometown);
                break;
            }
            case "3":
            {
                console.log(students[index].favFood);
                break;
            }
            case "4":
            {
                console.log(students[index].favColor);
                break;
            }
            default:{
                console.log("ERROR: That was an invalid input.")
                break;
            }
        }
        }
    }
  
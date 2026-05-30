class students{
    constructor(name,section){
        this.name=name;
        this.section=section;

    }

    Details(){
        console.log("name : ",this.name);
        console.log("section: ",this.section);
    }
    percentage(English,Tamil,Maths,Science,Social){
        let total = (English+Tamil+Maths+Science+Social)/500*100;
        console.log("Percentage : ",total);
        console.log("                 ");
    }
}



let student1 = new students("sandhiya","A");
student1.Details();
student1.percentage(78,87,98,67,99);
let student2 = new students("sandy","A");
student2.Details();
student2.percentage(80,70,80,90,100);
let student3 = new students("Raj","B");
student3.Details();
student3.percentage(67,98,99,56,76);
let student4 =new students("shiva","B");
student4.Details();
student4.percentage(87,98,77,66,98);
let students5= new students("Ramya","D");
students5.Details();
students5.percentage(45,76,98,75,65);

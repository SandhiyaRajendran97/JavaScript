// StudentDetailMarch => pascal notation // studentDetailMarch =>camel notation

class StudentDetail{
    name="shalini";
    Bloodgroup="o+";
    class="x";
    section="B";

    Detail(){
        console.log("student name is ",this.name,"and her blood groupis ",this.bloodgroup);
        console.log("studying",this.class,"class and her section is ",this.section);
    }

    //this=> current class reference
}

let shalini = new StudentDetail // object
shalini.Detail();
console.log(shalini.name);

let student =new StudentDetail
student.Detail();

class movie {
    constructor(name,actName,actrsName){
        this.name=name
        this.actName=actName
        this.actrsName=actrsName
    }
    title(){
        console.log("movie title is ", this.name);
    }

    artist(){
        console.log("actor and actress name is ", this.actName,",",this.actrsName);

    }
}

let movieOne= new movie ("karuppu","surya","thirisha"); // constructor call
movieOne.title();
movieOne.artist();

let movieTwo= new movie("leo","vijay","thirisha");
movieTwo.title();
movieTwo.artist();
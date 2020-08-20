// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class  Student 
{
    // studentName :string ;
  // public   studentLastName: string;
 //  public studentAge : number;
  // public studentGrade:string;
    constructor(public studentName: string, public   studentLastName: string ,public studentAge : number, public studentGrade:string)
  {

  }

}


let students = [{studentName:"courtney ",studentLastName:"serongwa",studentAge:20, studentGrade:"A"},
{studentName:"Dineo",studentLastName:" Phala",studentAge:23, studentGrade:"B"},
{studentName:"Naledzani",studentLastName:"Mutshidzi",studentAge:23, studentGrade:"C"},
{studentName:"Matome",studentLastName:"Kobe",studentAge:28, studentGrade:"B"},
{studentName:"Lucky",studentLastName:"Masharane",studentAge:26, studentGrade:"A"},
{studentName:"Michael",studentLastName:"Molele",studentAge:25, studentGrade:"D"},
{studentName:"Thabang",studentLastName:"Manaka",studentAge:24, studentGrade:"F"},
{studentName:"sakkie",studentLastName:"mashile",studentAge:27, studentGrade:"D"},
{studentName:"Busi",studentLastName:"Tholakele",studentAge:22, studentGrade:"C"},
{studentName:"Ubisi",studentLastName:"Xolisile",studentAge:21, studentGrade:"F"}
   
]


function oldestStundent(students) {


  let studentObjetctList:Student[] =  new Array() ;

  var small = [];
let studentObjetct ;


  for(var i = 0; i < students.length; i++)
  {
     //=  new Student();
   if(i==0)
   {  
   
     studentObjetct =new Student (students[i].studentName,students[i].studentLastName,students[i].studentAge , students[i].studentGrade)

   }


   if(studentObjetct.studentAge >= students[i].studentAge )
   {
    studentObjetct.studentAge =students[i].studentAge ;
    studentObjetct.studentGrade =students[i].studentGrade ;
    studentObjetct.studentLastName   =students[i].studentLastName ;
    studentObjetct.studentName =students[i].studentName ;

     studentObjetctList.push(new Student (students[i].studentName,students[i].studentLastName,students[i].studentAge , students[i].studentGrade));
   }
   
    

  }
// console.log( studentObjetct);
studentObjetctList.forEach(x=>   console.log("FirstName:"  + x.studentName + " LastName:"+ x.studentLastName )  );

console.log( studentObjetctList);
}




oldestStundent(students);
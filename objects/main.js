//WHAT IS NOT COMPLETED
// 1-THIS
//------------------------------------------------------//
//objects => a container consists of key:object
// key, value => could be any data type

//declaration
//(1) literal  object

// let car = {
//   type: "BMW",
//   color: "black",
//   counting: (counter) => {
//     counter++;
//     return counter;
//   },
//   speed() {
//     //ES6 EDITION
//     console.log(100);
//   },
// };

// console.log(car) // display all elements of object
// // for accessing elements itis gonna be with kays
//  console.log(car.type);
//  console.log(car.counting(3));
//  car.speed();
//  //or
//  console.log(car["type"]);
//------------------------------------------------------------
// console.log(Object.keys(car)) ;    //return all keys in an array
// console.log(Object.values(car));   // return all values in an array
// console.log(Object.entries(car));  // return both keys and value in a nested array
//--------------------------------------------------------------------------------------
//  //if we accessing elemeny out of our object

//  console.log(car.xx); // undefined

//  //howto check if a key is found or not
//  console.log("xx" in car) ; //false
// // or
//  console.log(car.hasOwnProperty('type')); //true
//-----------------------------------------------------
//  // chaging values

//  car.color= "pink";
//  console.log(car.color);

//  //adding new property
//  car.year=2000;
//  console.log(car);
//  car.owner= function() // adding a new function to an excisting object
//  {
//     console.log("sara is the owner");
//  }
//  console.log(car);
//------------------------------------------------------
//  //to delete an existing object

//  delete car.type;
//  console.log(car);
//===========================================================================
// //(2) newobject () by constructor

// const car = new Object();
// console.log(car) //{} empty object

// //adding
// car.type=  "BMW",
//     car.color=  "black",
//     car.counting=  (counter)=>
//     {
//         counter++;
//         return  counter;
//     }
// console.log(car);
//============================================================================
// //how to copy objects (shallow copy)

// let car2 = Object.create(car);
// // Object.create() is not commonly used for copying objects because it creates a new object that inherits from the prototype of the original, rather than making a true copy.
// console.log(car2);               //{} as it doesnot have itis own prop;
// console.log(car2.type);
// car2.plapla="ppppp";
// console.log(car2);

// let car3 = Object.assign(car); // best practice for copy SPREAD OPERATOR
// console.log(car3);
// car3.pp="oo"
// console.log(car3);
// console.log(car);                 // objects are assigned by refrence in js so any change affect the other
// // BUT if we add atarget it will not affect other object
// let car10 = Object.assign({},car);          //it will create a new object and copy values in it adding,removing will not affect original one
// car10.newkey = "new";
// console.log(car);

// car3.fifth = "that is new key";
// let car4 = {...car3}            //same as assign but faster and most common ++ no need for a target here
// console.log(car4);

// let newcar=car;                //refrence to samr object any change affect the other
// console.log(newcar);

// even assign with a target nested objects still refrenced also for spread operator same thing
// let one = { type: "BMW", details: { color: "black" } };
// let two = { ...one };
// two.details.color = "red";
// console.log(two.details.color)  //modified

//DEFINTIONS
//shallow copy only copies top level prop means that if object (ال احنا بنعمل منها كوبي) contaon nested objects they will not add to new object (ال بنعمل ليها كوبي)
// DEEP COPY => works with nested objects (SEARCH FOR IT ) ###
//------------------------------------------------------------------------------
// //MERGE BET MORE THAN I OBJECT

// //1-
// let carskter = {...car,...car3};    //no modifications
// console.log(carskter);

// //2-
// let cartany = Object.assign(car,car3);         //car here is a target but modification in cartany will affect car ,(car3 will not affected)
// console.log(cartany);

// //3
// let target = { type: "BMW", color: "black" };
// let newFeatures = { speed: "200 km/h", color: "red" };
// let updatedCar = Object.assign({}, target, newFeatures);   // by adding target (target object ) will not affected
// console.log(updatedCar); // { type: "BMW", color: "red", speed: "200 km/h" }   //color ubdated
// console.log(target);

//===============================================================================
// //  (3) CONSTRUCTOR FUNCTION

//  function User (name,email,age)
//  {
//     this.name=name;
//     this.email=email;
//     this.age=age;
//     this.display = function()
//     {
//         console.log(this.name);
//         console.log(this.email);
//         console.log(this.age);

//     }
//  }
//  const user1 = new User("sara","aaa.gmail",19);
//  const user2 = new User("ahmed","qqq.gmail",20);

//  console.log(user1);
//  console.log("user 1: ")
// user1.display();
//  console.log(user2);
//  console.log("user 2: ");
//  user2.display();

//=================================================================================
//How to loop on object

//1- for...in        #best for objects than normal for
//  for (i in car)
//  {
//     console.log(i,":",car[i]);             //display key then value
//  }

//2- for ... of     #after converting into array
// for (let i of Object.keys(car))          //display all keys without array []
// {console.log(i);}
// for (let i of Object.values(car))          //display all values without array []
// {console.log(i);}
// for (let i of Object.entries(car))          //display all values,keys  in one array
// {console.log(i);}

// if we want to display keys , values both without [] =>
// for ( let [key , val ] of Object.entries(car))
// {
//     console.log(key,val);
// }

//3- for .. each (SEARCH FOR IT )

//=====================================================================================
//1-
// const person ={
//  name:"sara",
//  age:19,
//  city:"zagazig" ,
// };
// person.job="Software Engineer";
// delete person.city;
// person.age = 20;
// person.greet = function(){console.log(this.name)};
// person.hobbies = ["reading","travelling","sleeping"];
// console.log(person);
// person.greet();

// console.log("------------------------------------")
// //2-
// for (i in person)
// {
//     console.log( i +" :" + person[i]);
// }
// console.log("------------------------------------")
// //3
// console.log("keys:")
// for (i of Object.keys(person))
// {
//     console.log(i);
// }
// console.log("values:")
// for(i of Object.values(person)) { console.log(i)};
// console.log("both:")
// for( i of Object.entries(person)) { console.log(i)};
// console.log("------------------------------------------------------:")
// //4
// let newperson = Object.assign({},person); //will not affect original object 
// newperson.nationality = "Egyption";
// console.log(newperson);
// let person2 = {...newperson};             //will not affect original object 
// person2.study="CS";
// console.log(person2);
// console.log("------------------------------------------------------:")
// //5
// let peaple =[
//     {name:"sara",age:19, job:"Software Engineer"},
//     {name:"ali",age:20 , job:"developer"},
//     {name:"mona",age:25, job:"Ai"}
// ]
// console.log(peaple[0].name ,peaple[0].age );
// //6
// console.log(peaple.some(i => i.age >30));
// //7
// console.log(peaple.every(i => i.job !=undefined));
// //8
// peaple.forEach(i=> console.log('name [', i.name,']', ',','job [ ', i.job,']' ));
// //9
// console.log(peaple.map(i=>i.age*2));
// //10
// let developer = peaple.filter(i=> i.job==='developer');
// console.log(developer);
// //11
// let ages = peaple.reduce((Sum,i) => Sum+i.age ,0);
// console.log(ages);
// //12
// // Use 'find()' to get the first person from the filtered 'Developer' list.
// const elemnt = developer.find(item => item.job==='developer');
// console.log(elemnt)
// console.log("--------------------------------------------------------------------")


// //1
// let x= 5;
// if (x%2===0)
// {
//     console.log("even");
// }
// else 
// console.log("odd");
// //2
// let grade = 88;
// if (grade<0 || grade>100)
//     console.log("Inva;lid Grade")
// else if ( grade>=90 && grade <=100)
//     console.log("A");
// else if (grade >=80)
//     console.log("B");
// else if (grade >=70)
//     console.log("C");
// else if (grade >=60)
//     console.log("D");
// else 
// console.log("F");

// //3
//  let day = prompt("Enter no od day from 1 to 7").trim();
// switch(day)
// {
//     case "1":
//         console.log("Saterday");
//         break;
//     case "2":
//         console.log("sunday");
//         break;
//     case "3":
//         console.log("Monday"); 
//         break;
//     case "4":
//         console.log("Tuesday");
//         break;
//     case "5":
//         console.log("Wednsday");  
//         break;  
//     case "6":
//         console.log("thuesday");
//         break
//     case "7":
//         console.log("Friday");   
//         break;   
//     default:
//         console.log("Invalid day")                 
// }

// // //4
// let color = prompt("Enter color from these options => Red || Yellow || Green ").trim()
// let options= color.toLowerCase();
// switch(options)
// {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Get Ready");
//         break;
//     case "green":
//         console.log("Go");     
//      default:
//     console.log("Invalid color. Please enter Red, Yellow, or Green.");       
// }
// //5
// for ( let i=0;i<=10;i++)
//     console.log(i);
// //6
// let sum=0;
// for(let k=0;k<=10;k++)
//   {
//     sum+=k;
//   }
//   console.log(sum)
// //7
// let fact=1;
// let num =5;
// while(num>0)
// {
//     fact*=num;
//     num--
// }
// console.log(fact)

// console.log("---------------------------------------------------------------")
// //1
// function sum ( x ,y)
// {
//     return x+y;
// }
// console.log(sum(5,5))
// //2
// let num =0;
// function declarative()
// {
    //     console.log("clicked  " + num +"  times")
    //     num++;
    // }
    
    // let expression = function()
    // {
        //     let messege = " expression function is clicked";
        //     console.log(messege);
// }

//1-
// 1: Variables Practice
let name = "Sara";
const age = 19;
var isStudent = true;
console.log("name: "+ name + " age: " +age + " student: " + isStudent)


// 2: Data Types
let person = {
  name: "Sara",
  age: 19,
  country: "Egypt"
};

let hobbies = ["Reading", "Coding", "Traveling"];
console.log(hobbies[1]);

// 3: Operators
let sum = 5 + 10;
console.log(sum);

let remainder = 15 % 4;
console.log(remainder);

let product = 6 * 7;
console.log(product);

console.log("10" == 10);
console.log("10" === 10);


if (isStudent && age > 18) {
  console.log("The person is a student and older than 18.");
}

if (isStudent || age <= 18) {
  console.log("The person is a student or not older than 18.");
}
//-------------------------------------------------------------
// //EXTRA INFO
//  //if we declare a key contain spaces we have to add ' '
//   let person={
//    'person name ': "sara",
//    'person age ':19,
//   }
// //for accessing
//  //console.log(person.person age); error cannot be accessed by . insted by []
//  console.log(person['person age ']);
//  // "NOTE" [just donot declare a key with spaces it is not coomon]

//---------------------------------------------------------------

// class and object
// definning the objects
// const student ={
//     fullname : "sudhanshu",
//     marks :96,
//     printmarks: function() {
//         console.log("hello amc" ,  this.marks);
//         // this.marks is use to accesss student proprty marks 
//     },
// }  


//  class and object tutorial

// class toyotacar {
//     constructor(brand, mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage =mileage;
//     }
//     start() {
//         console.log("start a car");
//     }
//     end() {
//         console.log("end the functn");
//     }
// }

// let fortuner = new toyatacar("nexon", 100);
// console.log(fortuner);
// let lexux = new toyotacar("lexus",45);
// console.log(lexux);

const url= "https://movie-database-alternative.p.rapidapi.com/?";


const getfacts = async () => {
    console.log("getting data.............");
    let response = await fetch(url);
    console.log(response);
    let data= await response.json();
    console.log(data);
}

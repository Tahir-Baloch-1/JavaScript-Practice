let weather = prompt("Choose Any Weather Sunny, Cold Rainy");


if (weather === "Sunny"){
    alert("bohat dhoop hai nahi ja bahir");

}
else if(weather === "Cold"){
    alert("Bohat Thand hai agar bahir jana hai to suiter pehn ker ja");
}
else if(weather === "Rainy"){
     alert("Barish ho rahi hai chata le ker ja");
}
else{
    alert("something else..");
}


// ATM Simulator – Mini Project

let balance = 1000;

const correctpin = "12345";



let userpin = prompt("Enter Your Pin");


if (userpin === correctpin){
    alert("Pin is correct");
}

else if(userpin !== correctpin){
    alert("Your ATM Card is Block Go Back..");
}
else{
    alert("Incorrect PIN!");
}

let choice = prompt(
  "Welcome to JS ATM 💳\n\n" +
  "1️⃣ Check_Balance\n" +
  "2️⃣ Withdraw\n" +
  "3️⃣ Deposit\n" +
  "4️⃣ Exit\n\n" +
  "Enter your choice (1-4):"
);


if (choice === "1"){
    alert("Your Balance is: $" + balance);
}
else if(choice === "2"){
    alert("Withdrawal successful! New balance: $" + balance);
}
else if(choice === "3"){
    alert("Deposit successful! New balance: $" + balance);
}
else if(choice === "4"){
    alert("Thank you for using the ATM!")
}
else{
    alert("Invalid option!");
}



//  Check Even or Odd

let userinput = prompt("Enter Any Number..");

if (userinput % 2 == 0){
    alert("the Number is Even");
}
else{
    alert("The Number is Odd");
}


// Grade Calculator

let Usergrade = prompt("Enter Your Percentage of Your Paper");

if(Usergrade >= 90){
    alert("Your Grade is A+");
}
else if(Usergrade >= 80){
     alert("Your Grade is A");
}
else if(Usergrade >= 70){
     alert("Your Grade is B");
}
else if(Usergrade >= 60){
     alert("Your Grade is C");
}
else if(Usergrade >= 50){
     alert("Your Grade is D");
}
else if(Usergrade <= 50){
     alert("Your Are Fail Bro..");
}


//  Login System


// username: admin, password: 12345
// If both correct → print success message
// else → error message


let admin = "admin123@gmail.com";
let password = "12345";

let useremail = prompt("Enter Your Email..");
let userpassword = prompt("Enter You Password..");

if(useremail === admin && userpassword === password){
    alert("Account Is Login SuccessFully..");
}
else{
    alert("Refresh Screen And Try Again..");
}
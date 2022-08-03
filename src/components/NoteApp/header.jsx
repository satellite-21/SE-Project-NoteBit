alert("If you have not registered with us, Kindly email choudhary.21@iitj.ac.in or arora.8@iitj.ac.in for the unique username and password.")
var name = prompt("Welcome to NoteBit, Please enter your username");
var password = prompt("Please enter your password");

// The above mentioned code acts as the authentication system for the app.

const loginDetails = [{
    Username: 'Piyush',
    Password: 'B20CS086'
},
{
    Username: 'Kartik',
    Password: 'B20CS025'
}]

// stored usernames and passwords can be seen above.

function validateDetails(user,pass){
    var boo = false;
    if (user.length === 0){
        return boo;
    }
    if (pass.length === 0){
        return boo;
    }

    // if length of username and password is 0, then the loop continues

    for(var i=0; i<loginDetails.length; i++){
        if (loginDetails[i].Username === user){
            if(loginDetails[i].Password === pass){
                boo = true;
                return boo;
            }
        }
    }
    return boo;

    // if username and password are found in the database, then the loop continues.
}

while(!validateDetails(name,password)){
    alert("Invalid username or password");
    name = prompt("Please enter your correct username");
    password = prompt("Please enter your password");
}

// the loop that keeps on asking for the username and password if anyone of them is not working.

function Header(){
    return <div><header><h1>NoteBit</h1><h1>{name}'s Personal Assisstant</h1></header></div>;
};

export default Header;
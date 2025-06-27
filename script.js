// document.getElementById("text-btn").addEventListener("click", () =>{
    // first alert to ask if the user is a new user or existing user
    const yesButton = document.getElementById("btn-yes");
    const noButton = document.getElementById("btn-no")
    const getStarted = document.querySelector("button");
    const dialogBox = document.querySelector("dialog");
    getStarted.addEventListener("click", ()=>{
            dialogBox.showModal()
    });
    yesButton.addEventListener("click",()=>{
        window.location.href = "signup.html";
    });
    noButton.addEventListener("click", ()=>{
        window.location.href = "login.html";
    });
//     if(dialogBox){
//      // If 'Yes', direct to signUp page
//      window.location.href = "signup.html";
//     } else{
//         const hasLoggedInBefore = localStorage.getItem("hasLoggedIn");
//         if(hasLoggedInBefore){
//             // if logged in Before, let's ask if user wants to continue or start over
//             const choiceOfUsers =  confirm("Do you want to continue from where you left off? Click 'OK' to continue or 'Cancel' to start over.");
//             if(choiceOfUsers){
//                 // if user wants to continue, let's direct them to the last page they visited
//                 const lastPage = localStorage.getItem("lastPage")||"Todo.html";
//                 window.location.href ="lastPage";
//             } else{
//                 // if he/she wants to start all Over, let's clear the data
//                 localStorage.clear();
//                 alert("Come on, we are starting all over!")
//                 window.location.href ="logIn.html"
//             }
//         }
//     }
   

// });
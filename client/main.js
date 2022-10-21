const complimentBtn = document.getElementById("complimentButton")
const goalsContainer = document.getElementById("goals-container")
//add button id for get fortune
const fortuneBtn = document.getElementById("fortuneButton");
//add jsLink for form
const goalForm= document.querySelector("form");
baseURL="http://localhost:4000/api";
const updateUser = document.getElementById("updateUser")

const getCompliment = (evt) => {
    evt.preventDefault;
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

//write code for getting a fortune
const getFortune = (evt) => {
    evt.preventDefault;

    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);// testing, will add different functionality if time permits
    });//end of axios.then inline block
};

const addGoal = (evt ) => {
    evt.preventDefault();
    let goal = document.querySelector("#goal");
    let date = document.querySelector("#date");
    //console.log(goal.value+" " +date.value)
    let bodyObj = {
        goal: goal.value,
        date: date.value
    }
    //console.log(bodyObj)
    
     axios.post("http://localhost:4000/api/goal/", bodyObj)
     .then(res => {
         //console.log(res.data)//test of code
        goalsContainer.innerHTML=""//clear Children
        for (let i =0; i< res.data.length; i++)
        {
            console.log(res.data[i])
            createGoal(res.data[i])
        }
         
     })//end of then block
}
function createGoal(goalObj){
    const goalCard=document.createElement('div')
    goalCard.innerHTML = `<p class = "goal  ">goal   ${goalObj.goal}</p><br>
    
    <p class = "date">date  ${goalObj.date}</p>
    <p class = "id">goalNumber ${goalObj.goalNum}</p>
    <button onclick = "completeGoal(${goalObj.goalNum})">Complete</button>
    </div>`
    
    goalsContainer.appendChild(goalCard);

}

function completeGoal( id ){
    console.log(`${baseURL}/goal/${id}`)

    axios.delete(`${baseURL}/goal/${id}`)     
    .then(res => {
        //console.log(res.data)//test of code
       goalsContainer.innerHTML=""//clear Children
       for (let i =0; i< res.data.length; i++)
       {
           console.log(res.data[i])
           createGoal(res.data[i])
       }
    })

}  
function updateUserName (evt){

    const userName=document.querySelector("#user")
    // console.log(userName.value)
    // console.log(`${baseURL}/${userName.value}`)
    evt.preventDefault()
    axios.put(`${baseURL}/${userName.value}`).
    then( res => {
        const person=document.createElement('div')
        person.innerHTML = `<p class = "goal  ">goal   ${res.data}</p><br>`
        body.appendChild(person)
    

        console.log(res.data)
        document.appendChild
    })

}



complimentBtn.addEventListener('click', getCompliment)
//add event listener for fortuneBtn
fortuneBtn.addEventListener('click',getFortune)
//add event listener for goal
goalForm.addEventListener('submit',addGoal)
updateUser.addEventListener('submit',updateUserName)
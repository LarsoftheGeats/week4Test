const complimentBtn = document.getElementById("complimentButton")

//add button id for get fortune
const fortuneBtn = document.getElementById("fortuneButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

//write code for getting a fortune
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);// testing, will add different functionality if time permits
    });//end of axios.then inline block
}

complimentBtn.addEventListener('click', getCompliment)
//add event listener for fortuneBtn
fortuneBtn.addEventListener('click',getFortune)
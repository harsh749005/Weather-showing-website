
let Submit = document.querySelector('.submit');
let ListOfCity = document.querySelector('.city');
let MM = document.querySelector('.mm');
let Temp1 = document.querySelector('.temp');//3
let Name = document.querySelector('.name'); //1
let Time = document.querySelector('.time');//2
let Cloud = document.querySelector(".cloud");
let Humidity = document.querySelector(".humidity");
let Wind = document.querySelector(".wind");
let Icon = document.getElementById("icon");
let Condition = document.getElementById("condition");
/*HERE EVENT IS IMPLEMENTED WHEN WHEN USER CLICK ON 
NAMES PLACES IN <UL> LIST SO THIS SHOULD HAPPEN  */
document.querySelector(".cities").addEventListener('click', (e, Cloud) => {
    let cost = document.getElementById("city");
    cost = e.target.innerHTML;
    console.log(cost);

    city = cost;
    getweather(city); // FUNCTION CALLED
});


function GETAmPm(ampm,x) {

    if (x.getHours() >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    return (ampm);
}
function GET_Minutes_with_leading_0(lead_min, x) {
    let minutes = x.getMinutes().toString();
    if (minutes.length == 1) {
        lead_min = "0" + minutes;
    } else {
        lead_min = minutes;
    }
    return (lead_min);
}
function GET_Hours_with_leading_0(lead_hours, x) {
    let hours = x.getHours().toString();
    if (hours.length == 1) {
        lead_hours = "0" + hours;
    } else {
        lead_hours = hours % 12;
    }
    return (lead_hours);
}

function GETweekofday(x) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let b = x.getDay();
    // WeekOfday = weekday[b];  // take reference of month
    return weekday[b];
}
function GETMonth(mon, x) {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let b = x.getMonth() ;
    mon = months[b];
    return mon;
}

const getweather = (city) => {

    fetch('http://api.weatherapi.com/v1/current.json?key=46dc5531a2b14aa0baa153253221012&q=' + city)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            
            Temp1.innerHTML = response.current.temp_c + "&#176";
            Name.innerHTML = response.location.name;
            Cloud.innerHTML = response.current.cloud + "%";
            Humidity.innerHTML = response.current.humidity + "%";
            Wind.innerHTML = response.current.wind_kph + "km/hr";


            let Date1 = new Date(response.location.localtime);
            let x = Date1;
            let Hours = Date1
            let ampm = "";
            let lead_min = "";
            let lead_hours = "";
            const code = response.current.condition.code;
            
            let mon = null;
            console.log(x.getMinutes().toString().length);
            Time.innerHTML = GET_Hours_with_leading_0(lead_hours, x) + ":" + GET_Minutes_with_leading_0(lead_min, x) + " " + GETAmPm(ampm, Hours);
            MM.innerHTML = GETweekofday(x) + " " + GETMonth(mon, x) + "-" + x.getDate();
            console.log(code);
            let app = document.getElementById("apb");
            let btn = document.getElementById("submit");
            
           
                if (response.current.is_day) {
                    if (code == 1000) {
                        console.log("its day");
                        Icon.src = "./weather/64x64/icons/day/113.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage = "url(./images/day/sunset.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }
                    else if (
                        code == 1003 ||
                        code == 1006 ||
                        code == 1009 ||
                        code == 1030 ||
                        code == 1069 ||
                        code == 1087 ||
                        code == 1135 ||
                        code == 1273 ||
                        code == 1276 ||
                        code == 1279 ||
                        code == 1282 
                        ) {
                        console.log("byee");
                        Icon.src = "./weather/64x64/icons/day/116.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage = "url(./images/day/partlycloud.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }
                    else if (
                        code == 1066 ||
                        code == 1069 ||
                        code == 1072 ||
                        code == 1150 ||
                        code == 1153 ||
                        code == 1180 ||
                        code == 1183 ||
                        code == 1186 ||
                        code == 1189 ||
                        code == 1192 ||
                        code == 1195 ||
                        code == 1195 ||
                        code == 1207 ||
                        code == 1240 ||
                        code == 1243 ||
                        code == 1246 ||
                        code == 1252 
                        
                    ) {
                        console.log("rainy"); 
                        Icon.src = "./weather/64x64/icons/day/308.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage = "url(./images/day/rain.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }
                    else if (
                        code == 1063
                    ) {
                        Icon.src = "./weather/64x64/icons/day/119.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage = "url(./images/day/partlyrain2.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }
                    else {
                        Icon.src = "./weather/64x64/icons/day/338.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage ="url(./images/day/snow.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }

                } else {
                    if (code == 1000) {
                        console.log("its night");
                        Icon.src = "./weather/64x64/icons/night/113.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage = "url(./images/night/night.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }
                    else if (
                        code == 1003 ||
                        code == 1006 ||
                        code == 1009 ||
                        code == 1030 ||
                        code == 1069 ||
                        code == 1087 ||
                        code == 1135 ||
                        code == 1273 ||
                        code == 1276 ||
                        code == 1279 ||
                        code == 1282 
                        ) {
                        console.log("night with clouds");
                        Icon.src = "./weather/64x64/icons/night/116.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage = "url(./images/night/NIGHT1.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }
                    else if (
                        code == 1065 ||
                        code == 1069 ||
                        code == 1072 ||
                        code == 1150 ||
                        code == 1153 ||
                        code == 1180 ||
                        code == 1183 ||
                        code == 1186 ||
                        code == 1189 ||
                        code == 1192 ||
                        code == 1195 ||
                        code == 1195 ||
                        code == 1207 ||
                        code == 1240 ||
                        code == 1243 ||
                        code == 1246 ||
                        code == 1252 
                        
                    ) {
                        console.log("rainy night");
                        Icon.src = "./weather/64x64/icons/night/176.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage = "url(./images/night/NIGHTRAIN.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }
                    else if (
                        code == 1063
                    ) {
                        Icon.src = "./weather/64x64/icons/night/119.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage = "url(./images/night/NIGHT1.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }
                    else {
                        Icon.src = "./weather/64x64/icons/night/338.png";
                        Condition.innerHTML = response.current.condition.text;
                        app.style.backgroundImage ="url(./images/night/nightsnow2.jpg)";
                        btn.style.backgroundColor = "transparent";
                        app.style.transition = "3500ms";
                    }
                    
                }    
        }
        )
        .catch(err => console.error(err));
}

Submit.addEventListener('click', (e) => {
    e.preventDefault()
    getweather(city.value);
})
getweather("London")
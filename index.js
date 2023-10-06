function getData()
{
    const city=search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '111906af0dmsh03a784acacbd490p1fe5a8jsn78ace35b64c2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
        .then(response => response.json())
        .then(res=> {
            console.log(res);
            temp.innerHTML = res.temp;
            ws.innerHTML= res.wind_speed;
            Hmdty.innerHTML= res.humidity;
        })
            
        .catch(err => console.error(err));    
}
export function date () {
    const timeStamp = Date.now(),
    dateObject = new Date(timeStamp),
    date = dateObject.getDate(),
    month = dateObject.getMonth() + 1,
    year = dateObject.getFullYear();

    return `${year}/${month}/${date}`
}


export function currentTime(){
     const timeStamp = Date.now(),
     dateObject = new Date(timeStamp),
     hours = 12 - (12 - dateObject.getHours()),
     minutes = dateObject.getMinutes();
    
    return `${hours}:${minutes}`;
}

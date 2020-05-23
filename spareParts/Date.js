export function date () {
    let timeStamp = Date.now(),
    dateObject = new Date(timeStamp),
    date = dateObject.getDate(),
    month = dateObject.getMonth() + 1,
    year = dateObject.getFullYear()

    return `${year}/${month}/${date}`
}
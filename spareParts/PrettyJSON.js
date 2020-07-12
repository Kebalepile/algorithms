

// stringifys a json object with specified space.
function PrettyJSON(object, space = 5) {
    return JSON.stringify(object, null, space)
}
export default PrettyJSON
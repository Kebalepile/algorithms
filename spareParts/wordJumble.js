// user enters jumbled word return possible matchs from a dictionary
// which contains key -- > value pairs
// 1 create 4 wordSplit words from user input
// 2 search for a match of the words resulting from the wordSplit function in the map

function makeWord (word) {
  let newWords = [];
  let percentage = Number(word.length / 100 * 25).toFixed(0);
  let count = 4;
  let start = 0;
  let end = percentage;
 
  for (let i = 0; i < count; i ++) {
       let newWord = word.substr(start, end);
      
       if (newWord !== '') {
          newWords.push(newWord);
          start = end;
          end++;
       }
  }
  return (newWords);
}
function jumbledWord(word, map) {
  let newWords = makeWord(word);
  let possibleMatchs = [];
  let terms = map.reduce((acc, obj) => {
       acc.push(...Object.keys(obj));
       return acc;
  },[]);
  let getWord = key => {
    let obj = map.reduce((acc, obj) => {
      if(obj.hasOwnProperty(key)) {
        acc = obj
      }
      return acc;
    },{});
    if (!possibleMatchs.includes(obj)) {
      return(obj);
    }
    
  }
  console.log(newWords)
  for (let wrd of newWords) {
  
      for(let i = 0; i < terms.length; i++) {
            if (terms[i].includes(wrd)) {
            possibleMatchs.push(getWord(terms[i]));
        }
      }
  }




  console.log("possible matchs");
  return [...possibleMatchs.filter(val => val !== undefined)]
}
let dict = [
   {' sports': "gym activity"},
   {'pork ': 'bacon'},
   {'milk ': 'white substance'},
   {'nork ': 'aka north'},
   {' keen': 'interest'},
   {' meek': 'mil'},
   {' tour': 'mil'},
   {' nike': 'mil'},
   {"niche": "sdsf"}
];

console.log(jumbledWord("tots", dict));


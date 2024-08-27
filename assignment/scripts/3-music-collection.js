console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
// declared empty array named myCollection 
let myCollection = [];



// Create a function named addToCollection
function addToCollection(collection, title, artist, yearPublished) {

  //create object with addCollection function properties 
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collection.push(album);

//return the newly created object
  return album;

  
}


// use and test addCollection function  
console.log(addToCollection(myCollection,"Pet Sounds", "Beach Boys", 1966));
console.log(addToCollection(myCollection, "Good Kid", "Kendrick Lamar", 2012));
console.log(addToCollection(myCollection,"overly Dedicated", "Kendrick Lamar", 2010));
console.log(addToCollection(myCollection, "Purple Rain", "Prince", 1984));
console.log(addToCollection(myCollection, "Mr Morale", "Kendrick Lamar", 2022));
console.log(addToCollection(myCollection, "The Steppers", "Kendrick Lamar", 2022));



function showCollection(collection){
  for (const album of collection){
  console.log(`${album.title}by ${album.artist}, published in ${album.yearPublished}`);


}

}


// test the showCollection function 
showCollection(myCollection);


  function findByArtist(collection, artist){
  let resultFound = [];
  for(let i = 0; i<collection.length; i++){
    const album = collection[i]
    if(album.artist===artist){
      resultFound.push(album);
    }
  
  }

// return the array with matching result
  return resultFound
}

// test to findByArtist function
console.log("Albums by kendrick Lamar")
console.log(findByArtist(myCollection, "Kendrick Lamar"));

console.log("Albums by prince")
console.log(findByArtist(myCollection, "Prince"));


console.log("Albums by Beach Boys")
console.log(findByArtist(myCollection, "Beach Boys"));

console.log("Albums that don't exist ")
console.log(findByArtist(myCollection, "Drake"));








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}

//your code here

let bandNames = ['The Beatles', 'Pink Floyd', 'Led Zeppelin', 'The Rolling Stones', 'Aerosmith'];

function sortBandNames(bandNames) {
  // Remove articles ('a', 'an', 'the') from band names
  let sortedBandNames = bandNames.map(name => name.replace(/^(a|an|the)\s+/i, ''));

  // Sort the band names in lexicographic order
  sortedBandNames.sort((a, b) => a.localeCompare(b));

  return sortedBandNames;
}

// Get the ul element with id 'band'
let ulElement = document.getElementById('band');

// Sort and display the band names inside the ul element
let sortedBandNames = sortBandNames(bandNames);
sortedBandNames.forEach(name => {
  let liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

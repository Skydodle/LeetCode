/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const noteArray = ransomNote.split('');
  const magArray = magazine.split('');
  
  const noteIsPossible = noteArray.every((word) => {

    const indexOfWord = magArray.indexOf(word);

    if (indexOfWord > -1) {
      magArray.splice(indexOfWord, 1);
      return true;
    }
  });
  return noteIsPossible;
};
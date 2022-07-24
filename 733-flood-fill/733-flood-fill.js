/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  // Get the input which needs to be replaced
  const current = image[sr][sc];
  
  // If the newColor is same as the existing
  // Then return the original image
  if (current === color) {
    return image;
  }
  
  // otherwise call the fill function which will fill in the existing image
  fill(image, sr, sc, color, current)
  
  // return image once it is filled
  return image;
};

const fill = (image, sr, sc, color, current) => {
  // If row is less than 0
  if (sr < 0) {
    return;
  }
  // If column is less than 0
  if (sc < 0) {
    return;
  }
  
  // If row is greater than image length
  if (sr > image.length - 1) {
    return;
  }
  // If column is greater than image length
  if (sc > image[sr].length -1) {
    return;
  }
  
  // If the current pixel is not which needs to be replaced
  if (image[sr][sc] !== current) {
    return;
  }
  
  // Update the new color
  image[sr][sc] = color;
  
  // Fill in all 4 directions
  // Fill prev row
  fill(image, sr - 1, sc, color, current);
  
  // Fill next row
  fill(image, sr + 1, sc, color, current);
  
  // Fill prev col
  fill(image, sr, sc - 1, color, current);
  
  // Fill new col
  fill(image, sr, sc + 1, color, current);
}
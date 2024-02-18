function convertToArrays(originalArray, structureArray) {
    const result = [];
    let startIndex = 0;
  
    structureArray.forEach(numItems => {
      const pageItems = originalArray.slice(startIndex, startIndex + numItems);
      result.push(pageItems);
      startIndex += numItems;
    });
  
    return result;
  }

export default convertToArrays;
	function secondHighest(arr) {
			    if (arr.length === 0 || arr.length === 1) {
        return -Infinity;
    }
			
    // Check if all items are same
    if (arr.every(item => item === arr[0])) {
        return -Infinity;
    }     
    
    // Find highest
    const highest = arr.reduce((high, num) => num > high ? num : high, arr[0]);
    
    // Filter out the highest
    const secondhighArr = arr.filter(item => item !== highest);
    
    // Check if array is empty after filtering
    if (secondhighArr.length === 0) {
        return -Infinity;
    }
    
    // Find second highes 
    const secondhighest = secondhighArr.reduce((high, num) => num > high ? num : high, secondhighArr[0]);
    
    return secondhighest;
		}}
secondHighest([1,1,1,1,1,1])



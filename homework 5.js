function allPosibleSubsets(array,n,x = -1){
    if(array.length <= n){
        return [array]
    }
    x++
    let result = []
    let result1 = []
    for(let i = 0;i<n-1;i++){
        result1.push(array[i])
    }
    for(let i = n-1;i < array.length;i++){
        result.push(result1.concat(array[i]))
    }
     result = result.concat(allPosibleSubsets(array.slice(0,1).concat(array.slice(2)),n,x))
    
        if(x === 0 && n !== 1){
        while(array.length > n){
            array.splice(0,1)
            result = result.concat(allPosibleSubsets(array,n,x))
        }
    }
    return result
}
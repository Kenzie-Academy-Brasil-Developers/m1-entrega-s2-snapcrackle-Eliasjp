function snapCrackle (maxValue){
    let snapCrackleString = []
    for (i = 1; i <= maxValue; i++){
        if (i % 2 == 0){
            snapCrackleString.push(`${i}`)
        }else if (i % 2 != 0 && i % 5 != 0){
            snapCrackleString.push(`Crackle`)
        }else if (i % 2 != 0 && i % 5 == 0){
            snapCrackleString.push(`SnapCrackle`)
        }
    }
    return snapCrackleString
}

console.log(snapCrackle(27))
console.log(snapCrackle(200))
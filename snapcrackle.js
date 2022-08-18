function snapCrackle (maxValue){
    let snapCrackleString = ""
    for (i = 1; i <= maxValue; i++){
        if (i % 2 == 0 && i % 5 != 0){
            snapCrackleString += `${i}`
        }else if (i % 2 != 0 && i % 5 != 0){
            snapCrackleString += `Snap`
        }else if (i % 2 != 0 && i % 5 == 0){
            snapCrackleString += `SnapCrackle`
        }else if (i % 2 == 0 && i % 5 == 0){
            snapCrackleString += `Crackle`
        }
        
        if (i != maxValue){
            snapCrackleString += ", "
        }
    }
    let snapCrackleResultado = snapCrackleString
    return snapCrackleResultado
}

console.log(snapCrackle(200))
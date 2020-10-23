function randomSetNumbers (num) {
    let array = createNumArray(16);
    //shuffles the array
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    
    //slice the array to the num length
    return array.slice(0, num);
    
}

function createNumArray(length) {
    let array = [];
    for (let i=1;i<=length; i++) {
        array.push(i)
    }
    return array
}

module.exports = {
    randomSetNumbers: randomSetNumbers
}
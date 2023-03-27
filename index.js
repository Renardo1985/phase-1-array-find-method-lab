function superbowlWin(array)
{    
    function isWin (arr){ return arr.result === "W"}
    let result =  array.find(isWin)
    if (result != undefined){ return result.year}    
}
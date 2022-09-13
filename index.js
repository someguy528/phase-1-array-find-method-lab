// code your solution here
//function superbowlWin(array){
//     for (let obj of array){
// if(obj.result === "W"){
//     return obj.year
// }
//     }
// }

function superbowlWin(array){
    const found = array.find(obj => obj.result ==="W");
    return !!found ? found.year:undefined;
}
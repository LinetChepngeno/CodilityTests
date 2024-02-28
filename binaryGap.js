//A function that given the + interger return the longest binary
//a function that returns 0 if N doesn't contain any binary gap

//Declare a function
function solution(N) {
    const binaryStr = N.toString(2)
    
    let longestGap = 0;
    let currentGap = 0;
    let counting = 0;

    for (let x of binaryStr) {
        if (x==='1'){
            if (counting) {
                longestGap = Math.max(longestGap, currentGap);
            } else {
                counting = true;
            }

           currentGap = 0; 
        } else {
            if(counting) {
                currentGap += 1;
            }
        }
        //console.log(x);
    }
    return longestGap;
}
//Calling function
solution(9);
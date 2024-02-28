// You can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Get the length of the array
    const N = A.length;
    // If the array is empty, return as it is
    if (N === 0) return A;
    // Handle cases where K is greater than the array length
    K = K % N; 
    
    // Create a new array to store the rotated elements
    const rotatedArray = new Array(N);
    
    // Copy elements from the original array to the rotated array
    for (let i = 0; i < N; i++) {
        // Calculate the rotated index for the current element
        const rotatedIndex = (i + K) % N; 
        // Assign the value from the original array to the rotated array
        rotatedArray[rotatedIndex] = A[i]; 
    }
    
    // Return the rotated array
    return rotatedArray;
}
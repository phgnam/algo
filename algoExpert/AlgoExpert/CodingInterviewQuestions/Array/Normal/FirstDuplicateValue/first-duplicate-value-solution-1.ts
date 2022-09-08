//  O(N · log(N)) time | O(N) space
export function firstDuplicateValue(array: number[]): number {
  // Initialize index of first
  // repeating element
  let min = -1;

  // Creates an empty hashset
  let set = new Set();

  // Traverse the input array from right to left
  for(let i = array.length - 1; i >= 0; i--)
  {
       
      // If element is already in
      // hash set, update min
      if (set.has(array[i]))
          min = i;
           
      // Else add element to hash set
      else 
          set.add(array[i]);
  }

  // Print the result
  if (min != -1)
    return array[min];
  else
    return Infinity;
}
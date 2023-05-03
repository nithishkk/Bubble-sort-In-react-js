import React, { useState } from "react";

function BubbleSort() {
  const [array, setArray] = useState([234, 43, 55, 63, 5, 6, 235, 547]);

  function bblSort() {
    const arr = [...array];
    for (var i = 0; i < arr.length; i++) {
      // Last i elements are already in place
      for (var j = 0; j < arr.length - i - 1; j++) {
        // Checking if the item at present iteration is greater than the next iteration
        if (arr[j] > arr[j + 1]) {
          // If the condition is true then swap them
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    setArray(arr);
  }

  return (
    <div>
      <h3>Unsorted Array: {JSON.stringify(array)}</h3>
     
      <button onClick={bblSort}>Sort</button>
      <h3>Sorted Array: {JSON.stringify(array)}</h3>
    </div>
  );
}

export default BubbleSort;

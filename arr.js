console.log("----Task-1----");

arr1=[1,2,3,4,5]
console.log("array is:-",arr1);
console.log("length of an array--",arr1.length);
arr1.push("helo")
console.log("adding an element to the end of an array-",arr1);
arr1.pop();
console.log("removing the last element from an array--",arr1);
arr1.unshift("added")
console.log("adding an element to the beginning of an array-",arr1);
arr1.shift();
console.log("removing the first element from an array-",arr1);
arr1.reverse();
console.log("reversed the elements in an array-",arr1);
console.log("index of a specific value in an array-",arr1.indexOf(4));
console.log("checking if a certain value exists in an array-",arr1.includes(9) );
console.log("sorting the elements of an array in ascending order",arr1.sort());
console.log("converting an array to a string using commas as separators",arr1.join());
console.log(" ");

console.log("----Task-2----");
console.log("question-1");
arr2=[1,2,3,4,5,6]
console.log("Array is-",arr2);
arr2.push("apple");
console.log("adds an element to the end of an array-",arr2);
arr2.shift()
console.log("removed the first element-",arr2);

console.log("question-2");
var arr3=['H','e','l','l','o']
console.log("Array is-",arr3);
arr3.reverse()
console.log("reversed an array-",arr3);
console.log("join the elements into a Array",arr3.join(''));




console.log("question-3");
arr4=[45,23,87,11,"hello", "zebra" ,"apple"]
console.log("Array is-",arr4);
arr4.sort()
console.log("sorts an array in ascending order-",arr4);
arr4.pop()
console.log("removes the last element-",arr4);

console.log("question-4");
console.log("array is:-",arr4);
arr4.unshift("first","second")
console.log("adding two elements at the beginning of an array--",arr4);
arr4.shift()
console.log("removes the first-",arr4);

console.log("question-5");
console.log("Array1 is-",arr2);
console.log("Array2 is-",arr4);
var con=arr2.concat(arr4);
console.log(" combined two arrays",con);
con.sort()
console.log("sorting the combined array",con);
con.pop()
console.log("removing the last element-",con);





const str1 = 'this is a reverse string ques';

function reverse(str){

  //check input 

if(!str || str.length <2 || typeof str !== 'string'){
  return str;
}
  const newStr = [];
for(let i=str.length-1; i>=0; i--){

newStr.push(str[i]);
}
return newStr.join('');
};

// reverse(str1);

function mergeSortedArrays(first, second){

    const out = [];
  let array1Item = first[0];
  let array2Item = second[0];
  let i = 1;
  let j = 1;
  

  if(!first && !second){
    return 'incorect input';
  }

  if(!first || first.length < 1){
    return second;
  }
    if(!second || second.length < 1){
    return first;
  }

while(array1Item || array2Item){
  if(!array2Item || array1Item < array2Item){
    out.push(array1Item);
    array1Item = first[i];
    i++;
  }else{
    out.push(array2Item);
    array2Item = second[j];
    j++;
  }
};

  // for (let i=0; i<first.length; i++ ){
  //   out.add(first[i]);
  // }

  // for (let i=0; i<second.length; i++ ){
  //   out.add(second[i]);
  // }

  

  return out


}
mergeSortedArrays([1,3,5,9], [2, 4, 8, 10] );


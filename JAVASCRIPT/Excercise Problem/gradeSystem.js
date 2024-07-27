const calculateGrade=(num) =>{
  let grade;
  if(num >= 90) grade = 'A';
  else if(num >= 80 && num <90) grade = 'B';
  else if( num >= 70 && num < 80 ) grade = 'C'
  else if( num >= 60 && num < 70 ) grade = 'D'
  else grade = 'F'
  return grade;
}

console.log(calculateGrade(92));
console.log(calculateGrade(90));
console.log(calculateGrade(82));
console.log(calculateGrade(69));
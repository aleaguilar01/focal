const passingGradesOnly = (grades) => {
  const passedGrades = grades.filter((grade) => {
    return grade >= 70;
  });
  return passedGrades;
};

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

console.log(passingGradesOnly(grades));
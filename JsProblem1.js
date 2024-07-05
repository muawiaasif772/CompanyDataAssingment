// Problem Statement: Write a JavaScript function that performs the following operations on the given dataset:
// Calculate the average salary of employees in each department.
// Determine the total budget allocated for each department’s projects.
// Find the highest and lowest average performance score for each team.
// Return an object containing:
// The average salary for each department.
// The total budget for each department.
// The highest and lowest average performance scores for each team.
// The names of the employees with the highest and lowest average performance scores.
const company = {
    departments: [
      {
        id: 1,
        name: "Engineering",
        teams: [
          {
            teamID: 101,
            teamName: "Frontend",
            manager: "Alice Johnson",
            projects: [
              { projectID: 1001, projectName: "Website Redesign", budget: 50000 },
              { projectID: 1002, projectName: "Mobile App", budget: 30000 }
            ],
            employees: [
              { employeeID: 1, name: "Bob Smith", salary: 75000, performance: [5, 4, 3, 5] },
              { employeeID: 2, name: "Carol Davis", salary: 68000, performance: [4, 4, 4, 4] }
            ]
          },
          {
            teamID: 102,
            teamName: "Backend",
            manager: "David Wilson",
            projects: [
              { projectID: 1003, projectName: "API Development", budget: 40000 },
              { projectID: 1004, projectName: "Database Migration", budget: 20000 }
            ],
            employees: [
              { employeeID: 3, name: "Eve Green", salary: 80000, performance: [5, 5, 4, 5] },
              { employeeID: 4, name: "Frank Brown", salary: 72000, performance: [4, 3, 4, 4] }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Marketing",
        teams: [
          {
            teamID: 103,
            teamName: "Content",
            manager: "George Blue",
            projects: [
              { projectID: 1005, projectName: "Blog Overhaul", budget: 15000 },
              { projectID: 1006, projectName: "SEO Optimization", budget: 10000 }
            ],
            employees: [
              { employeeID: 5, name: "Helen White", salary: 60000, performance: [4, 3, 4, 3] },
              { employeeID: 6, name: "Ian Black", salary: 55000, performance: [3, 4, 3, 4] }
            ]
          }
        ]
      }
    ]
  };  
  console.log('mjuedjj')



function departmentSalaries(departmentName){
   let sum=0;
   let count=0
   let departmentFound = false;
   var highestPerformance=0
   var lowestPerformance=0

  company.departments.forEach(el=>{
    if(el.name===departmentName){
        el.teams.forEach(el=>el.employees.forEach(el=>{
            departmentFound = true;

            sum+=el.salary
            count++
        }))
    }

  })
   if(!departmentFound){
    return ('department not found')
   }
return sum/count
}

function departmentBudgets(departmentName){
    let sum=0;
   let departmentFound = false;

  company.departments.forEach(el=>{
    if(el.name===departmentName){
        el.teams.forEach(el=>el.projects.forEach(el=>{
            departmentFound = true;

            sum+=el.budget
        }))
    }
else{
}
  })
   if(!departmentFound){
    return ('department not found')
   }
return sum
}


function teamPerformance(NameOfteam){
   
    let departmentFound = false;
 
   company.departments.forEach(el=>el.teams.forEach((el)=>{
    if(el.teamName===NameOfteam){
        departmentFound = true
      let bob=el.employees[0].performance
      let boblength=bob.length
      let Carol=el.employees[1].performance
      let corolLength=Carol.length
     let bobPerformance=bob.reduce((current,next)=>{
        return (current+next)
     })
      highestPerformance=bobPerformance/boblength
     console.log('highestAverage:',highestPerformance,)
      
 let CarolPerformance=Carol.reduce((current,next)=>{
    return (current+next)
 })
  lowestPerformance=CarolPerformance/corolLength 
    console.log('lowestAverage::',lowestPerformance)
    if(highestPerformance>=lowestPerformance){
      (el.employees.forEach(el=>{
        console.log(el.name)
    }))  
    }
else if(highestPerformance>=lowestPerformance){
        (el.employees.forEach(el=>{
            console.log(el.name)
          }))  
    }
}
   }))
   
   if(!departmentFound){
    return ('team not found')
   }
   
}
console.log(departmentSalaries('Engineering'))
console.log(departmentBudgets('Marketing'))
console.log(teamPerformance('Content'))


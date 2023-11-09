const students = [
    // {name:'Habiba', age: 14, role: ['fakibaz', 'hdsdkf', 'Developer'] },
    {name:'Habiba', age: 14, role: ['fakibaz', 'hdsdkf', {
        Developer: {
            companyName: 'Cheat Firm',
            ManagingPerson: {
                CEO: 'Sopna',
                Director: 'Rohul',
                HR: 'Mendi',
                CD: 'Habiba'
            }
        }
    }] },
    {name:'Rohul', age: 14, role: 'fakibazi' },
    {name:'Mendi', age: 14, role: 'fakibazi' },
]

console.log(students[0].role[2].Developer.ManagingPerson.CD);

// console.log(students[0].name);
// console.log(students[0].role[2]);




const developer = {
    name: 'Sajal',
    age: 23,
    company: {
        companyName: 'Cheat Firm Company LTD',
        Address: 'Haziganj',
        CEO: 'DIPU SAHA'
    }
} 

// console.log(developer.company.CEO);
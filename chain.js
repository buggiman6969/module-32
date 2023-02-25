// first one
const users = [
    {id: 01, name: 'lutfor', job: 'doctor'}
]
console.log(users[0].job);

// 2nd one
const data = {
    count: 50000,
    data: [
        {id: 2, name: 'mahinur',occupation: 'medical student',husbendName: 'Abdulla Al Noman'},
        {id: 3, name: 'Abdulla Al Noman',occupation: 'CSE student',wifeName: 'Mahinur'}
    ]
};

console.log(data.data[0].husbendName);
console.log(data.data[1]);
const wifeNamePath = data.data[1].wifeName;
console.log('your wifes na,e is:', wifeNamePath);
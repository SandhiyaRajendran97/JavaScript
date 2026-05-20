let detail={
    name:"shalu",
    role:"QA Analyst",
    Location:"chennai"
}
console.log(detail);
console.log(detail.role);
detail.location="coimbatore"
console.log(detail);

let electronics=[
    {
        name:"fan",
        price:5000
    },
    {
        name:"AC",
        price:250000
    }
]
console.log(electronics[1].name,electronics[1].price);
console.log(electronics[0].name,electronics[0].price);

let company = [
        "Zenv",  //string   -> 0
        2026,   //number    -> 1
        ["Chennai","Coimbatore","Bangalore"],   //array  ->2
        {
            department: "QA",
            employees: [
                { name: "Shalini", role: "Test Engineer", skills: ["Playwright", "Javascript", "API Testing"] }, //object ->0
                { name: "Rudra", role: "QA Analyst", skills: ["Java", "Selenium", "Rest API"] }   //object  -> 2
            ]
        },          //object   ->3
        [
            { project: "AutoShop360", status: "Ongoing" },
            { project: "QuickCart", status: "Completed" }
        ]           //array   ->4
];

console.log(company[3].employees[0].skills[1]);
console.log(company[2][1]);
console.log(company[4][1].project);
console.log(company[3].employees[1].skills[1]);

let usersData = [
    {
        name: "pavan kumar",
        product: "laptop",
        date: "25/12/2020"
    },
    {
        name: "prashanth kumar",
        product: "Mobile",
        date: "24/12/2020"
    },
    {
        name: "siva",
        product: "shoes",
        date: "25/12/2020"
    }, {
        name: "anil",
        product: "ipad",
        date: "24/12/2020"
    },
    {
        name: "lucky",
        product: "tv",
        date: "24/12/2020"
    },
    {
        name: "mahesh",
        product: "cake",
        date: "25/12/2020"
    },
    {
        name: "nithin",
        product: "chocolate",
        date: "23/12/2020"
    },
    {
        name: "vicky",
        product: "bag",
        date: "24/12/2020"
    },
    {
        name: "praveen",
        product: "cricket kit",
        date: "25/12/2020"
    }
]
let userDetails = ["Name", "Product", "Date", "Status", "Send Mail"]
let box = document.querySelector('#box')
let table = document.createElement('table')
let tableRowsArray = []
window.addEventListener('load', function () {
    var tr = document.createElement('tr')
    for (let detail of userDetails) {
        let th = document.createElement('th')
        th.innerText = detail
        tr.appendChild(th)
    }
    // adding status and button property to each object
    for (let i = 0; i < usersData.length; i++) {
        for (let detail in usersData[i]) {

            usersData[i]["status"] = statusUpdate(usersData[i][detail])
            usersData[i]["mail"] = "<button class='btn'>Send</button>"
        }
    }
    tableRowsArray.push(tr)
    for (let i = 0; i < usersData.length; i++) {
        var row = document.createElement('tr')
        tableRowsArray.push(row)
        for (let detail in usersData[i]) {
            let td = document.createElement('td')
            td.innerHTML = usersData[i][detail]
            row.appendChild(td)
        }
    }

    for (let row of tableRowsArray) {
        table.appendChild(row)
    }

    box.appendChild(table)
})
let str = "23/12/2020"

function extractDate(str) {
    let ans = str.split('/')
    return Number(ans[0])
}
function statusUpdate(str) {
    let dateNum = extractDate(str)
    let date = new Date()
    let newDate = date.getDate()
    if (newDate === dateNum) {
        return "In Progress"
    } else if ((newDate - 1) === dateNum) {
        return "Dispatched"
    } else {
        return "Delivered"
    }
}
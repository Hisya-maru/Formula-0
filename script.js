
fetch("drivers.json")
.then(res => res.json())
.then(data => {
    console.log(data);


const tbody = document.getElementById("rankingbody");

data.forEach(d => {
    const row = document.createElement("tr");

    row.innerHTML=`
    <td>${d.position}</td>
    <td>${d.driver}</td>
    <td>${d.team}</td>
    <td>${d.points}</td>
`;

tbody.appendChild(row);
});
})
.catch(err => console.error(err));
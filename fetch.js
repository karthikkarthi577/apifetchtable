var container = document.getElementById("content");
var tableData = document.getElementById("tbody");
var getData = document.getElementById("status");

const fetchData = async () => {
  try {
    const res = await fetch("db.json");
    data = await res.json();
    console.log(data);
    {
      getData.addEventListener("click", function (e) {
        data.map(x => {
          return (tableData.innerHTML += `
       <tr>
       <td >${x.capsule_id}</td>
       <td>${x.missions[0].flight}</td>
       <td>${x.details}</td>
       </tr>
      
        `);
        });
      });
    }
  } catch (e) {
    console.log(e);
  }
};

fetchData();

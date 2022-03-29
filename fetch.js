var container = document.getElementById("content");
var table = document.getElementById("tbody");

const fetchData = async () => {
  try {
    const res = await fetch("db.json");
    data = await res.json();
    console.log(data);
    data.map(x => {
      return (table.innerHTML += `
       <tr>
       <td>${x.capsule_id}</td>
       <td>${x.missions[0].flight}</td>
       <td>${x.details}</td>
       </tr>
      
        `);
    });
  } catch (e) {
    console.log(e);
  }
};

fetchData();

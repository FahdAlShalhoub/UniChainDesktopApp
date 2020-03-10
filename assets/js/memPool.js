

async function Getmempool(){

    let response = await fetch("http://localhost:3001/mempool");
    let mempool = await response.json();
    let i = 1;

    mempool.forEach(data => {

        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${i++}</td>
        <td class="text-center">${data.name}</td>
        <td class="text-center">${data.ID}</td>
        <td class="text-center">${data.university}</td>
        <td class="text-center">${data.major}</td>
        <td class="text-center">${data.year}</td>
        <td class="text-center text-break">${data.hashOfCertificate}</td>`;
    
        document.getElementById("tbody").appendChild(tr);     
    });
   
}

Getmempool();



function mineBlock(){
     fetch('http://localhost:3001/blockchain/addblock',{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             }
         }).then(response => {
            self.location['replace'](location);
            console.log(response.status);
            if(response.status >= 400){
                alert("certificates must exceed 5 to mine a new block");    
            } else {
                alert("you added a block to the blockchain!");
            }
         }).catch(err => alert(err))


 }

 async function searchbyhash() {

    let value = document.getElementById("searchbyhash").value;
    let url = `http://localhost:3001/search/`+ value;
    
    let response = await fetch(url,{
        method: "POST"
    });
    let block = await response.json();

 
    
    
           if(block === "null"){

            alert("there no block with this hash");
           
           }else{
            document.getElementById("hash").innerHTML = block.hash;
            document.getElementById("height").innerHTML = block.height;
            document.getElementById("timestamp").innerHTML = block.timestamp;
            document.getElementById("prehash").innerHTML = block.previousHash;
            
            block.data.forEach(element => {

                let div = document.createElement("div");
                div.setAttribute("class", "card-body");
                div.innerHTML = `
                <blockquote class="blockquote mb-0">
                <h3> ID :</h3>
                <p id="dataid"> ${element.ID}</p>
                <br>
                <h3>Hash of certificate :</h3>
                <p id="datahash"> ${element.HashOfCertificate}</p>
                <br>
                <h3> name:</h3>
                <p id="dataname"> ${element.name}</p>
                <br>
                <h3>year :</h3>
                <p id="datayear"> ${element.Year}</p>
                <br>
                <div class="dropdown-divider"></div>
                </blockquote>`;

                
                document.getElementById("block-data").appendChild(div);
            });
            
           }
}

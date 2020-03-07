

// async function GetData(){
//     response = await fetch("http://localhost:3001/search/307c00731231e55d7ca3d12b4accb466823cbc58c20289b359525f8a69f4c89f",{
//         method: "POST"
//     });
//     data = await response.json();

//     console.log(data);
    
// }

// GetData();


 async function searchbyhash() {

    let value = document.getElementById("searchbyhash").value;
    let url = `http://localhost:3001/search/`+ value;
    
    let response = await fetch(url,{
        method: "POST"
    });
    let block = await response.json();
    // TODO fix the time (it gives me the current time not the time the block was made :( )
    let time = block.timestamp;
    time = Date(time);
    console.log(time);
    console.log(time.toString());
    
    
           if(block === "null"){

            alert("there no block with this hash");
           
           }else{
            document.getElementById("hash").innerHTML = block.hash;
            document.getElementById("height").innerHTML = block.height;
            document.getElementById("timestamp").innerHTML = time.toString();
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

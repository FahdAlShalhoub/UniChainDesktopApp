async function sendAddBlockRequest() {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let year = document.getElementById('graduationDate').value;
    let hash = sha256(studentId + studentName + year);

    if(studentName == "" || studentId == "" || year == ""){
        alert("Please fill the missing parameter(s)");
    } else {
        let newCertificate = [{
            "ID": studentId,
            "HashOfCertificate": hash,
            "name": studentName,
            "university": "King Saud University",
            "Year": parseInt(year.substring(0,4)),
        }]
    
        //TODO: change the url to be taken from an env variable
        let response = await fetch('http://localhost:3001/addblock',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({block: newCertificate})
        });
    
        let res = await response.json();
        
        alert("Successfuly added new block with hash: " + res.hash);
    
        window.location = './mainWindow.ejs';
    }
}
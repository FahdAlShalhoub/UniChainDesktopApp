function sendAddBlockRequest() {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let major = document.getElementById('major').value;
    let year = document.getElementById('graduationDate').value;

    if(studentName == "" || studentId == "" || year == ""){
        alert("Please fill the missing parameter(s)");
    } else {
        let newCertificate = {
            "ID": studentId,
            "major": major,
            "name": studentName,
            "university": "King Saud University",
            "year": parseInt(year.substring(0,4)),
        };
        
        //TODO: change the url to be taken from an env variable
        fetch('http://localhost:3001/mempool/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCertificate)
        }).then(response => {
            document.getElementById('studentId').value = "";
            document.getElementById('studentName').value = "";
            document.getElementById('major').value = "";
            document.getElementById('graduationDate').value = "";
            alert("Successfuly added new block with hash");
        }).catch(err => console.log(err));
    }
}
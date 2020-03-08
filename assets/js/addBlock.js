async function sendAddBlockRequest() {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let year = document.getElementById('graduationDate').value;
    let hash = sha256(studentId + studentName + year);

    let newCertificate = [{
        "ID": studentId,
        "name": studentName,
        "hash": hash,
        "ear": year,
    }]

    //TODO: change the url to be taken from an env variable
    let response = await fetch('http://localhost:3001/addblock',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({block: newCertificate})
    });

    alert("Successfuly added new block")
}

let blockchain = [
    {
        hash: "0000c692b515949ef4d72bf7f21669eed5d0205148ce7a153faa97447a5687b4",
        nonce: "34889",
        height:"1",
        timestamp:"2020-3-12 15:00",
        prehash:"0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
        hash: "0000d0d27757994b430eb09043b20ea224a06de105fbe920dd7c47cc04f97c23",
        nonce: "189257",
        height:"2",
        timestamp:"2020-5-13 16:40",
        prehash:"0000c692b515949ef4d72bf7f21669eed5d0205148ce7a153faa97447a5687b4"
    },
    {
        hash: "000009734f176161fa283f5a76d4a4cb96daa9688cf9bcc01a2e64ecff89e733",
        nonce: "8928",
        height:"3",
        timestamp:"2020-5-16 12:50",
        prehash:"0000d0d27757994b430eb09043b20ea224a06de105fbe920dd7c47cc04f97c23"
    }
];

   function searchbyhash() {
    let value = document.getElementById("searchbyhash").value;
    let data = "null";

   blockchain.forEach(block => {

    if(block.hash === value){
        data = block;
    }
});
           if(data === "null"){

            alert("there no block with this hash");
           
           }else{
            document.getElementById("hash").innerHTML = data.hash;
            document.getElementById("nonce").innerHTML = data.nonce;
            document.getElementById("height").innerHTML = data.height;
            document.getElementById("timestamp").innerHTML = data.timestamp;
            document.getElementById("prehash").innerHTML = data.prehash;
           }
}

function searchbyheight() {

    let value = document.getElementById("searchbyheight").value;
    let data = "null";
    
   blockchain.forEach(block => {

    if(block.height === value){
        data = block;
    }

});
        if(data === "null"){
            
            alert("there no block with this height");
           }else{
            document.getElementById("hash").innerHTML = data.hash;
            document.getElementById("nonce").innerHTML = data.nonce;
            document.getElementById("height").innerHTML = data.height;
            document.getElementById("timestamp").innerHTML = data.timestamp;
            document.getElementById("prehash").innerHTML = data.prehash;
           }
}
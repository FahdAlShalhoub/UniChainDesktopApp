function Communicator() {
    const ipcRenderer = require("electron").ipcRenderer;

    this.searchBlock = function(hash){
        let searchResult = ipcRenderer.sendSync("searchBlock",hash);
        return searchResult;
    }

    this.getMempool = function(){
        let mempool = ipcRenderer.sendSync("getMempool");
        return mempool;
    }

    this.getBlockchain = function(){
        let blockchain = ipcRenderer.sendSync("getBlockchain");
        return blockchain;
    }

    this.mineBlock = function(){
        try {
            let result = ipcRenderer.sendSync("mineBlock");
            return result;
        } catch(error){
            throw new Error("certificates must exceed 5 to mine a new block");
        }
    }

    this.addCertificate = function(certificateData){
        let result = ipcRenderer.sendSync("addCertificate",certificateData);
        return result;
    }

}

module.exports = new Communicator();
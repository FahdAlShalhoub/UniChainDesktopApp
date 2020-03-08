const addBlock = require("../assets/js/addBlock");

test("should send a block successfully", async () => {
    let inputData = [ 
        {
            "ID": 437105030,
            "HashOfCertificate": "000a2d3e07691356160c15c8fd2dc81743a72070e2d7d9f60671b00d60adbda2",
            "name": "Harverd university",
            "Year": 2019
        },
        {
            "ID": 437105046,
            "HashOfCertificate": "e74947c3b02d189d9955c90b6befc17e82da802799905ed304a5e2e0d40caf38",
            "name": "Ali Ahmed",
            "university": "King saud university",
            "Year": 2019
        }
    ]

    let actualResult = await addBlock.sendAddBlockRequest(inputData);

    expect(actualResult.data).toStrictEqual(inputData);
});
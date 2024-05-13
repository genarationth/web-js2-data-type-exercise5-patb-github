const authorM = {
    authorID: 0,
    name: "John Doe",
    url: "johndoe.com",
    address: {
        houseNo: 1,
        street: "Wall Street",
        county: "New York County",
        postcode: 9999
    }
}

for (let p in authorM) console.log(`${p}: ${authorM[p]}`); 
// cannot write authorM.p because p is a string (can check with typeof p)
// i.e., does not make sense to write authorM.'name';

for (let p in authorM.address) console.log(`${p}: ${authorM.address[p]}`);

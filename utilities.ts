function genTest(l1: number, l2: number): [number[], number[], number[]] {
    // l1 and l2 are size of array 1 and array 2 that you want
    let n = l1+l2;
    let collection: number[] = [];
    for(let i=0;i<n;++i){
        let rand = Math.random();
        if(rand > 0.5){
            collection.push(Math.floor(Math.random() * (n-1)) + 1);
        }else if(rand < 0.5){
            collection.push(-1 * Math.floor(Math.random() * (n-1)) - 1);
        }else{
            collection.push(0);
        }
    }

    let collection_1 = collection.slice(0, l1);
    let collection_2 = collection.slice(l1, n);
    collection.sort((a, b) =>a -b);
    collection_1.sort((a, b) =>a -b);
    collection_2.sort((a, b) =>a -b);
    
    return [collection_1, collection_2, collection];
}

module.exports = genTest;
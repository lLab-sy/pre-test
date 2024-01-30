const merge_function = require('./merge');
const genTestcase = require('./utilities');

test("Must return correctly with normal input", ()=> {
    let collection_1 = [4, 5];
    let collection_2 = [1, 2, 3];
    let res = [1, 2, 3, 4, 5];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);

    collection_1 = [1, 4, 8, 11, 21];
    collection_2 = [1, 2, 3, 9];
    res = [1, 1, 2, 3, 4, 8, 9, 11, 21];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);

    collection_1 = [1, 2, 3];
    collection_2 = [4, 5];
    res = [1, 2, 3, 4, 5];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);

    collection_1 = [1, 2, 3, 4];
    collection_2 = [1, 2, 3, 4];
    res = [1, 1, 2, 2, 3, 3, 4, 4];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);
})

test("Must return correctly with random input", ()=> {
    let testSet = genTestcase(3, 4);
    let collection_1 = testSet[0];
    let collection_2 = testSet[1];
    let res = testSet[2];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);

    testSet = genTestcase(15, 31);
    collection_1 = testSet[0];
    collection_2 = testSet[1];
    res = testSet[2];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);

    testSet = genTestcase(10, 12);
    collection_1 = testSet[0];
    collection_2 = testSet[1];
    res = testSet[2];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);

    testSet = genTestcase(9, 10);
    collection_1 = testSet[0];
    collection_2 = testSet[1];
    res = testSet[2];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);
})

test("Must return correctly with many test", ()=> {
    for(let i=0;i<100;++i){
        let testSet = genTestcase(100, 100);
        let collection_1 = testSet[0];
        let collection_2 = testSet[1];
        let res = testSet[2];
        expect(merge_function(collection_1, collection_2)).toStrictEqual(res);
    }
})

test("Must return correctly with large input", ()=> {
    let testSet = genTestcase(3000, 4000);
    let collection_1 = testSet[0];
    let collection_2 = testSet[1];
    let res = testSet[2];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);

    testSet = genTestcase(10000, 20000);
    collection_1 = testSet[0];
    collection_2 = testSet[1];
    res = testSet[2];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);

    testSet = genTestcase(30000, 20000);
    collection_1 = testSet[0];
    collection_2 = testSet[1];
    res = testSet[2];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);

    testSet = genTestcase(100000, 50000);
    collection_1 = testSet[0];
    collection_2 = testSet[1];
    res = testSet[2];
    expect(merge_function(collection_1, collection_2)).toStrictEqual(res);
})


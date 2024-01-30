function merge(collection_1: number[], collection_2: number[]): number[] {
    let sizeC1 = collection_1.length, sizeC2 = collection_2.length;
    let sortedCollection: number[] = [];
    
    let i = 0, j = 0;
    while(i < sizeC1 && j < sizeC2){
        if(collection_1[i] < collection_2[j]){
            sortedCollection.push(collection_1[i]);
            i++;
        }else{
            sortedCollection.push(collection_2[j]);
            j++;
        }
    }

    while(i < sizeC1){
        sortedCollection.push(collection_1[i]);
        i++;
    }

    while(j < sizeC2){
        sortedCollection.push(collection_2[j]);
        j++;
    }

    return sortedCollection;
}

module.exports = merge;
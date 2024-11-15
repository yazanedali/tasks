function SumAndAverage(numbers) {
    const Tsum = numbers.reduce((sum, numbers) => sum + numbers, 0)

    const average = Tsum / numbers.length;

    return {
        Tsum: Tsum,
        average: average
    };
}

const Arr1 = [10, 20, 30, 40 ,50];
const res1 = SumAndAverage(Arr)

console.log("Total sum: ",res.Tsum);
console.log("Total sum: ",res.average);



function distinct(arr){
    const distinctArray = [...new Set(arr)];
    return distinctArray;
} 

const Arr2 = ["ahmad", "adham", "yazan", "ahmad", "adham"];
const res2 = distinct(arr);

console.log(res);
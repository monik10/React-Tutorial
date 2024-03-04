// let sum=0;
// const cal=n=>
// {
//     for(let i=0;i<=n;i++)
//     {
//         sum+=1;
//     }
//     return sum;
// };

// const memorize=func=>
// {
//   let cache={};
//   return function (...args)  
//   {
//     let n=args[0];
//     if(n in cache)
//     {
//       console.log("Data is coming from cache");
//       return cache[n];
//     }
//     else{
//         console.log("calculating first time...");
//         let result=func(n);
//         cache[n]=result;
//         return result;
//     }
//   }
// }
// console.log("Before Memorization")
// console.log(cal(5));
// console.log("After Memorization")
// console.log("============After Optimization=====================")
// console.log("Before Optimization")
// console.time();
// let efficientWay=memorize(cal);
// console.log(efficientWay(500000000))
// console.timeEnd();
// console.log("After Optimization")


function sum(...rest)
{
    return rest.reduce((accumulator,currentValue)=>accumulator+currentValue);
}
// let keys=["sashi","manu","10"];
// console.log(JSON.stringify(keys))
const Memorization=func=>
{
    let cache={};
    return function (...args)
    {
        let keys=JSON.stringify(args);
        if(cache[keys])
        {
            console.log(cache);
            console.log("DATA FROM CACHE")
            return cache[keys];
        }
        else
        {
            console.log("FIRST TIME");
            const result=func(...args)
            cache[keys]=result;
            return result;
        }
    }

};

let calculate=Memorization(sum);
console.time();
console.log(calculate(10,10,10))
console.timeEnd();

console.warn("=================second time");
console.time();
console.log(calculate(10,10,10))
console.timeEnd();
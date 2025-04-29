for (const prop in statistics){
    if(statistics[prop] % 2 === 1 || prop.startsWith('r')){
        console.log(statistics[prop]);
    }
}

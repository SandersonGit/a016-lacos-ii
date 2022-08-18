const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for(let i in maioresPaises){
    for(let a of maioresPaises[i])
        console.log(`${Number(i)+1} - ${maioresPaises[i]}`);
            
}
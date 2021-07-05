const myemps = ["rsc","srm","infosys","hcl"];

//console.log(myemps);

const transformedemps = myemps
            .map(x=>`Processed ${x}`)
            .map(x=>`${x} completed`)
            .filter(x=>x=="Processed srm completed")

console.log(transformedemps);

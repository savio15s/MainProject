var num = 100;

function myname(x){
    var num = 10;
    let lnum = 10
    console.log(lnum+x);

    {
        let llnum = 3;
        console.log("==>" + (llnum+x));
    }
    
}

myname(5);
//myname(10);
//console.log("global..." + num);
//myname(20);
const object1 = {
    a: 'somestring',
    b: 42,
    c: ["10","20","30"]
  };

  console.log(Object.entries(object1).map(x=>{
      console.log(x);
      return x;
  }));

  console.log("================");

  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

  console.log("================");

  let user = {
    name: "John",
    age: 30
  };

  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(Object.entries(user));

  console.log("=========================");

  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj = Object.fromEntries(entries);
  
  console.log(obj);

  console.log(obj["foo"]);

  console.log("=========================");


  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  console.log(doublePrices.meat); // 8
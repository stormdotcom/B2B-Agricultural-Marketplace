 const farmers = [
  { name: 'John Smith', email: 'Pbfgmarketplace@gmail.com', product: 'potato' },
  { name: 'Maria Garcia', email: 'Pbfgmarketplace@gmail.com', product: 'tomato' },
  { name: 'David Chen', email: 'Pbfgmarketplace@gmail.com', product: 'wheat' },
   { name: 'Test Farmer', email: 'tomstorms11@gmail.com', product: 'rice' },
  

];

if (process.env.NODE_ENV === 'development') {
  farmers.push(
    { name: 'Test2 ', email: 'ajmaln73@gmail.com', product: 'test' }
  );
}


export { farmers };


 const number = function(busStops) {
     let total = 0;

    for (let i = 0; i < busStops.length; i++) {
        total  += busStops[i][0] - busStops[i][1];  // Resta las personas que bajan
   }
    
return total; 
}

const parada = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];
console.log(number(parada))
    //number([[10,0],[3,5],[5,8]]) //5
    //number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) //17
    //number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) //21)

   // const number = function(busStops) {
     //  busStops.reduce (,[suben, bajan]) 
      // return 
    //}

    const number2 = function(busStops) {
        let total = 0;

      busStops.forEach(busStop => {
        let [suben, bajan]= busStop
        total += suben - bajan
        
      });
      return total
    }

    parada=[[10,0],[3,5],[5,8]]
    console.log(number(parada))
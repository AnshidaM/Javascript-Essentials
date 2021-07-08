var d3=3
var d5=5
var d15=15
for(i=1;i<=100;i++){
   j=i
   k=i
   l=i
    while(j>=d3){
        j=j-d3
      }
    rd3=j
    while(k>=d5){
        k=k-d5
      }
    rd5=k
    while(l>=d15){
        l=l-d15
      }
    rd15=l
    if(rd3==0 && rd5==0){
        console.log("FizzBuzz")
    }
    else if(rd3==0 ){
        console.log("Fizz")
    }
    else if (rd5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
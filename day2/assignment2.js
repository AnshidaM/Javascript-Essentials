
warray=[]
m="madam need to refer google map to reach hyderabad by noon"
m=m+" "
word=""
for(t of m)//loop to get words seperated and store it in an array
 {
    if(t!=" ")
     {
       word=word+t
     }
    else
     {
       warray.push(word)
       word=" "
     }
 }
for(z=0;z<warray.length;z=z+1)//loop to check wtherer ecah of the word in the array warray is paliandrome or not
{
   var flag=0
   string1=warray[z]
   var nw=""
   for(i=0;i<string1.length;i=i+1)//loop to remove the empty space at beginning
     {
       if(string1[i]!=" ")
        {
         nw=nw+string1[i]
        }
      }
      l = nw.length
      for(i=0;i < l ;i=i+1)
       {
        if(nw[i] != nw[l-i-1])//paliandrome checking
         {
            flag = -1;
            break;
          }
        }
        if (flag==-1) 
        {
        }    
        else 
        {
        console.log(nw)
        }
}
function myFunction(txt,znak) {
 let start = 0;
 let end = 0;
 let str = "";
   do {
       end = txt.indexOf(znak, start);
       str = str + txt.substring(start,end) + '\n';
       start = end + 1;
   }while(end !=-1)
  return str;
} 

 let mySource = "Natasha,Dasha,Masha,Pasha,Natasha,Dasha,Masha,Pasha,Natasha,Dasha";
 let mySource2 = "Natasha;Dasha;Masha;Pasha;Natasha;Dasha;Masha;Pasha;Natasha;Dasha";
 let x = "Natasha-Dasha-Masha-Pasha-Natasha-Dasha-Masha-Pasha-Natasha-Dasha,";
 
console.log(myFunction(mySource, ","));
console.log(myFunction(mySource2, ";"));
console.log(myFunction(x, "-"));

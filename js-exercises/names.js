let source = `
Richa Agarwala, Tanya Barrett, Jeff Beck,
Dennis A Benson, Colleen Bollin, Evan Bolton,
Devon Bourexis, J Rodney Brister, Stephen H Bryant,
Kathi Canese, Mark Cavanaugh, Chad Charowhas, Karen Clark, Ilya Dondoshansky, Michael Feolo, Lawrence Fitzpatrick, Kathryn Funk, Lewis Y Geer, Viatcheslav Gorelenkov, Alan Graeff, Wratko Hlavina, Brad Holmes, Mark Johnson, Brandi Kattman, Viatcheslav Khotomlianski, Avi Kimchi, Michael Kimelman, Masato Kimura, Paul Kitts, William Klimke, Alex Kotliarov, Sergey Krasnov, Anatoliy Kuznetsov, Melissa J Landrum, David Landsman, Stacy Lathrop, Jennifer M Lee, Carl Leubsdorf, Zhiyong Lu, Thomas L Madden, Aron Marchler-Bauer, Adriana Malheiro, Peter Meric, Ilene Karsch-Mizrachi, Anatoly Mnev, Terence Murphy, Rebecca Orris, James Ostell, Christopher O'Sullivan, Vasuki Palanigobu, Anna R Panchenko, Lon Phan, Borys Pierov, Kim D Pruitt, Kurt Rodarmer, Eric W Sayers, Valerie Schneider, Conrad L Schoch, Gregory D Schuler, Stephen T Sherry, Karanjit Siyan, Alexandra Soboleva, Vladimir Soussov, Grigory Starchenko, Tatiana A Tatusova, Francoise Thibaud-Nissen, Kamen Todorov, Bart W Trawick, Denis Vakatov, Minghong Ward, Eugene Yaschenko, Aleksandr Zasypkin, Kerry Zbicz`;

function cutStringInLines(wordsInLine){
    let result = "";
    let position = 0;
    let counter = 0;
    do{ 
        position = source.indexOf(',');
        if(counter<=wordsInLine){ 
            result += source.substr(0, position);

         }
        }while(position !=-1); //poka est' zapyatye
    //esli counter <= wordsInLine => result = result + sl

}

function cutStringWithArr(strSource, wordsInLine){
    let result = "";
    const sourceArr = strSource.split(',');
    for(i=0;i<sourceArr.length;i++){
        (i===0 | (i+1) % wordsInLine !==0) ? result+=sourceArr[i] + ',' : result+=sourceArr[i].trim() + '\n'; ;
    }
    return result;
}

console.log(cutStringWithArr(source, 3));


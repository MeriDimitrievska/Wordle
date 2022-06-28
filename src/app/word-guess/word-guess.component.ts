import { Component, OnInit } from '@angular/core';
import { DICTIONARY } from '../dictionary';

@Component({
  selector: 'app-word-guess',
  templateUrl: './word-guess.component.html',
  styleUrls: ['./word-guess.component.css']
})
export class WordGuessComponent implements OnInit {

  dictionary : string []=[];
  min: number=Math.ceil(0);
  max: number=Math.floor(90);
  index: number=Math.floor(Math.random() * (this.max - this.min) + this.min);
  wordTrue:string=DICTIONARY[this.index];
  wordEntered:string|undefined;
  times:number=0;
  letters1:string[]=[];
  letters2:string[]=[];
  letters3:string[]=[];
  letters4:string[]=[];
  letters5:string[]=[];
  letters6:string[]=[];
  guessed:number=0;
  message:string="";

  constructor() { 
    this.dictionary=DICTIONARY;
  }

  ngOnInit(): void {
  }

  onClick()
  {
    let word=document.getElementById("txtBox") as HTMLInputElement;
    this.wordEntered=word.value;
    this.times++;
    let niza=[];
    let original=[];
    for(let i=0; i<5; i++)
    {
      niza[i]=this.wordEntered.charAt(i);
      original[i]=this.wordTrue.charAt(i);
    }

    if(this.times==1)
    {
     for(let i=0; i<=5; i++)
     {
      this.letters1[i]=niza[i];
     }
     if(this.letters1[0]==original[0])
     {
      const x=document.getElementById("row11");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters1[0]))
     {
      const x=document.getElementById("row11");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters1[1]==original[1])
     {
      const x=document.getElementById("row12");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters1[1]))
     {
      const x=document.getElementById("row12");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters1[2]==original[2])
     {
      const x=document.getElementById("row13");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters1[2]))
     {
      const x=document.getElementById("row13");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters1[3]==original[3])
     {
      const x=document.getElementById("row14");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters1[3]))
     {
      const x=document.getElementById("row14");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters1[4]==original[4])
     {
      const x=document.getElementById("row15");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
      if(this.guessed==5)
      {
        const btn=document.getElementById("btn") as HTMLInputElement;
        if(btn!=null)
        {
          btn.setAttribute('disabled', '');
          this.message="Congrats, you win! For new game please refresh the page!"
        }
      }
     }
     else if(original.includes(this.letters1[4]))
     {
      const x=document.getElementById("row15");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
    }

    else if(this.times==2)
    {
      this.guessed=0;
      for(let i=0; i<=5; i++)
      {
       this.letters2[i]=niza[i];
      }
      if(this.letters2[0]==original[0])
     {
      const x=document.getElementById("row21");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters2[0]))
     {
      const x=document.getElementById("row21");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters2[1]==original[1])
     {
      const x=document.getElementById("row22");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters2[1]))
     {
      const x=document.getElementById("row22");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters2[2]==original[2])
     {
      const x=document.getElementById("row23");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters2[2]))
     {
      const x=document.getElementById("row23");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters2[3]==original[3])
     {
      const x=document.getElementById("row24");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters2[3]))
     {
      const x=document.getElementById("row24");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters2[4]==original[4])
     {
      const x=document.getElementById("row25");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
      if(this.guessed==5)
      {
        const btn=document.getElementById("btn") as HTMLInputElement;
        if(btn!=null)
        {
          btn.setAttribute('disabled', '');
          this.message="Congrats, you win! For new game please refresh the page!"
        }
      }
     }
     else if(original.includes(this.letters2[4]))
     {
      const x=document.getElementById("row25");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
    }

    else if(this.times==3)
    {
      this.guessed=0;
      for(let i=0; i<=5; i++)
      {
       this.letters3[i]=niza[i];
      }
      if(this.letters3[0]==original[0])
     {
      const x=document.getElementById("row31");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters3[0]))
     {
      const x=document.getElementById("row31");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters3[1]==original[1])
     {
      const x=document.getElementById("row32");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters3[1]))
     {
      const x=document.getElementById("row32");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters3[2]==original[2])
     {
      const x=document.getElementById("row33");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters3[2]))
     {
      const x=document.getElementById("row33");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters3[3]==original[3])
     {
      const x=document.getElementById("row34");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters3[3]))
     {
      const x=document.getElementById("row34");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters3[4]==original[4])
     {
      const x=document.getElementById("row35");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
      if(this.guessed==5)
      {
        const btn=document.getElementById("btn") as HTMLInputElement;
        if(btn!=null)
        {
          btn.setAttribute('disabled', '');
          this.message="Congrats, you win! For new game please refresh the page!"
        }
      }
     }
     else if(original.includes(this.letters3[4]))
     {
      const x=document.getElementById("row35");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
    }

    else if(this.times==4)
    {
      this.guessed=0;
      for(let i=0; i<=5; i++)
     {
      this.letters4[i]=niza[i];
     }
     if(this.letters4[0]==original[0])
     {
      const x=document.getElementById("row41");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters4[0]))
     {
      const x=document.getElementById("row41");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters4[1]==original[1])
     {
      const x=document.getElementById("row42");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters4[1]))
     {
      const x=document.getElementById("row42");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters4[2]==original[2])
     {
      const x=document.getElementById("row43");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters4[2]))
     {
      const x=document.getElementById("row43");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters4[3]==original[3])
     {
      const x=document.getElementById("row44");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters4[3]))
     {
      const x=document.getElementById("row44");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters4[4]==original[4])
     {
      const x=document.getElementById("row45");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
      if(this.guessed==5)
      {
        const btn=document.getElementById("btn") as HTMLInputElement;
        if(btn!=null)
        {
          btn.setAttribute('disabled', '');
          this.message="Congrats, you win! For new game please refresh the page!"
        }
      }
     }
     else if(original.includes(this.letters4[4]))
     {
      const x=document.getElementById("row45");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
    }

    else if(this.times==5)
    {
      this.guessed=0;
      for(let i=0; i<=5; i++)
      {
       this.letters5[i]=niza[i];
      }
      if(this.letters5[0]==original[0])
     {
      const x=document.getElementById("row51");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters5[0]))
     {
      const x=document.getElementById("row51");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters5[1]==original[1])
     {
      const x=document.getElementById("row52");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters5[1]))
     {
      const x=document.getElementById("row52");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters5[2]==original[2])
     {
      const x=document.getElementById("row53");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters5[2]))
     {
      const x=document.getElementById("row53");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters5[3]==original[3])
     {
      const x=document.getElementById("row54");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters5[3]))
     {
      const x=document.getElementById("row54");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters5[4]==original[4])
     {
      const x=document.getElementById("row55");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
      if(this.guessed==5)
      {
        const btn=document.getElementById("btn") as HTMLInputElement;
        if(btn!=null)
        {
          btn.setAttribute('disabled', '');
          this.message="Congrats, you win! For new game please refresh the page!"
        }
      }
     }
     else if(original.includes(this.letters5[4]))
     {
      const x=document.getElementById("row55");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
    }

    else if(this.times==6)
    {
      this.guessed=0;
      for(let i=0; i<=5; i++)
      {
       this.letters6[i]=niza[i];
      }
      if(this.letters6[0]==original[0])
     {
      const x=document.getElementById("row61");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters6[0]))
     {
      const x=document.getElementById("row61");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters6[1]==original[1])
     {
      const x=document.getElementById("row62");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters6[1]))
     {
      const x=document.getElementById("row62");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters6[2]==original[2])
     {
      const x=document.getElementById("row63");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters6[2]))
     {
      const x=document.getElementById("row63");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters6[3]==original[3])
     {
      const x=document.getElementById("row64");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
     }
     else if(original.includes(this.letters6[3]))
     {
      const x=document.getElementById("row64");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
     }
     if(this.letters6[4]==original[4])
     {
      const x=document.getElementById("row65");
      if(x!=null)
      {
        x.style.backgroundColor='lightgreen';
      }
      this.guessed++;
      if(this.guessed==5)
      {
        const btn=document.getElementById("btn") as HTMLInputElement;
        if(btn!=null)
        {
          btn.setAttribute('disabled', '');
          this.message="Congrats, you win!"
        }
      }
     }
     else if(original.includes(this.letters6[4]))
     {
      const x=document.getElementById("row65");
      if(x!=null)
      {
        x.style.backgroundColor='lightgrey';
      }
      this.message="You lose!"
     }
     else {
      this.message="You lose!"
     }
    }
  }

}

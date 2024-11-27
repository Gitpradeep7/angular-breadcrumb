import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  names = ["Alice", "Bob", "Charlie", "Diana"];
  
  dupIndex: any[]=[];
  numbers = [472, 486, 869, 195, 975, 539, 345, 143, 328, 622, 732, 88, 261, 415, 938, 234, 316,
    796, 592, 664, 597, 592, 570, 10, 66, 139, 52, 611, 821, 381, 900, 558, 432, 589, 396, 592,
    942, 592, 809, 265, 23, 765, 41, 436, 714, 592, 616, 843, 862, 7, 592, 629, 113, 102, 592,
    663, 235, 34, 290, 739, 312, 592, 173, 779, 598, 310, 529, 637, 127, 698, 969, 672, 126,
    357, 295, 5, 376, 343, 769, 224, 469, 673, 870, 774, 592, 700, 592, 480, 556, 639, 227,
    465, 678, 270, 697, 4, 980, 320, 563, 592];
    constructor(){}
    ngOnInit(){

      this.getIndexOfDup();
    }
  getIndexOfDup() {
  
   this.dupIndex = this.numbers.filter((i:any,ind:any)=>{
      i==this.numbers[ind] ? ind : '';
    })
    console.log("ddd",this.dupIndex)
  }
}
export interface tab{
  num:number,
  index:number
}

import { Component } from '@angular/core';
import { NetworkService } from 'src/app/network.service';

@Component({
  selector: 'app-jwellary',
  templateUrl: './jwellary.component.html',
  styleUrls: ['./jwellary.component.scss']
})
export class JwellaryComponent {
  name:any;
  constructor(private nt:NetworkService){
  }
  ngOnInit(){
  this.nt.getName().subscribe((res:any)=>{
   this.name = res;
  })
}
}

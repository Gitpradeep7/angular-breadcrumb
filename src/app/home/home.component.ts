import { Component } from '@angular/core';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 homeTitle=['shop','cart'];
 name:any;
 istrue:boolean=false;
 constructor(private nt:NetworkService){
 }
 ngOnInit(){
 this.nt.getName().subscribe((res:any)=>{
  this.name = res;
 })

 }
 toggle(){
  this.istrue = !this.istrue;
  console.log('istrue',this.istrue)
 }
}

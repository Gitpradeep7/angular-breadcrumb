import { Component } from '@angular/core';
import { NetworkService } from 'src/app/network.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  shopTitle=[{label:'Men',url:'men'},{label:'Women',url:'women'},{label:'Jwellary',url:'jwellary'}]
  data:any;
  oriData:any;
  constructor(private nt:NetworkService){
    this.nt.getUrl().subscribe((res:any)=>{
      this.data = res;
      console.log('res',res)
      this.oriData = this.data
    })
  }
  ngOnInit(){
    
  }
}

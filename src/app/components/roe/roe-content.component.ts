import { Component, OnInit } from '@angular/core';
import { NbpRoeItem } from '../../model/nbp-roe-item.model';
import { NbpService } from '../../services/nbp.service';
import { Response } from "@angular/http/src/static_response";

@Component({
  selector: 'app-roe-content',
  templateUrl: './roe-content.component.html',
  providers: [NbpService]
})
export class RoeContentComponent implements OnInit {
  nbp: NbpRoeItem = new NbpRoeItem() ;
  loading: boolean;
  roeDate: Date

  constructor( private nbpService: NbpService) {
  }

  ngOnInit() {
    this.nbpService.getRoeList()
      .subscribe(
        (data:NbpRoeItem)=> this.nbp = data,
        err => this.nbp = new NbpRoeItem()
      );

  }

  roeDateChanged(date:Date) {
    console.log(date);
    this.getRoeForDate(date);
  }

   getRoeForDate(date:Date){
    this.nbpService.getRoeListForDate(date)
      .subscribe(
        (data:NbpRoeItem)=> this.nbp = data,
        err => this.nbp = new NbpRoeItem()
      );
  }

 private getList():void {
    this.nbpService
    .getRoeList()
    .subscribe((data:any)=> this.nbp =data,
      error=>console.log(error),
       ()=>console.log("getting roeList completed"));

    console.log("got", this.nbp);
 }
}


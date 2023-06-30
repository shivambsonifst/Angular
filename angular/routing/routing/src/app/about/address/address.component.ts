import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

address! : string;

constructor(private route:ActivatedRoute){}


ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    console.log(params);
    this.address = params['address'];
    console.log(this.address);
  })
}

}

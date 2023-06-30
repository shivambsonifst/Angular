import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  name!: string;

constructor(private route:ActivatedRoute){ }

/* Access data from Route URL (Route Params) */
ngOnInit(): void {
  this.route.queryParams.subscribe(params => {

    console.log(params);
    this.name = params['name'];
    console.log(this.name); 
  });  
}

}

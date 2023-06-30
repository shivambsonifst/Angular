import { OnInit,Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
email!: string;

constructor(private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {

    console.log(params);
    this.email = params['email'];
    console.log(this.email);
  })
}

}

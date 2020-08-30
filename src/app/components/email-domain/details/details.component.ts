import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailDomainService} from '../../../services/email-domain.service';
import {EmailDomain} from '../../../models/email-domain';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  emailDomain: EmailDomain;

  constructor(private route: ActivatedRoute, private emailDomainService: EmailDomainService, private router: Router) { }

  ngOnInit(): void {
    this.emailDomain = new EmailDomain();

    this.id = this.route.snapshot.params.id;

    this.emailDomainService.getDomain(this.id)
        .subscribe(data => {
          console.log(data);
          this.emailDomain = data.content;
        }, error => console.log(error));
  }

  list() {
    this.router.navigate(['list']);
  }
}

import { Component, OnInit } from '@angular/core';
import {EmailDomain} from '../../../models/email-domain';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailDomainService} from '../../../services/email-domain.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  emailDomain: EmailDomain;
  submitted: any;

  constructor(private emailDomainService: EmailDomainService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.emailDomain = new EmailDomain();

    this.id = this.route.snapshot.params.id;

    this.emailDomainService.getDomain(this.id)
        .subscribe(data => {
          console.log(data);
          this.emailDomain = data.content;
        }, error => console.log(error));
  }
  updateDomain() {
    this.emailDomainService.updateDomain(this.id, this.emailDomain)
        .subscribe(data => console.log(data), error => console.log(error));
    this.emailDomain = new EmailDomain();
    this.gotoList();
  }

  onSubmit() {
    this.updateDomain();
  }

  gotoList() {
    this.router.navigate(['list']);
  }
}

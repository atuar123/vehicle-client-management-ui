import { Component, OnInit } from '@angular/core';
import {EmailDomainService} from '../../../services/email-domain.service';
import {Router} from '@angular/router';
import {EmailDomain} from '../../../models/email-domain';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  emailDomain: EmailDomain = new EmailDomain();
  submitted = false;

  constructor(private emailDomainService: EmailDomainService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.emailDomainService.createDomain(this.emailDomain)
        .subscribe(data => console.log(data), error => console.log(error));
    this.emailDomain = new EmailDomain();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/list']);
  }

}

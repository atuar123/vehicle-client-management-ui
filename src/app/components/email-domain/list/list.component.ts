import { Component, OnInit } from '@angular/core';
import {EmailDomain} from '../../../models/email-domain';
import {EmailDomainService} from '../../../services/email-domain.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  emailDomain: EmailDomain[] = [];

  constructor(private emailDomainService: EmailDomainService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.emailDomainService.getDomains().subscribe(
        (data: any) => {
          this.emailDomain = data.content;
          console.log(this.emailDomain);
        });
  }

  updateDomainName(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteDomainName(id: number) {
    this.emailDomainService.deleteDomain(id)
        .subscribe(
            data => {
              console.log(data);
              this.loadData();
            },
            error => console.log(error)
        );
  }

  domainNameDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}

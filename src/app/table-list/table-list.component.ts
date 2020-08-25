import { Component, OnInit } from '@angular/core';
import {EmailDomainService} from '../services/email-domain.service';
import {EmailDomain} from '../models/email-domain';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  emailDomain: EmailDomain[] = [];

  constructor(private emailDomainService: EmailDomainService) { }

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

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateComponent } from './email-domain/create/create.component';
import { ListComponent } from './email-domain/list/list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { UpdateComponent } from './email-domain/update/update.component';
import { DetailsComponent } from './email-domain/details/details.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        FormsModule,
    ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent,
    DetailsComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    SharedModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }

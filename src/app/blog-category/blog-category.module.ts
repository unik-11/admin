import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCategoryRoutingModule } from './blog-category-routing.module';
import { BlogCategoryComponent } from './blog-category.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [BlogCategoryComponent],
  imports: [
    CommonModule,
    BlogCategoryRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule
  ]
})
export class BlogCategoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CountriesService } from './countries.service';



@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{path:"",component:CountriesComponent}])
  ],
  providers:[CountriesService],
  exports:[CountriesComponent]
})
export class CountriesModule { }

import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { MapModule } from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component'

import { RentalService } from './shared/rental.service';
import { BookingService } from '../booking/shared/booking.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

import { HelperService } from '../common/service/helper.service';

import { HttpClientModule } from '@angular/common/http';
import {UppercasePipe} from '../common/pipes/uppercase.pipe';

import { AuthGuard } from '../auth/shared/auth.guard';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';

const routes: Routes = [
  {path:'rentals',
   component: RentalComponent,
   children:[
     {path: "", component: RentalListComponent },
     {path: ":rentalId", component: RentalDetailComponent, canActivate: [AuthGuard]},
   ]
 },
]

@NgModule({
    declarations: [
      RentalComponent,
      RentalListComponent,
      RentalListItemComponent,
      RentalDetailComponent,
      UppercasePipe,
      RentalDetailBookingComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      HttpClientModule,
      MapModule,
      Daterangepicker,
      FormsModule,
    ],

    providers:[RentalService,
               HelperService,
                BookingService,],
})
export class RentalModule {

}

import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

import { MapService } from './map.service';
import { CamelizePipe } from 'ngx-pipes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBi6c5rvlrnwYT2u-aAaaMA1Pwy56FUK1E'
        }),
    CommonModule,    
  ],
  providers: [
    MapService,
     CamelizePipe,
  ],
})
export class MapModule { }

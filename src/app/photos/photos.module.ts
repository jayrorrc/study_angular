import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    exports: [],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        
        CommonModule
    ],
})
export class PhotosModule {}

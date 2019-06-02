import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
    exports: [],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        CommonModule,
        RouterModule,
        PhotoDetailsModule
    ],
})
export class PhotosModule {}

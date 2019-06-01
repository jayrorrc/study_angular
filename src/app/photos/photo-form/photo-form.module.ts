import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

import { PhotoFormComponent } from './photo-form.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        PhotoModule
    ]
})
export class PhotoFormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoDetailsComponet } from './photo-details.component';

@NgModule({
    declarations: [
        PhotoDetailsComponet
    ],
    exports: [
        PhotoDetailsComponet
    ],
    imports: [
        CommonModule
    ]
})
export class PhotoDetailsModule {}

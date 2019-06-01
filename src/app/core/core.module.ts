import { NgModule } from '@angular/core';
import { HeaderComponet } from './header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeaderComponet
    ],
    exports: [
        HeaderComponet
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule {}

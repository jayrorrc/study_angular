import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComments } from '../../photo/photo-comments';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    photoComments$: Observable<PhotoComments[]>;
    commentForm: FormGroup;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.photoComments$ = this.photoService
            .getComments(this.photoId);

        this.commentForm =this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        });
    }

}

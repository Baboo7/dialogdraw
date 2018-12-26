import { NgModule } from '@angular/core';

import {
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
    ]
})
export class MaterialModule { }

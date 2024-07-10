import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../shared/shared.module';
import { SubjectsComponent } from './subjects/subjects.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AllExercisesComponent } from './all-exercises/all-exercises.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [
    StudentsComponent,
    SubjectsComponent,
    AllExercisesComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTabsModule


  ]
})
export class StudentsModule { }

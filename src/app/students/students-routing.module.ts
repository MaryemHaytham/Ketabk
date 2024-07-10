import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AllExercisesComponent } from './all-exercises/all-exercises.component';

const routes: Routes = [
  { path: '', component: StudentsComponent,children:[
    { path: 'subjects', component: SubjectsComponent, title: 'subjects' },
  { path: 'all-exercises', component: AllExercisesComponent, title: 'all-exercises'},]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

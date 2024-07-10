import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectService } from '../service/subject.service';



@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: any[] = [];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectsInfo()
    
  }
  subjectsInfo(){
    this.subjectService.getSubjects().subscribe(data => {
      this.subjects = data;
      console.log(data)
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../studentmodel/students.service';
import { StudentModel } from '../studentmodel/student.model';

@Component({
  selector: 'app-studentmodel',
  templateUrl: './studentmodel.component.html',
  styleUrls: ['./studentmodel.component.css']
})
export class StudentmodelComponent implements OnInit {
  students: StudentModel[];
  constructor(private _studentService: StudentsService) {}

  ngOnInit() {
    this.getStudents();
    console.log(this.students);
  }

  public getStudents() {
    this._studentService.getStudents().subscribe((data: StudentModel[]) => {
      this.students = data;
    });
  }
}

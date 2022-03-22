import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from 'src/app/_models';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[];
  employeeToBeDeleted: Employee;
  filterText: string = '';
  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(employees => this.employees = employees);
  }

  deleteEmployee() {
    let id = this.employeeToBeDeleted.id;
    const employee = this.employees.find(x => x.id === id);
    if (!employee) return;
    employee.isDeleting = true;
    this.employeeService.delete(id)
        .subscribe((data) => {
          this.employees = this.employees.filter(x => x.id !== id);
          alert('Deleted successfully');
        });
  }

  filterEmployees(){
    this.employeeService.search(this.filterText).subscribe(employees => this.employees = employees);
  }

}

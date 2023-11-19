import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { switchMap } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  index_page: number = 0;
  users_pag: number = 5;
  users_total: number = 0;

  users: User[] = [];

  displayedColumns: string[] = ['username', 'roles', 'company', 'age', 'email'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private usersServices: UsersService
  ) { }

  ngOnInit(): void {
    // Recibo los primero usuarios con valores iniciales
    this.usersServices.getWithPaginate(this.users_pag, this.index_page).subscribe(res => {
      this.users = res.elements;
      this.users_total = res.length;
      this.dataSource.data = this.users;
    });

  }

  ngAfterViewInit() {
    // Me subscribo a los cambios del paginador para luego con esos datos tambien hacerlo al get de usuarios
    this.paginator.page
      .pipe(
        switchMap(values => {
          this.users_pag = values.pageSize;
          this.index_page = values.pageIndex;
          return this.usersServices.getWithPaginate(this.users_pag, this.index_page)
        })
      )
      .subscribe(
        (data) => {
          this.users = data.elements;
          this.users_total = data.length;
          this.dataSource.data = this.users;
        }
      );
  }
}

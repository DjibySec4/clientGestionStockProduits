import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataModel } from '../shared/data.model';
import { User} from '../shared/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User = new User();

  usersModel : DataModel[];

  users : User[];

  userForm : FormGroup;

  constructor(public userService: UserService,  private route : ActivatedRoute,
    private fb : FormBuilder) { }

  ngOnInit(): void {
    this.users = this.route.snapshot.data.users;

    this.userForm = this.fb.group({
      username : ["", Validators.required],
    });

    this.usersModel = [
      new DataModel('id','ID','number',true,[]),
      new DataModel('username','Nom d\'utilisateur','string',false,[]),
      new DataModel('enable','Actif','number', true,[]),
  ];
  }






}

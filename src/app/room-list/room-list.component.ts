import { Component } from '@angular/core';
import { Room } from '../entities';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
  list:Room[] =[
    {id:1,name:"living room",surface:123,opened:true},
    {id:2,name:"bed room",surface:80,opened:true},
    {id:3,name:"Bathroom",surface:60,opened:false},
  ];
  nRoom:Room ={id:0,name:'',surface:0,opened:false};
  newRoom(){
    this.list.push({...this.nRoom});
  }
}
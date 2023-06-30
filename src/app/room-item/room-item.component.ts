import { Component, Input } from '@angular/core';
import { Room } from '../entities';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent {
  @Input({required:true})
  room:Room;

  doorBool(){
    this.room.opened =!this.room.opened;
  }
}

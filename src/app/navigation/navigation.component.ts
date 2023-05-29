import { Component, Output } from '@angular/core';
import { EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Output() onChanged = new EventEmitter<string>();
  ChageCategory(category:any) {
      this.onChanged.emit(category);
  }
}

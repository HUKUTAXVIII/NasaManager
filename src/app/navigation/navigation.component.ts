import { Component, Output } from '@angular/core';
import { EventEmitter, Input} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private authService: AuthService) { }

  @Output() onChanged = new EventEmitter<string>();
  ChageCategory(category:any) {
      this.onChanged.emit(category);
  }


  getToken(): string {
    return this.authService.getToken();
  }

}

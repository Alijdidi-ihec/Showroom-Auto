import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  imports: [FontAwesomeModule],
  selector: 'app-head',
  styleUrl: './head.bar.css',
  templateUrl: './head.bar.html',
})
export class HeadBar {
  faHeart = faHeart
  faCartShopping = faCartShopping
  @Input() favoritesCount = 0
  @Input() cartCount = 0
  @Output() onToggleCart = new EventEmitter<void>()
}

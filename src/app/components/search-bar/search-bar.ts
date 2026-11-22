import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';
import { stockLabel, stockLevel } from '../../interfaces/stock';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnChanges {
  faMagnifyingGlass = faMagnifyingGlass
  faHeart = faHeart
  stockLevel = stockLevel
  stockLabel = stockLabel

  @Input() autos: Auto[] = []
  @Input() favorites: number[] = []
  @Output() onSelectCar = new EventEmitter<Auto>()
  @Output() onToggleFavorite = new EventEmitter<Auto>()
  @Output() onReserve = new EventEmitter<Auto>()

  selectedAutos: Auto[] = []
  brandFilter = ''
  onlyFavorites = false

  ngOnChanges() {
    this.applyFilters();
  }
  selectAutos(selectedBrand: string) {
    this.brandFilter = selectedBrand.trim().toLowerCase();
    this.applyFilters();
  }
  toggleOnlyFavorites() {
    this.onlyFavorites = !this.onlyFavorites;
    this.applyFilters();
  }
  applyFilters() {
    this.selectedAutos = this.autos.filter(auto =>
      auto.brand.toLowerCase().startsWith(this.brandFilter) &&
      (!this.onlyFavorites || this.favorites.includes(auto.id))
    );
  }
  isFavorite(auto: Auto): boolean {
    return this.favorites.includes(auto.id)
  }
  selectCar(auto: Auto) {
    this.onSelectCar.emit(auto)
  }
}

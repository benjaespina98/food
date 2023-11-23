import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  days: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  selectedDay: string | null = null;
  meals: string[] = ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'];

  showMeals(day: string) {
    if (this.selectedDay === day) {
      this.selectedDay = null;
    } else {
      this.selectedDay = day;
    }
  }
}

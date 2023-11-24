import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  days: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  selectedDay: string | null = null;
  menus: { [key: string]: string[][] } = {
    Lunes: [
      [
        'Desayuno: Omelette de espinacas y queso con una porción de frutas (banana, naranja) y agua',
        'Almuerzo: Milanesas de pollo al horno con ensalada de lechuga, tomate y rodajas de banana, acompañado con limonada',
        'Merienda: Yogur natural con frutos secos y agua',
        'Cena: Pescado a la parrilla con zanahorias y zapallitos al vapor, acompañado con agua'
      ],
      [
        'Desayuno: Batido de proteínas con espinacas, banana y leche de almendras y agua',
        'Almuerzo: Pechuga de pollo a la plancha con ensalada de zanahoria rallada, tomate y naranja en gajos, acompañado con limonada',
        'Merienda: Rodajas de manzana con mantequilla de almendras y agua',
        'Cena: Bistec a la plancha con ensalada mixta y huevo duro, acompañado con agua'
      ],
    ],
    Martes: [
      [
        'Desayuno: Taza de yogur natural con nueces y una porción de frutas (mandarina, manzana) y agua',
        'Almuerzo: Sopa de verduras con albóndigas de carne y rodajas de naranja, acompañado con agua',
        'Merienda: Queso fresco con bastones de zanahoria y agua',
        'Cena: Salmón al horno con ensalada de lechuga, tomate y huevo duro, acompañado con agua'
      ],
      [
        'Desayuno: Revuelto de huevo con espinacas y queso, acompañado de una porción de frutas (banana, manzana) y agua',
        'Almuerzo: Ensalada griega con pollo a la parrilla (pepino, tomate, aceitunas, queso feta) y rodajas de mandarina, acompañado con limonada',
        'Merienda: Puñado de almendras y nueces y agua',
        'Cena: Berenjenas rellenas de carne y vegetales al horno, acompañado con agua'
      ],
    ],
    Miercoles: [
      [
        'Desayuno: Batido de bayas con espinacas, huevo y nueces, acompañado de una porción de frutas (naranja, manzana) y agua',
        'Almuerzo: Bistec de ternera con ensalada de zapallitos y una porción de frutas (mandarina, manzana), acompañado con agua',
        'Merienda: Queso fresco con rodajas de banana y agua',
        'Cena: Pollo al curry con rodajas de naranja, acompañado con agua'
      ],
      [
        'Desayuno: Omelette de champiñones con una porción de frutas (mandarina, manzana) y agua',
        'Almuerzo: Pescado al horno con ensalada de lechuga, tomate y rodajas de banana, acompañado con agua',
        'Merienda: Puñado de almendras y nueces y agua',
        'Cena: Ensalada de salmón ahumado con huevo duro y frutas (banana, naranja), acompañado con agua'
      ],
    ],
    Jueves: [
      [
        'Desayuno: Batido de proteínas con espinacas, maní sin sal y una porción de frutas (manzana, mandarina) y agua',
        'Almuerzo: Pollo a la parrilla con ensalada de zanahoria rallada, cebolla y una porción de frutas (naranja, banana), acompañado con agua',
        'Merienda: Queso fresco con rodajas de mandarina y agua',
        'Cena: Bistec a la plancha con ensalada mixta y huevo duro, acompañado con agua'
      ],
      [
        'Desayuno: Omelette de queso y tomate con una porción de frutas (banana, manzana) y agua',
        'Almuerzo: Salmón al horno con batata asada y una porción de frutas (naranja, mandarina), acompañado con agua',
        'Merienda: Puñado de almendras y nueces y agua',
        'Cena: Ensalada de carne de vaca con zapallo anco asado y rodajas de naranja, acompañado con agua'
      ],
    ],
    Viernes: [
      [
        'Desayuno: Yogur natural con frutos secos y una porción de frutas (banana, manzana) y agua',
        'Almuerzo: Ensalada de pollo con lechuga, tomate, cebolla y una porción de frutas (naranja, mandarina), acompañado con limonada',
        'Merienda: Rodajas de manzana con mantequilla de almendras y agua',
        'Cena: Pescado a la parrilla con calabacines grillados y una porción de frutas (mandarina, banana), acompañado con agua'
      ],
      [
        'Desayuno: Batido de frutos rojos con espinacas, nueces y una porción de frutas (naranja, manzana) y agua',
        'Almuerzo: Bistec de ternera con ensalada de zapallitos y zanahorias ralladas y una porción de frutas (mandarina, banana), acompañado con agua',
        'Merienda: Queso fresco con bastones de zanahoria y agua',
        'Cena: Pollo al curry con zapallo anco asado y una porción de frutas (naranja, manzana), acompañado con agua'
      ],
    ],
    Sabado: [
      [
        'Desayuno: Omelette de espinacas y queso con una porción de frutas (banana, naranja) y agua',
        'Almuerzo: Pescado al horno con ensalada de lechuga, tomate y rodajas de mandarina, acompañado con agua',
        'Merienda: Yogur natural con frutos secos y agua',
        'Cena: Pollo a la parrilla con ensalada mixta y una porción de frutas (manzana, naranja), acompañado con agua'
      ],
      [
        'Desayuno: Batido de proteínas con espinacas, banana y leche de almendras y agua',
        'Almuerzo: Bistec a la plancha con ensalada de zapallitos y zanahorias ralladas y una porción de frutas (mandarina, manzana), acompañado con agua',
        'Merienda: Puñado de almendras y nueces y agua',
        'Cena: Ensalada de salmón ahumado con huevo duro y frutas (banana, naranja), acompañado con agua'
      ],
    ],
    Domingo: [
      [
        'Desayuno: Batido de proteínas con espinacas, huevo y nueces y agua',
        'Almuerzo (Asado): Asado con carne de vaca, chorizo, morcilla, ensalada mixta y una porción de frutas (mandarina, banana) y una copa de vino',
        'Merienda: Puñado de almendras y una porción de frutas (manzana, naranja) y agua',
        'Cena: Ensalada de pollo con lechuga, tomate, cebolla y una porción de frutas (banana, naranja) y agua'
      ],
      [
        'Desayuno: Omelette de champiñones con una porción de frutas (mandarina, manzana) y agua',
        'Almuerzo: Pescado a la parrilla con ensalada de lechuga, tomate y una porción de frutas (naranja, banana) y agua',
        'Merienda: Rodajas de manzana con mantequilla de almendras y agua',
        'Cena: Bistec de ternera con ensalada de zapallitos y zanahorias ralladas y una porción de frutas (manzana, naranja) y agua'
      ],
    ],

  };
  selectedMenu: string | null = null;

  showMenu(day: string) {
    if (this.selectedDay === day) {
      this.selectedDay = null;
    } else {
      this.selectedDay = day;
    }
    this.selectedMenu = null; // Reiniciar el menú seleccionado al cambiar de día
  }

  showSubMenu(menu: string) {
    if (this.selectedMenu === menu) {
      this.selectedMenu = null;
    } else {
      this.selectedMenu = menu;
    }
  }

  isSelectedMenu(day: string, menu: string): boolean {
    return this.selectedDay === day && this.selectedMenu === menu;
  }

  getMenuForDay(day: string): string[] {
    return this.menus[day].map((_menu, index) => `Menú ${index + 1}`);
  }

  getMenuItems(day: string, menu: string): string[] {
    const menuIndex = parseInt(menu.split(' ')[1]) - 1;
    return this.menus[day][menuIndex];
  }
}

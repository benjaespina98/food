import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  days: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  selectedDay: string | null = null;
  menus: { [key: string]: string[][] } = {
    Lunes: [
      [
        'Desayuno: Dos panes nube en sándwich (con una feta de queso descremado y una feta de jamón cocido) + infusión con leche descremada con edulc.',
        'Media mañana: Una fruta + un puñado de frutos secos.',
        'Almuerzo:  Bife de pollo a la plancha con ensalada de rucula, tomate y palta + 2 vasos de agua',
        'Merienda: Dos frutas cortadas y un puñado de frutos secos + infusión con leche descremada con edulc.',
        'Cena: Omelette (2 huevos) relleno de queso con ensalada de zanahoria rallada, tomate y choclo + 2 vasos de agua',
      ],
      
    ],
    Martes: [
      [
        'Desayuno: Un huevo revuelto, dos rollitos de jamón cocido y queso descremado y un puñado de frutos secos + infusión con leche descremada con edulc.',
        'Media mañana: Un yogur descremado + una fruta.',
        'Almuerzo: Costeleta de cerdo con verduras al horno (calabaza, zanahoria, berenjena, pimiento y cebolla) + 2 vasos de agua',
        'Merienda: Una rodaja de pan integral con una feta de queso descremado y una feta de jamón cocido + infusión con leche descremada con edulc.',
        'Cena: Ensalada de tomate, zanahoria rallada, lentejas, atun, un huevo duro y trocitos de queso + 2 vasos de agua',
      ],
    ],
    Miercoles: [
      [
        'Desayuno: Bowl con yogur descremado, un puñado de frutos secos y una fruta cortada + infusión con leche descremada con edulc.',
        'Media mañana: Un yogur descremado + un puñado de frutos secos.',
        'Almuerzo: Bife de carne con revuelto de zapallitos + 2 vasos de agua',
        'Merienda: Una rodaja de pan integral con trocitos de palta y un huevo revuelto + infusión con leche descremada con edulc.',
        'Cena: Hamburguesa de legumbres (NUTREE) con ensalada de zanahoria rallada y un huevo duro + 2 vasos de agua',
      ],
    ],
    Jueves: [
      [
        'Desayuno: Una tostada de pan integral con queso untable descremado y un huevo revuelto + infusión con leche descremada con edulc.',
        'Media mañana: Una barrita de cereal (sugiero marca INTEGRA) + una fruta.',
        'Almuerzo: Canelones de verdura + 2 vasos de agua',
        'Merienda: Yogur descremado, 2 cucharadas de granola sin azúcar o de frutos secos y una fruta cortada + infusión con leche descremada con edulc.',
        'Cena: Milanesa de carne al horno con ensalada de lechuga y tomate + 2 vasos de agua',
      ],
      
    ],
    Viernes: [
      [
        'Desayuno: Una tostada de pan integral con queso untable descremado y mermelada sin azúcar y una fruta cortada + infusión con leche descremada con edulc.',
        'Media mañana: Un huevo revuelto con dos rollitos de jamón cocido y queso descremado.',
        'Almuerzo:  Bife de pollo a la plancha con rodajas de calabaza a la pizza (queso + tomate) al horno + 2 vasos de agua',
        'Merienda: 4 galletitas de salvado con queso untable descremado y mermelada sin azúcar y una fruta cortada + infusión con leche descremada con edulc.',
        'Cena: Tarta de atún (sólo con la masa de base), 2 porciones + ensalada + 2 vasos de agua',
      ],
      
    ],
    Sabado: [
      [
        'Desayuno: 4 galletitas de salvado con queso untable descremado y mermelada sin azúcar y una fruta cortada + infusión con leche descremada con edulc.',
        'Media mañana: Un yogur descremado + una fruta.',
        'Almuerzo:  Milanesa de soja con tortillitas de zanahoria + 2 vasos de agua',
        'Merienda: Pan nube con queso untable descremado y una fruta cortada + infusión con leche descremada con edulc.',
        'Cena: Lomo al plato + 2 vasos de agua'
      ],

    ],
    Domingo: [
      [
        'Desayuno: Bowl con yogur descremado, un puñado de frutos secos y una fruta cortada + infusión con leche descremada con edulc.',
        'Media mañana: Un yogur descremado + un puñado de frutos secos.',
        'Almuerzo: Carne asada con ensalada o verduras a la parrilla + 2 vasos de agua',
        'Merienda: Un yogur descremado y una barrita de cereal (INTEGRAL) + infusión con leche descremada con edulc.',
        'Cena: Revuelto de arvejas con verduras al horno o ensalada + 2 vasos de agua'  
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
  }


 
  

  getMenuForDay(day: string): string[] {
    return this.menus[day].map((_menu, index) => `Menú ${index + 1}`);
  }

  getMenuItems(day: string, menu: string): string[] {
    const menuIndex = parseInt(menu.split(' ')[1]) - 1;
    return this.menus[day][menuIndex];
  }
}

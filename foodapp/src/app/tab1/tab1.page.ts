import { Component } from '@angular/core';

export interface Food {
  name: string;
  portion: string;
}

export interface Category {
  name: string;
  image?: string;
  foods: Food[];
  expanded: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  categories: Category[] = [
    {
      name: 'Almidones',
      image: 'assets/bread48x48.png',
      foods: [
        { name: 'Pan árabe', portion: '1 unidad grande' },
        // Resto de los alimentos de la categoría Almidones
      ],
      expanded: false
    },
    {
      name: 'Panes',
      image: 'assets/bread48x48.png',
      foods: [
        { name: 'Pan de hamburguesa', portion: '1 unidad' },
        // Resto de los alimentos de la categoría Panes
      ],
      expanded: false
    },
    {
      name: 'Frutas',
      image: 'assets/redapple256x256.png',
      foods: [
        { name: 'Pan de hamburguesa', portion: '1 unidad' },
        // Resto de los alimentos de la categoría Panes
      ],
      expanded: false
    },
    {
      name: 'Frutas',
      image: 'assets/redapple512x512.png',
      foods: [
        { name: 'Pan de hamburguesa', portion: '1 unidad' },
        // Resto de los alimentos de la categoría Panes
      ],
      expanded: false
    },
  ];

  toggleCategory(category: Category) {
    category.expanded = !category.expanded;
  }

  constructor() { }
}

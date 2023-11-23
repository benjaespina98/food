import { Component } from '@angular/core';

interface Food {
  name: string;
  tamPorcion: string;
  carbs: number;
  category: string; // Agregar la categoría a cada alimento
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  allFoods: Food[] = [

  ];

  searchResults: Food[] = [];
  selectedFood: Food | null = null;
  selectedCategory: string = 'harinas'; // Categoría seleccionada por defecto

  constructor() {
    const harinas: Food[] = [
      { name: 'Pan Árabe', tamPorcion: '1 unidad grande', carbs: 30, category: 'harinas' },
      { name: 'Pan de Hamburguesa', tamPorcion: '1 unidad', carbs: 30, category: 'harinas' },
      { name: 'Pan blanco, integral, salvado', tamPorcion: '1 rebanada', carbs: 15, category: 'harinas' },
      { name: 'Pan francés', tamPorcion: '1 mignón chico', carbs: 15, category: 'harinas' },
      { name: 'Pan de pancho', tamPorcion: '1 unidad', carbs: 30, category: 'harinas' },
      { name: 'Pan pebete', tamPorcion: '1 unidad', carbs: 30, category: 'harinas' },
      { name: 'Tortilla de maíz', tamPorcion: '1 unidad', carbs: 15, category: 'harinas' },
      { name: 'Sandwich de miga', tamPorcion: '1 triángulo', carbs: 15, category: 'harinas' },
      { name: 'Pancito de salvado', tamPorcion: '1 unidad (25g)', carbs: 15, category: 'harinas' },
      { name: 'Pan rallado', tamPorcion: '1 cda sopera (p/ una milanesa chica)', carbs: 15, category: 'harinas' },
    ];

    const galletitas: Food[] = [
      { name: 'Bizcochitos de arroz salados', tamPorcion: '16 unidades', carbs: 15, category: 'galletitas' },
      { name: 'Bizcochitos de arroz dulces', tamPorcion: '13 unidades', carbs: 15, category: 'galletitas' },
    ];
    const cereales: Food[] = [
      { name: 'Arroz blanco, arroz integral (cocido)', tamPorcion: '1/3 taza', carbs: 15, category: 'cereales' },
      { name: 'Avena arrollada', tamPorcion: '1/3 taza', carbs: 15, category: 'cereales' },
    ];
    const pastas: Food[] = [
      { name: 'Ravioles', tamPorcion: '½ plato playo', carbs: 30, category: 'pastas' },
      { name: 'Pasta seca (cocida)', tamPorcion: '½ plato playo', carbs: 30, category: 'pastas' },
    ];

    this.allFoods = [...harinas, ...galletitas,...cereales,...pastas];
    this.searchResults = this.allFoods.filter(food => food.category === this.selectedCategory);
  }

  searchFood(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === '') {
      // Si no hay término de búsqueda, mostrar todos los alimentos de la categoría actual
      this.searchResults = this.allFoods.filter(food => food.category === this.selectedCategory);
      return;
    }

    // Filtrar los alimentos de la categoría actual según el término de búsqueda
    this.searchResults = this.allFoods.filter(food =>
      food.name.toLowerCase().includes(searchTerm) && food.category === this.selectedCategory
    );
  }


  showDetails(food: Food) {
    if (this.selectedFood === food) {
      this.selectedFood = null; // Cerrar si ya está abierto
    } else {
      this.selectedFood = food;
    }
  }
  onCategoryChange(event: any) {
    this.selectedCategory = event.detail.value;
    this.searchResults = this.allFoods.filter(food => food.category === this.selectedCategory);
  }
}

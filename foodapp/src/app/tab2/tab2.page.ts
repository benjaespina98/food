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
  selectedCategory: string = 'almidones'; // Categoría seleccionada por defecto

  constructor() {
    const almidones: Food[] = [
      // Panes
      { name: 'Pan Árabe', tamPorcion: '1 unidad grande', carbs: 30, category: 'almidones' },
      { name: 'Pan de Hamburguesa', tamPorcion: '1 unidad', carbs: 30, category: 'almidones' },
      { name: 'Pan blanco, integral, salvado', tamPorcion: '1 rebanada', carbs: 15, category: 'almidones' },
      { name: 'Pan francés', tamPorcion: '1 mignón chico', carbs: 15, category: 'almidones' },
      { name: 'Pan de pancho', tamPorcion: '1 unidad', carbs: 30, category: 'almidones' },
      { name: 'Pan pebete', tamPorcion: '1 unidad', carbs: 30, category: 'almidones' },
      { name: 'Tortilla de maíz', tamPorcion: '1 unidad', carbs: 15, category: 'almidones' },
      { name: 'Sandwich de miga', tamPorcion: '1 triángulo', carbs: 15, category: 'almidones' },
      { name: 'Pancito de salvado', tamPorcion: '1 unidad (25 g)', carbs: 15, category: 'almidones' },
      { name: 'Pan rallado', tamPorcion: '1 cda sopera (p/ una milanesa chica)', carbs: 15, category: 'almidones' },
      
      // Galletitas saladas
      { name: 'Bizcochitos de arroz salados', tamPorcion: '16 unidades', carbs: 15, category: 'almidones' },
      { name: 'Bizcochitos de arroz dulces', tamPorcion: '13 unidades', carbs: 15, category: 'almidones' },
      { name: 'Galletas de arroz rectangulares', tamPorcion: '2 unidades', carbs: 15, category: 'almidones' },
      { name: 'Galletas de arroz redondas', tamPorcion: '2 unidades', carbs: 15, category: 'almidones' },
      { name: 'Bizcochitos de grasa', tamPorcion: '5 unidades', carbs: 15, category: 'almidones' },
      { name: 'Galletitas de agua o de salvado chicas', tamPorcion: '5 unidades', carbs: 15, category: 'almidones' },
      { name: 'Galletitas de agua o de salvado grandes', tamPorcion: '3 unidades', carbs: 15, category: 'almidones' },
      { name: 'Grisines o talitas finitas', tamPorcion: '3 unidades', carbs: 15, category: 'almidones' },
      { name: 'Galletitas Club Social', tamPorcion: '2 unidades', carbs: 15, category: 'almidones' },

      
      // Cereales
      { name: 'Arroz blanco, arroz integral (cocido)', tamPorcion: '1/3 taza', carbs: 15, category: 'almidones' },
      { name: 'Avena arrollada', tamPorcion: '1/3 taza', carbs: 15, category: 'almidones' },
      { name: 'Harina', tamPorcion: '2 cdas soperas', carbs: 15, category: 'almidones' },
      { name: 'Cebada, centeno, quinoa (crudo)', tamPorcion: '2 cdas soperas', carbs: 15, category: 'almidones' },
      { name: 'Harina de maíz (cocido)', tamPorcion: '1/3 taza', carbs: 15, category: 'almidones' },
      { name: 'Almidón de maíz (maicena)', tamPorcion: '1 cda sopera', carbs: 15, category: 'almidones' },
      { name: 'Salvado de avena', tamPorcion: '4 cdas soperas', carbs: 15, category: 'almidones' },
      { name: 'Trigo burgol', tamPorcion: '1/2 taza', carbs: 15, category: 'almidones' },
      { name: 'Cous cous cocido', tamPorcion: '1/2 taza', carbs: 15, category: 'almidones' },

      // Pastas
      { name: 'Ravioles', tamPorcion: '½ plato playo', carbs: 30, category: 'almidones' },
      { name: 'Pasta seca (cocida)', tamPorcion: '½ plato playo', carbs: 30, category: 'almidones' },
      { name: 'Pasta, cocida', tamPorcion: '½ taza', carbs: 15, category: 'almidones' },
      { name: 'Canelón', tamPorcion: '1 unidad', carbs: 15, category: 'almidones' },
      { name: 'Ñoquis', tamPorcion: '10 unidades', carbs: 15, category: 'almidones' },
      { name: 'Ñoquis de sémola', tamPorcion: '2 unidades', carbs: 15, category: 'almidones' },
      { name: 'Capeletini', tamPorcion: '½ plato playo', carbs: 30, category: 'almidones' },
      { name: 'Lasagna', tamPorcion: '3 láminas', carbs: 30, category: 'almidones' },
      { name: 'Masa de panqueque', tamPorcion: '2 unidades', carbs: 15, category: 'almidones' },
      { name: 'Masa de tarta', tamPorcion: '1 porción (1/8)', carbs: 15, category: 'almidones' },
      { name: 'Tapa de empanada', tamPorcion: '1 unidad', carbs: 15, category: 'almidones' },
      { name: 'Pizza a la piedra', tamPorcion: '1/8 de pizza', carbs: 15, category: 'almidones' },
      { name: 'Tapa de empanada árabe', tamPorcion: '1 unidad', carbs: 20, category: 'almidones' },

      // Legumbres
      { name: 'Lentejas, porotos, garbanzos, arvejas cocidas', tamPorcion: '½ taza', carbs: 15, category: 'almidones' },
      { name: 'Soja cocida', tamPorcion: '1 taza', carbs: 15, category: 'almidones' },
      { name: 'Milanesa de soja', tamPorcion: '1 unidad (80 g)', carbs: 20, category: 'almidones' },
      { name: 'Habas cocidas', tamPorcion: '½ taza', carbs: 15, category: 'almidones' },

      // Vegetales con alto contenido en almidón
      { name: 'Papa', tamPorcion: '1 unidad chica (100 g)', carbs: 15, category: 'almidones' },
      { name: 'Batata', tamPorcion: '½ unidad chica (100 g)', carbs: 30, category: 'almidones' },
      { name: 'Choclo entero', tamPorcion: '½ unidad', carbs: 15, category: 'almidones' },
      { name: 'Choclo, granos', tamPorcion: '½ taza', carbs: 15, category: 'almidones' },
      { name: 'Puré de batatas', tamPorcion: '½ taza', carbs: 30, category: 'almidones' },
      { name: 'Puré de papas', tamPorcion: '½ taza', carbs: 15, category: 'almidones' },
      { name: 'Puré de papas comercial', tamPorcion: '2 cucharadas soperas', carbs: 15, category: 'almidones' },
      { name: 'Mandioca', tamPorcion: '½ unidad (100 g)', carbs: 30, category: 'almidones' },
      { name: 'Calabaza / Zapallo', tamPorcion: '1 taza cocido o 2 rodajas', carbs: 15, category: 'almidones' },
      { name: 'Palta', tamPorcion: '1 unidad mediana', carbs: 15, category: 'almidones' },
      { name: 'Remolacha', tamPorcion: '1 taza cocida o 1 un. 150 g', carbs: 15, category: 'almidones' },
      { name: 'Zanahoria', tamPorcion: '1 unidad grande (200 g)', carbs: 15, category: 'almidones' },

      // Ingredientes de copeetín
      { name: 'Papas fritas /chizitos /palitos salados', tamPorcion: '½ taza', carbs: 15, category: 'almidones' },
      { name: 'Doritos', tamPorcion: '1 bolsa de 50 g', carbs: 30, category: 'almidones' },
      { name: 'Tapa de empanadas de copetin', tamPorcion: '2 unidades', carbs: 15, category: 'almidones' },
      { name: 'Snacks de arroz', tamPorcion: '1 taza', carbs: 15, category: 'almidones' },

      // Cereales comerciales
      { name: 'Barra de cereal', tamPorcion: '1 unidades', carbs: 15, category: 'almidones' },
      { name: 'Copos de maíz, trigo o arroz', tamPorcion: '½ taza', carbs: 15, category: 'almidones' },
      { name: 'Copos azucarados o de chocolate', tamPorcion: '¼ taza', carbs: 15, category: 'almidones' },
      { name: 'Copos con salvado', tamPorcion: '½ taza', carbs: 15, category: 'almidones' },
      { name: 'Cuadraditos de avena', tamPorcion: '1/3 taza', carbs: 15, category: 'almidones' },
      { name: 'Fibra tipo All bran', tamPorcion: '½ taza', carbs: 15, category: 'almidones' },
      { name: 'Granola', tamPorcion: '¼ taza', carbs: 15, category: 'almidones' },
      { name: 'Pochoclo o Pororó / Tutuca', tamPorcion: '2 tazas', carbs: 15, category: 'almidones' },
      { name: 'Pochoclo o Pororó sin azúcar o salado', tamPorcion: '3 tazas', carbs: 15, category: 'almidones' },
    ];

    const dulces: Food[] = [

      // Galletitas dulces/alfajores
      { name: 'Bay biscuit', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },
      { name: 'Galletitas rellenas grandes', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },
      { name: 'Galletitas rellenas chicas', tamPorcion: '2 unidades', carbs: 15, category: 'dulces' },
      { name: 'Galletitas simples', tamPorcion: '3 unidades', carbs: 15, category: 'dulces' },
      { name: 'Madalena', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },
      { name: 'Obleas simples', tamPorcion: '4 unidades', carbs: 15, category: 'dulces' },
      { name: 'Turrón de maní', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },
      { name: 'Vainilla', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },
      { name: 'Alfajor simple', tamPorcion: '1 unidad', carbs: 30, category: 'dulces' },
      { name: 'Alfajor triple', tamPorcion: '1 unidad', carbs: 45, category: 'dulces' },
      { name: 'Alfajor dietético', tamPorcion: '1 unidad', carbs: 30, category: 'dulces' },
      { name: 'Chocoarroz', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },

      // Amasados de pastelería
      { name: 'Palmerita', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },
      { name: 'Muffin', tamPorcion: '1 unidad', carbs: 50, category: 'dulces' },
      { name: 'Budín de chocolate', tamPorcion: '1 rebanada', carbs: 30, category: 'dulces' },
      { name: 'Budín de vainilla', tamPorcion: '1 rebanada', carbs: 15, category: 'dulces' },
      { name: 'Factura con dulce', tamPorcion: '1 unidad', carbs: 30, category: 'dulces' },
      { name: 'Madialuna con manteca', tamPorcion: '1 unidad', carbs: 30, category: 'dulces' },
      { name: 'Medialuna de grasa', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },
      { name: 'Pan dulce', tamPorcion: '1 rebanada fina', carbs: 30, category: 'dulces' },
      { name: 'Bizcochuelo sin relleno', tamPorcion: '1 porción (1/8)', carbs: 30, category: 'dulces' },
      { name: 'Churro', tamPorcion: '1 unidad', carbs: 30, category: 'dulces' },
      { name: 'Criollo', tamPorcion: '1 unidad mediana', carbs: 15, category: 'dulces' },

      // Azúcares/dulces/helados
      { name: 'Azúcar de mesa', tamPorcion: '2 sobr. /1 cda sopera /3 cda té', carbs: 15, category: 'dulces' },
      { name: 'Dulce de leche común', tamPorcion: '2 cdas. tipo postre', carbs: 15, category: 'dulces' },
      { name: 'Dulce de leche diet Ser', tamPorcion: '2 cdas. tipo postre', carbs: 15, category: 'dulces' },
      { name: 'Dulce de membrillo o batata común', tamPorcion: '1 rebanada fina (25 g)', carbs: 15, category: 'dulces' },
      { name: 'Dulce de membrillo / batata dietético', tamPorcion: '1 porción (70 g)', carbs: 15, category: 'dulces' },
      { name: 'Mermelada común', tamPorcion: '1 cda. sopera al ras', carbs: 15, category: 'dulces' },
      { name: 'Mermelada dietética', tamPorcion: '3 cdas. soperas al ras', carbs: 15, category: 'dulces' },
      { name: 'Miel', tamPorcion: '1 cda sopera al ras', carbs: 15, category: 'dulces' },
      { name: 'Helado común', tamPorcion: '1 bocha', carbs: 15, category: 'dulces' },
      { name: 'Helado sin azúcar y bajo tenor graso', tamPorcion: '½ taza', carbs: 15, category: 'dulces' },
      { name: 'Helado de agua (palito)', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },
      { name: 'Helado de crema (palito)', tamPorcion: '1 unidad', carbs: 15, category: 'dulces' },


    ];

    const frutas: Food[] = [

      // Frutas frescas
      { name: 'Ananá', tamPorcion: '¾ taza', carbs: 15, category: 'frutas' },
      { name: 'Arándanos', tamPorcion: '¾ taza', carbs: 15, category: 'frutas' },
      { name: 'Banana', tamPorcion: '1 unidad pequeña', carbs: 15, category: 'frutas' },
      { name: 'Cerezas', tamPorcion: '12 unidades', carbs: 15, category: 'frutas' },
      { name: 'Ciruela', tamPorcion: '2 unidades medianas', carbs: 15, category: 'frutas' },
      { name: 'Damasco', tamPorcion: '3 unidades', carbs: 15, category: 'frutas' },
      { name: 'Durazno', tamPorcion: '1 unidad mediana', carbs: 15, category: 'frutas' },
      { name: 'Frambuesa', tamPorcion: '¾ taza', carbs: 15, category: 'frutas' },
      { name: 'Frutillas', tamPorcion: '1 y ¼ taza', carbs: 15, category: 'frutas' },
      { name: 'Kiwi', tamPorcion: '1 unidad', carbs: 15, category: 'frutas' },
      { name: 'Mandarina', tamPorcion: '1 unidad mediana', carbs: 15, category: 'frutas' },
      { name: 'Mango', tamPorcion: '½ unidad o ½ taza', carbs: 15, category: 'frutas' },
      { name: 'Manzana', tamPorcion: '1 unidad mediana', carbs: 15, category: 'frutas' },
      { name: 'Melón', tamPorcion: '1 taza en cubos', carbs: 15, category: 'frutas' },
      { name: 'Naranja', tamPorcion: '1 unidad mediana', carbs: 15, category: 'frutas' },
      { name: 'Pera', tamPorcion: '1 unidad mediana', carbs: 15, category: 'frutas' },
      { name: 'Pomelo', tamPorcion: '½ unidad', carbs: 15, category: 'frutas' },
      { name: 'Sandía', tamPorcion: '1 y ¼ taza o 1 rebanada', carbs: 15, category: 'frutas' },
      { name: 'Uvas', tamPorcion: '12 unidades', carbs: 15, category: 'frutas' },

      // Frutas en lata
      { name: 'Ananá en lata dietético', tamPorcion: '2 rodajas', carbs: 15, category: 'frutas' },
      { name: 'Cóctel de frutas dietético', tamPorcion: '1 compotera', carbs: 15, category: 'frutas' },
      { name: 'Durazno en lata dietético', tamPorcion: '2 mitades', carbs: 15, category: 'frutas' },
      { name: 'Durazno en lata común', tamPorcion: '1 mitad', carbs: 15, category: 'frutas' },

      // Jugos de frutas
      { name: 'De naranja, manzana o pomelo', tamPorcion: '½ vaso', carbs: 15, category: 'frutas' },

      // Frutas secas
      { name: 'Almendras', tamPorcion: '½ taza', carbs: 15, category: 'frutas' },
      { name: 'Maní', tamPorcion: '½ taza', carbs: 15, category: 'frutas' },
      { name: 'Nueces', tamPorcion: '½ taza', carbs: 15, category: 'frutas' },
      { name: 'Castañas de cajú', tamPorcion: '¼ taza', carbs: 15, category: 'frutas' },

      // Frutas desecadas
      { name: 'Damasco', tamPorcion: '3 unidades', carbs: 15, category: 'frutas' },
      { name: 'Durazno', tamPorcion: '1 unidad', carbs: 15, category: 'frutas' },
      { name: 'Ciruelas', tamPorcion: '3 unidades', carbs: 15, category: 'frutas' },
      { name: 'Higos', tamPorcion: '1 unidad', carbs: 15, category: 'frutas' },
      { name: 'Pasas de uva', tamPorcion: '1 cda sopera', carbs: 20, category: 'frutas' },
      { name: 'Pasas de arándanos', tamPorcion: '1 cda sopera', carbs: 20, category: 'frutas' },
      { name: 'Manzana', tamPorcion: '1 unidad', carbs: 15, category: 'frutas' },
      { name: 'Pera', tamPorcion: '1 unidad', carbs: 15, category: 'frutas' },

    ];

    const lacteos: Food[] = [
      { name: 'Leche fluída entera o descremada', tamPorcion: '1 taza', carbs: 15, category: 'lacteos' },
      { name: 'Leche en polvo (entera o descremada)', tamPorcion: '3 cdas soperas', carbs: 15, category: 'lacteos' },
      { name: 'Yogur natural', tamPorcion: '1 taza o pote', carbs: 15, category: 'lacteos' },
      { name: 'Yogur bebible entero', tamPorcion: '1 vaso', carbs: 25, category: 'lacteos' },
      { name: 'Yogur bebible light', tamPorcion: '1 vaso', carbs: 10, category: 'lacteos' },
      { name: 'Yogur compacto entero', tamPorcion: '1 pote (120 g)', carbs: 15, category: 'lacteos' },
      { name: 'Yogur firme light', tamPorcion: '1 pote (120 g)', carbs: 10, category: 'lacteos' },
      { name: 'Yogur Ser con cereales', tamPorcion: '1 pote (165 g)', carbs: 25, category: 'lacteos' },
      { name: 'Yogur entero con cereales azucarados', tamPorcion: '1 pote (165 g)', carbs: 35, category: 'lacteos' },
      { name: 'Postre dietético (Royal / Exquisita)', tamPorcion: '1 compotera (150 g)', carbs: 15, category: 'lacteos' },
      { name: 'Leche chocolatada comercial', tamPorcion: '1 vaso', carbs: 20, category: 'lacteos' },
      { name: 'Leche chocolatada envasada', tamPorcion: '1 envase ( 250 g)', carbs: 30, category: 'lacteos' },
      { name: 'Leche chocolatada (3 cditas de té de polvo cacao con azúcar', tamPorcion: '1 vaso', carbs: 30, category: 'lacteos' },
      { name: 'Postre dietético de vainilla / chocolate', tamPorcion: '1 pote', carbs: 15, category: 'lacteos' },
      { name: 'Postre entero de chocolate / dulce de leche', tamPorcion: '1 pote', carbs: 25, category: 'lacteos' },
      { name: 'Pstre tipo Serenito', tamPorcion: '1 pote', carbs: 20, category: 'lacteos' },
      { name: 'Flan', tamPorcion: '1 pote', carbs: 25, category: 'lacteos' },
      { name: 'Flan dietético', tamPorcion: '1 pote (105 g)', carbs: 20, category: 'lacteos' },


    ];

    const otros: Food[] = [

      // Comidas típicas
      { name: 'Empanada árabe', tamPorcion: '1 unidad', carbs: 30, category: 'otros' },
      { name: 'Humita en chala', tamPorcion: '1 unidad', carbs: 30, category: 'otros' },
      { name: 'Humita', tamPorcion: '1 porción de 150 g', carbs: 30, category: 'otros' },
      { name: 'Locro', tamPorcion: '1 plato hondo', carbs: 75, category: 'otros' },
      { name: 'Sushi roll', tamPorcion: '3 unidades', carbs: 15, category: 'otros' },
      { name: 'Gohan', tamPorcion: '1 porción (150 g)', carbs: 45, category: 'otros' },
      { name: 'Chipá', tamPorcion: '1 unidad pequeña', carbs: 15, category: 'otros' },
      { name: 'Tamal', tamPorcion: '1 unidad', carbs: 15, category: 'otros' },

      // Bebidas
      { name: 'Gaseosa común', tamPorcion: '1 vaso chico', carbs: 15, category: 'otros' },
      { name: 'Gaseosa común', tamPorcion: '1 lata (354 cc)', carbs: 40, category: 'otros' },
      { name: 'Jugo de naranja comercial', tamPorcion: '1 vaso', carbs: 20, category: 'otros' },
      { name: 'Jugo de naranja tipo citric', tamPorcion: '1 envase (250 cc)', carbs: 25, category: 'otros' },
      { name: 'Jugo comercial dietético', tamPorcion: '1 vaso (200 cc)', carbs: 5, category: 'otros' },
      { name: 'Cerveza 1 chopp o', tamPorcion: '1 lata (350 cc)', carbs: 15, category: 'otros' },
      { name: 'Cerveza', tamPorcion: '1 lata (473 cc)', carbs: 20, category: 'otros' },
      { name: 'Bebida energizante', tamPorcion: '1 lata (250 cc)', carbs: 30, category: 'otros' },
      { name: 'Vino blanco dulce / sidra / bebidas espumantes', tamPorcion: '1 copa (150 cc)', carbs: 15, category: 'otros' },


    ];

    this.allFoods = [...almidones,...dulces,...frutas,...lacteos,...otros];
    this.searchResults = this.allFoods.filter(food => food.category === this.selectedCategory);
  }

  searchFood(event: any) {
    const searchTerm = event.target.value.toLowerCase(); // Convertir a minúsculas

  if (searchTerm === '') {
    // Si no hay término de búsqueda, mostrar todos los alimentos de la categoría actual
    this.searchResults = this.allFoods.filter(food => food.category === this.selectedCategory);
    return;
  }

  // Filtrar los alimentos de la categoría actual según el término de búsqueda
  this.searchResults = this.allFoods.filter(food =>
    food.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm)
    && food.category === this.selectedCategory
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

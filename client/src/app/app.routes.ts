import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { MissingComponent } from './pages/missing/missing.component';

// rutas
export const routes: Routes = [
  { path: '', component: ProductsComponent }, // ruta por defecto
  { path: '**', component: MissingComponent }, // ruta no encontrada
];

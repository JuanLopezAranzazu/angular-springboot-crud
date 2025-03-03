import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
// componentes
import { TableComponent } from '../../components/table/table.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, TableComponent, FormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  // // variables
  // products: Product[] = [];
  // newProduct: Product = { name: '', description: '', price: 0, stock: 0 };
  // selectedProduct: Product | null = null;

  // constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.loadProducts();
  // }

  // // obtener todos los productos
  // loadProducts(): void {
  //   this.productService
  //     .getProducts()
  //     .subscribe((data) => (this.products = data));
  // }

  // // agregar un producto
  // addProduct(): void {
  //   this.productService.createProduct(this.newProduct).subscribe(() => {
  //     this.loadProducts();
  //     this.newProduct = { name: '', description: '', price: 0, stock: 0 };
  //   });
  // }

  // // seleccionar un producto
  // selectProduct(product: Product): void {
  //   this.selectedProduct = { ...product };
  // }

  // // actualizar un producto
  // updateProduct(): void {
  //   if (this.selectedProduct) {
  //     this.productService
  //       .updateProduct(this.selectedProduct.id!, this.selectedProduct)
  //       .subscribe(() => {
  //         this.loadProducts();
  //         this.selectedProduct = null;
  //       });
  //   }
  // }

  // // eliminar un producto
  // deleteProduct(id: number): void {
  //   this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  // }

  // variables
  products: Product[] = [];
  selectedProduct: Product | null = null;
  showModal = false;

  // columnas de la tabla
  columns: { key: keyof Product; label: string }[] = [
    { key: 'name', label: 'Nombre' },
    { key: 'description', label: 'Descripción' },
    { key: 'price', label: 'Precio' },
    { key: 'stock', label: 'Stock' },
  ];

  // campos del formulario
  fields: { key: string; label: string; type: string }[] = [
    { key: 'name', label: 'Nombre', type: 'text' },
    { key: 'description', label: 'Descripción', type: 'text' },
    { key: 'price', label: 'Precio', type: 'number' },
    { key: 'stock', label: 'Stock', type: 'number' },
  ];

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  // obtener todos los productos
  loadProducts() {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  // seleccionar un producto
  selectProduct(product: Product) {
    this.selectedProduct = { ...product };
    this.showModal = true;
  }

  // eliminar un producto
  deleteProduct(product: Product) {
    if (!product.id) return;
    this.productService
      .deleteProduct(product.id)
      .subscribe(() => this.loadProducts());
  }

  addEditProduct(product: Product) {
    if (this.selectedProduct?.id) {
      // actualizar producto
      this.productService
        .updateProduct(this.selectedProduct.id, product)
        .subscribe(() => this.loadProducts());
    } else {
      // crear producto
      this.productService
        .createProduct(product)
        .subscribe(() => this.loadProducts());
    }
    this.showModal = false;
  }
}

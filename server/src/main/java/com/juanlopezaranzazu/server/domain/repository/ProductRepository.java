package com.juanlopezaranzazu.server.domain.repository;

import com.juanlopezaranzazu.server.domain.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {
    // obtener todos los productos
    List<Product> findAll();
    // obtener un producto por su id
    Optional<Product> findById(Long id);
    // guardar un producto
    Product save(Product product);
    // eliminar un producto por su id
    void deleteById(Long id);
    // verificar si existe el producto
    boolean existsById(Long id);
}

package com.juanlopezaranzazu.server.application.service;

import com.juanlopezaranzazu.server.application.dto.ProductRequest;
import com.juanlopezaranzazu.server.application.dto.ProductResponse;
import com.juanlopezaranzazu.server.application.exception.NotFoundException;
import com.juanlopezaranzazu.server.domain.model.Product;
import com.juanlopezaranzazu.server.domain.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    // obtener todos los productos
    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll().stream()
                .map(product -> ProductResponse.fromEntity(product))
                .collect(Collectors.toList());
    }

    // obtener un producto por su id
    public ProductResponse getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Producto con ID " + id + " no encontrado"));

        return ProductResponse.fromEntity(product);
    }

    // crear un producto
    public ProductResponse createProduct(ProductRequest productRequest) {
        // crear un producto
        Product newProduct = new Product();
        newProduct.setName(productRequest.getName());
        newProduct.setDescription(productRequest.getDescription());
        newProduct.setPrice(productRequest.getPrice());
        newProduct.setStock(productRequest.getStock());
        // guardar el producto
        productRepository.save(newProduct);

        return ProductResponse.fromEntity(newProduct);
    }

    // editar un producto por su id
    public ProductResponse updateProduct(Long id, ProductRequest productRequest) {
        // verificar que el producto existe
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Producto con ID " + id + " no encontrado"));

        product.setName(productRequest.getName());
        product.setDescription(productRequest.getDescription());
        product.setPrice(productRequest.getPrice());
        product.setStock(productRequest.getStock());
        // editar el producto
        Product updatedProduct = productRepository.save(product);

        return ProductResponse.fromEntity(updatedProduct);
    }

    // eliminar un producto por su id
    public void deleteProduct(Long id) {
        // verificar que el producto existe
        if (!productRepository.existsById(id)) {
            throw new NotFoundException("Producto con ID " + id + " no encontrado");
        }
        productRepository.deleteById(id);
    }
}

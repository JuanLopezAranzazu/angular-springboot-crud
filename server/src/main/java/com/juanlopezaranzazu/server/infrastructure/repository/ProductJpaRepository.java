package com.juanlopezaranzazu.server.infrastructure.repository;

import com.juanlopezaranzazu.server.domain.model.Product;
import com.juanlopezaranzazu.server.domain.repository.ProductRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductJpaRepository extends JpaRepository<Product, Long>, ProductRepository {
}

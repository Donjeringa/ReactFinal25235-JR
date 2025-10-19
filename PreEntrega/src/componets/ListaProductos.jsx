import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import ProductCard from "./ProductCard";
const ListaProductos =({category=null})=>{
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        let url = 'https://fakestoreapi.com/products';
        if(category){
            url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
        }
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProductos(data);
            setLoading(false);
        })
        .catch(error=>{
            console.error("Error fetching data:", error);
            setLoading(false);
        });
    },[category]);
    const handleAgregarAlCarrito =(producto)=>{
        alert("Producto ${producto.title} agregado al carrito!");
    };
    if(loading){
        return <p>Cargando productos...</p>;
    }
    return(
        <Row>
            {productos.map(producto=>(
                <Col key={producto.id} className="mb-4">
                    <ProductCard producto={producto} onAgregarAlCarrito={handleAgregarAlCarrito}/>
                </Col>
            ))}
        </Row>
    );
}
export default ListaProductos;
import "./Compra.css";
import { useState, useEffect } from "react";


const initialState = JSON.parse(localStorage.getItem("productos") || "[]");

const Compra = () => {

	const [productos] = useState(initialState);

	useEffect(() => {
        localStorage.setItem("productos", JSON.stringify(productos));
    }, [productos])

	return (
		<>
            <h1 className="titleCarrito">Carrito de compras</h1>
			<section id="busquedaCont">
				<input className="busqueda" type="text" placeholder="Digita el ID del producto"/>
				<button className="buscar"><i className="fas fa-search"/></button>
            </section>               
			<section id="todo-list">	
				<section className="status">
					<img src="https://i.imgur.com/OMzIpyl.png" alt="checkedlist"/>
					<br/><h2 className="estadoCarrito">Carrito de compras vacia</h2>
					<h3 className="instCarrito">Agrega los productos de compra</h3>
				</section>
			</section>
		</>
	);
}

export default Compra;
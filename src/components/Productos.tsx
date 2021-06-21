import Loading from "./Loading";
import { SyntheticEvent, useState } from "react";
import { useUser } from "../context/user";
import { firebase, firestore } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./Productos.css";

interface IProdutos {
    id: string,
    nombre: string,
	tipo: string,
	unidad: string,
	existencia: number,
    udi: string,
	precioV:number,
	precioC:number,
	identificador:string,
	createdAt: firebase.firestore.Timestamp
}

const productosRef = firestore.collection("productos");
const productosQuery = productosRef.orderBy("createdAt", "asc")

const Productos = () => {
	const [tipo, setTipo] = useState ("");
	const [unidad, setUnidad] = useState ("");
    const [nombre, setNombre] = useState ("");
	const [precioV, setPrecioV] = useState ("");
	const [precioC, setPrecioC] = useState ("");
	const [existencia, setExitencia] = useState ("");
	const [identificador, setIdenficador] = useState ("");
    const { user } = useUser();
    const [productos, loading] = useCollectionData<IProdutos>(
        productosQuery, 
        { idField: "id" }
    );

	console.log(tipo, unidad);

    const addProducto =(event: SyntheticEvent) => {
        event.preventDefault();

        if(nombre.trim().length < 1) return;
		if(identificador.trim().length < 1) return;
		if(tipo.trim().length < 1) return;
		if(unidad.trim().length < 1) return;
		if(precioV.trim().length < .5) return;
		if(precioC.trim().length < .5) return;
		if(existencia.trim().length < 0) return;

        if(user){
            const { uid } = user;
            productosRef.add({
                nombre,
                uid,
                precioV,
				precioC,
				existencia,
				identificador,
				unidad,
				tipo,
				createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        setNombre("");
		setPrecioV("");
		setPrecioC("");
		setExitencia("");
		setIdenficador("");
		setTipo("");
		setUnidad("");
    };

    if(loading){

        return (
			<div>
            	<Loading />
			</div>
        )
    }

    return (
		<>
			<h1 id="title">Productos</h1>
			<section>			
				<form id="campos" onSubmit={addProducto}>
					<input className="formIzq" type="text" value={nombre} placeholder="Producto" onChange={(e) => setNombre(e.target.value)} />
					<input type="text" value={identificador} placeholder="ID" onChange={(e) => setIdenficador(e.target.value)} />
					<input type="text" value={precioV} placeholder="Precio de venta" onChange={(e) => setPrecioV(e.target.value)} />
					<input type="text" value={precioC} placeholder="Precio de compra" onChange={(e) => setPrecioC(e.target.value)} />
					<input type="text" value={existencia} placeholder="Stock" onChange={(e) => setExitencia(e.target.value)} />
					<input type="text" value={tipo} placeholder="Tipo" onChange={(e) => setTipo(e.target.value)} />
					<input type="text" value={unidad} placeholder="Unidad" onChange={(e) => setUnidad(e.target.value)} />
					<button className="bAdd">Agregar</button>
				</form>
				<section>
					{ productos && productos.map(({ nombre, precioV, precioC, existencia, identificador, unidad, tipo, id }) => (
						<div>
							<section id="prod-items"> 
								<div>{nombre}</div>
								<div>{identificador}</div>
								<div>${precioV}</div>
								<div>${precioC}</div>
								<div>#{existencia}</div>
								<div>{tipo}</div>
								<div>{unidad}</div> 
								<div className="modifiers">
									<button><i className="far fa-edit" /></button>
									<button><i className="far fa-trash-alt" /></button>
								</div>
							</section>
						</div>
					)) } 
				</section>							
			</section>
		</>
    )
}

export default Productos;
import React from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'; 

const products = [
  { id: 1, name: 'One Piece TCG Booster Box OP01', price: '600 U$D', description: '"El Comienzo de la Aventura":Sumérgete en el emocionante mundo de One Piece con la Booster Box OP01. Descubre personajes legendarios, lugares icónicos y momentos épicos del manga y anime mientras expandes tu colección de cartas. ¿Estás listo para embarcarte en la aventura de tu vida?', content:"La Booster Box OP01 contiene un total de 24 paquetes de refuerzo, cada uno con 10 cartas. Dentro de la caja, los jugadores encontrarán una variedad de cartas emocionantes que representan personajes, lugares y eventos del principio de la serie de One Piece. Desde los miembros originales de la tripulación de Luffy hasta los primeros encuentros con enemigos formidables, esta Booster Box ofrece una emocionante introducción al mundo de One Piece TCG."   },
  { id: 2, name: 'One Piece TCG Booster Box OP02', price: '300 U$D', description: ' "El Camino de la Piratería":¡Hazte a la mar y navega por los mares peligrosos de One Piece con la Booster Box OP02! Encuentra nuevos aliados, desafía a temibles enemigos y conquista nuevos territorios mientras fortaleces tu mazo con cartas poderosas. ¿Estás preparado para reclamar tu lugar como el rey de los piratas? Cada Booster ', content: "La Booster Box OP02 contiene 24 paquetes de refuerzo, cada uno con 10 cartas. En esta caja, los jugadores pueden esperar encontrar cartas que representan momentos clave en el viaje de Luffy y su tripulación a medida que avanzan en su camino hacia la Grand Line. Con nuevas habilidades, personajes y eventos, la Booster Box OP02 ofrece emocionantes oportunidades para expandir y mejorar tus mazos de juego."  },
  { id: 3, name: 'One Piece TCG Booster Box OP03', price: '220 U$D', description: '"La Gran Travesía":Embárcate en una gran travesía llena de emoción y aventura con la Booster Box OP03. Explora tierras desconocidas, enfrenta desafíos increíbles y forja alianzas inquebrantables mientras te abres paso hacia la gloria. ¿Estás listo para conquistar los océanos y convertirte en una leyenda?', content: "La Booster Box OP03 incluye 24 paquetes de refuerzo, cada uno con 10 cartas. Esta caja presenta una amplia gama de cartas que reflejan los emocionantes acontecimientos y desafíos que Luffy y su tripulación encuentran durante su gran travesía por el mar. Desde enfrentamientos épicos con otros piratas hasta encuentros con criaturas legendarias, la Booster Box OP03 ofrece una experiencia de juego llena de aventura y emoción."  },
  { id: 4, name: 'One Piece TCG Booster Box OP04', price: '150 U$D', description: '"El Poder de la Determinación": Desata el poder de la determinación y la voluntad con la Booster Box OP04. Enfrenta obstáculos insuperables, desafía a poderosos adversarios y demuestra tu valentía en cada batalla mientras te acercas cada vez más a tus sueños. ¿Estás preparado para superar cualquier desafío y alcanzar la grandeza?', content: "La Booster Box OP04 contiene 24 paquetes de refuerzo, cada uno con 10 cartas. En esta caja, los jugadores encontrarán cartas que destacan el poder de la determinación y la voluntad mientras Luffy y su tripulación enfrentan desafíos cada vez mayores en su búsqueda de convertirse en los reyes de los piratas. Con nuevas habilidades, estrategias y emocionantes encuentros, la Booster Box OP04 ofrece oportunidades emocionantes para fortalecer tus mazos y demostrar tu valentía en el campo de batalla."  },
  { id: 5, name: 'One Piece TCG Booster Box OP05', price: '200 U$D', description: '"El Legado de los Piratas": Descubre el legado perdurable de los piratas con la Booster Box OP05. Sumérgete en las historias épicas, los secretos ocultos y los tesoros invaluables que aguardan en los confines del mundo mientras construyes tu propia leyenda pirata. ¿Estás listo para dejar tu marca en la historia de One Piece?', content: "La Booster Box OP05 incluye 24 paquetes de refuerzo, cada uno con 10 cartas. Esta caja celebra el legado perdurable de los piratas con cartas que capturan momentos memorables, secretos ocultos y tesoros legendarios de la serie de One Piece. Desde emocionantes enfrentamientos hasta alianzas inesperadas, la Booster Box OP05 ofrece una experiencia de juego emocionante y llena de aventuras que transportará a los jugadores al emocionante mundo de One Piece."  }
];

const getProductDetails = (itemId) => {
  const product = products.find(product => product.id === parseInt(itemId));
  return product;
};

const ItemDetailContainer = ({ agregarAlCarrito }) => {
  const { itemId } = useParams();
  const product = getProductDetails(itemId);

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(product);
  };

  return (
    <div className="item-detail-container">
      <h2>Detalles del Producto</h2>
      {product ? (
        <div className="product-detail">
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <p>Descripción: {product.description}</p>
          <p>Contenido: {product.content}</p>
          <button onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

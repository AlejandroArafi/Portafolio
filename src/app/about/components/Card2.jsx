import React from 'react'
import './card.css'

const Card2 = () => {
  return (
    <>
    <div className='contenedor-p2'></div>
<div className="card-p1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://res.cloudinary.com/deq2bmgqk/image/upload/v1696044580/portafolio/Captura_de_pantalla_2023-09-30_002830_oyza9g.webp" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CRUD lista de compras</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">App que permite agregar, modificar, </p>
        <a href="https://alejandroarafi.github.io/proyecto-2/" target={'_blank'} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver
            
        </a>
    </div>
</div>

    </>
  )
}

export default Card2
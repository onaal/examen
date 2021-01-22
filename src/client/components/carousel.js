import React, {Component, Fragment} from 'react';
import {get} from "../../server/util/RequestApi";

export default class carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            /**Simulacion en caso de que el menu venga de alguna api o un BD*/
            menu: [
                {
                    MenuSuperior:[
                        {type:'search', title:'', icono:'', url:'#'},
                        {type:'text', title:'Preguntas Frecuentes', icono:'far fa-question-circle', url:'#'},
                        {type:'dropdown', title:'Atenciona clientes', icono:'far fa-question-circle', url:'#'},
                        {type:'text', title:'Tu cuenta', icono:'fas fa-user', url:'#'},
                        {type:'dropdown', title:'USD', icono:'fas fa-user', url:'#'},
                        {type:'dropdown', title:'USD', icono:'fas fa-user', url:'#'}
                    ],
                    MenuInferior:[
                        {type:'text', title:'PARQUES', icono:'', url:'#'},
                        {type:'text', title:'TOURS', icono:'', url:'#'},
                        {type:'text', title:'ACTIVIDADES', icono:'', url:'#'},
                        {type:'text', title:'HOTEL XCARET', icono:'', url:'#'},
                        {type:'text', title:'PROMOCIONES Y DESCUENTOS', icono:'', url:'#'},
                        {type:'text', title:'CARRITO', icono:'', url:'#'},
                    ]
                }
            ],
            imgnav: ''
        }
    }
    componentDidMount(){
        this.getImagenNavbar();
    }


    getImagenNavbar(){
        get('http://www.randomtext.me/api/lorem/h1/5', (response)=>{
            console.log(response);
        },'application/json; charset=utf-8');
    }
    render(){
        return(
            <div class="carousel relative shadow-2xl bg-white">
	<div class="carousel-inner relative overflow-hidden w-full">
	  
		<input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
		<div class="carousel-item absolute opacity-0" style={{height:"50vh"}}>
			<div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center">
               
            </div>
		</div>
		<label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
		
		
		<input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
		<div class="carousel-item absolute opacity-0" style={{height:"50vh"}}>
			<div class="block h-full w-full bg-orange-500 text-white text-5xl text-center">Slide 2</div>
		</div>
		<label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
		
		
		<input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
		<div class="carousel-item absolute opacity-0" style={{height:"50vh"}}>
			<div class="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
		</div>
		<label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

		
		<ol class="carousel-indicators">
			<li class="inline-block mr-3">
				<label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
			</li>
			<li class="inline-block mr-3">
				<label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
			</li>
			<li class="inline-block mr-3">
				<label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
			</li>
		</ol>
		
	</div>
</div>
            
            
        )
    }
}
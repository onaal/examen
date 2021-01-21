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
                
            </div>
            
        )
    }
}
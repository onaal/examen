import React, {Component, Fragment} from 'react';
import {get} from "../../server/util/RequestApi";

export default class navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            /**Simulacion en caso de que el menu venga de alguna api o un BD*/
            menu: [
                {
                    items:[
                        {type:'search', title:'', icono:'', url:'#'},
                        {type:'text', title:'Preguntas Frecuentes', icono:'far fa-question-circle', url:'#'},
                        {type:'dropdown', title:'Atenciona clientes', icono:'far fa-question-circle', url:'#'},
                        {type:'text', title:'Tu cuenta', icono:'fas fa-user', url:'#'},
                        {type:'dropdown', title:'USD', icono:'fas fa-user', url:'#'},
                        {type:'dropdown', title:'MXN', icono:'fas fa-user', url:'#'}
                    ],
                   
                },
                {
                    items:[
                        {type:'text', title:'PARQUES', icono:'', url:'#'},
                        {type:'text', title:'TOURS', icono:'', url:'#'},
                        {type:'text', title:'ACTIVIDADES', icono:'', url:'#'},
                        {type:'text', title:'HOTEL XCARET', icono:'', url:'#'},
                        {type:'text', title:'PROMOCIONES Y DESCUENTOS', icono:'', url:'#'},
                        {type:'text', title:'CARRITO', icono:'', url:'#'},
                    ]
                }
            ],
            
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
            <div className="App">
               
                <nav className="bg-green-600 flex justify-end">
                    <div className="md:container justify-end">
                    <div className="relative flex justify-between">
                        <div className="absolute inset-y-0 left-0 flex sm:hidden">
                        <button className="inline-flex justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                        
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            svg     </svg>
                        </button>
                        </div>
                        <div className="flex-1 flex  sm:items-stretch ">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="https://via.placeholder.com/412X243" alt="Workflow"/>
                            <img className="hidden lg:block h-8 w-auto" src="https://via.placeholder.com/412X243" alt="Workflow"/>
                        </div>

                        <div className="sticky top-0 hidden sm:block justify-end">
                            {
                                this.state.menu.map((item, key)=>{
                                    
                                    return(
                                        <div className=" sticky top-0 hidden sm:block sm:ml-6" key={key}>
                                            <div className="flex space-x-4">
                                                {
                                                    item.items.map((item2, key2)=>{
                                                            if (item2.type == 'search') {
                                                                return(
                                                                    <form class="px-3 py-2 rounded-md">
                                                                        <label class="hidden" for="search-form">{item2.title}</label>
                                                                        <input class="shadow rounded border-3" placeholder={item2.title} type="search"></input>
                                                                        <button class="hidden">Submit</button>
                                                                    </form>
                                                                )
                                                            }else if (item2.type == 'text') {
                                                                return (
                                                                    <React.Fragment>
                                                                        
                                                                        <a href="#" className="text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                                        <i class={item2.icono}></i>    {item2.title}
                                                                        </a>
                                                                    </React.Fragment>
                                                                )
                                                            } else {
                                                                return (
                                                                    <React.Fragment>
                                                                        
                                                                        <a href="#" className="text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                                        <i class={item2.icono}></i>    {item2.title}
                                                                        </a>
                                                                    </React.Fragment>
                                                                )
                                                            }   
                                                    })
                                                }
                                                
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            



                            <div className="sticky top-0 hidden sm:block sm:ml-6">
                            <div class="flex space-x-4">	                            <div className="flex space-x-4">

                         


                            
                            </div>	                            
                        </div>	                        
                        </div>



                        </div>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
            
        )
    }
}
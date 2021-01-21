import React, {Component, Fragment} from 'react';


export default class navbar extends Component {
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
            ]
        }
    }
    
    render(){
        return(
            <div className="App">
                <i class="far fa-question-circle"></i>
                <nav className="bg-gray-800">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                        
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                            <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
                        </div>

                        <div className="sticky top-0 hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                            <form class="mb-4 w-full md:mb-0 md:w-1/4">
                            <label class="hidden" for="search-form">Search</label>
                            <input class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text"></input>
                                <button class="hidden">Submit</button>
                            </form>
   
  
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><i className="fas fa-phone"></i>Dashboard</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                            </div>
                        </div>
                        
                        <div className=" sticky top-0 hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                            
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
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
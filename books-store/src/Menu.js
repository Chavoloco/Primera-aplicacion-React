import React from 'react';
import Search from './Search';
import PanelAdd from './PanelAdd';
import './Menu.css'

class Menu extends React.Component{

    constructor(props){
        super(props);

        this.state ={newItemPanel: false};  

        // this.add = this.add.bind(this); Este se usa para que le metod add pueda leer la propiedad del constructor
        //Otra forma es con la función de flecha
    }
    
    add = () => {
        this.setState({newItemPanel: true});
        console.log('Boton');
    }

    onCancel=(e)=>{
        // e.preventDefault();
        this.setState({newItemPanel: false});
    }

    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
                    <div className="search">
                        <Search onsearch={this.props.onsearch} />
                    </div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">+ Add book</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)?
                    <PanelAdd oncancel={this.onCancel} onadd={this.props.onadd} />
                    :
                    ""
                }
            </div>
        );
    }

}

export default Menu;
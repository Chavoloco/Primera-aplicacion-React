import './App.css';
import Menu from './Menu';
import List from './List';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books:[
        {id: 0, rating: 4, title: 'Harry Potter and the goblet of fire', image:'libro01.jpg'},
        {id: 1, rating: 3, title: 'The shining', image:'libro02.jpg'},
        {id: 2, rating: 2, title: 'The Da Vinci Code', image:'libro03.jpg'},
        {id: 3, rating: 5, title: 'The Little Prince', image:'libro04.jpg'},
        {id: 4, rating: 5, title: 'Overnatural', image:'libro05.jpg'}
      ],
      copyBooks:[]
    };
  }

  componentDidMount(){
    this.initBooks();
  }

  initBooks =() =>{
    this.setState((state,props) => ({
      copyBooks:[...this.state.books]
    }));
  }

  onAdd=(data)=>{
    let temp = [...this.state.books];
    const id = temp[temp.length-1].id + 1;
    data['id'] = id;
    temp.push(data);

    this.setState({books: [...temp]});
    this.initBooks();
  }

  onUpdateRating = (item) =>{
    let temp = [...this.state.books];
    const index = temp.findIndex(x => x.id === item.id);

    temp[index].title =item.title;
    temp[index].image =item.image;
    temp[index].rating =item.rating;

    this.setState({books: [...temp]});
    this.initBooks();
  }

  onSearch = (query) =>{
    if(query === ''){
      this.initBooks();
    }else{
      const temp = [...this.state.books]
      var res = [];

      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyBooks:[...res]});
    }
  }

  onRemove = (id) =>{
    var temp = [...this.state.books];
    const res = temp.filter(item => item.id !== id);

    this.setState({books: [...res]});
    this.initBooks();
  }

  render(){
    return(
    <div className="app">
      <Menu title="Amazonia" onadd={this.onAdd} onsearch={this.onSearch} />
      <List 
        items={this.state.copyBooks} 
        onupdaterating={this.onUpdateRating}
        onremove={this.onRemove}
      />
    </div>
    );
  }

}

export default App;

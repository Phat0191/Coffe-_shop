import React ,{Fragment,Component} from "react";
import axios from "axios";

class CallAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
        products:[],
          id:'',
          name:'',
          age:'',
          err:true,
        }; 
    }
    
  getData(){
    axios({
        method:'GET',
        url:'http://localhost:3000/employees',
        data:null
    }).then(res=>{
          this.setState({
            products:res.data
        });
    }).catch( err=>{});
    }

    deleteProduct=(id)=>{
        axios({ 
            method: 'DELETE',
            url:`http://localhost:3000/employees/${id}`,
            data:null,
        }).then( res=>{
            alert("Delete thanh cong");
            this.getData()
        }).catch( err=>{});
    }
    componentDidMount() {
        this.getData();
    }


editProduct=(i)=>{
    console.log(i);
     let product=this.state.products;
     console.log(product[i].name)
        this.setState({
            id: product[i].id,
            name: product[i].name,
            age: product[i].age
        })
        console.log(this.state.name)
    }

fixData=()=>{
        var {id,name,age}=this.state
        if(id){
        axios({
            method:'PUT',
            url: `http://localhost:3000/employees/${id}`,
            data:{
            id: id,
            name: name,
            age: age,
            }
        }).then( res=>{
            alert("Update Thành Công");
        }).catch( err=>{});
    }   
}
    
getPro=(event)=> {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({[key]: value});
  }
    
    render(){
        return(
            <Fragment>
        <form className="row g-3" style={{margin: "30px", padding: "20px", borderRadius: "10px" }} onSubmit={this.fixData}>
          <div className="col-12">
                <input type="text" name = "name" value={this.state.name} onChange={this.getPro} />
          </div>
          <div className="col-12">
                <input type="number" name ="age" value={this.state.age} onChange={this.getPro} />
          </div>
          <div className="col-12">
              <button type="submit" className="btn btn-primary">PUTdata</button>
          </div>
        </form>
                
                <div className="container">
                    <div className="row">
                        <div className="col md-8">
                            <div className="table">
                                <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                this.state.products.map((item,index)=>{
                                    return(
                                    <tr key = {index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                <td><button onClick={()=>this.editProduct(index)}>Edit</button></td> 
                                 <td><button className="badge badge-danger" onClick={()=>this.deleteProduct(item.id)}>remove</button></td> 
                              </tr>                            
                           );})
                        }
                        </tbody>
                        </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default CallAPI;
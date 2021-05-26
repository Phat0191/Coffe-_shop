import React ,{Fragment,Component} from "react";
import axios from "axios";

class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
           name:'',
           age:'',
          err:true,
        }; 
    }
    postData=()=> {
        var {name,age} = this.state;
        console.log(this.state.name);
          axios({
            method: 'POST',
            url: 'http://localhost:3000/employees',
            data: {
            name: name,
            age:age
            }
          }).then( res =>{
          }).catch(err=>{
            alert(err);
          });
      }
      getPro=(event)=> {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({[key]: value});
      }
  fixChang=(event)=>{
    event.preventDefault();
    this.postData();
  }
    render(){
        return(
            <Fragment>
        <form className="row g-3" style={{margin: "30px", padding: "20px", borderRadius: "10px" }} onSubmit={this.fixChang}>
          <div className="col-12">
                <input type="text" name = "name" value={this.state.name} onChange={this.getPro} />
          </div>
          <div className="col-12">
                <input type="number" name ="age" value={this.state.age} onChange={this.getPro} />
          </div>
          <div className="col-12">
              <button type="submit" className="btn btn-primary">PostData</button>
          </div>
        </form>
    </Fragment>
        );
    }
}
export default UpdateProduct;
import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class Home extends Component {
    state = { emp:{No:0,Name:"Default",Address:"Pune" }} ;
    chngAdd(){
       
        console.log("Balle balee function called!");
        var tempdata = {...this.state.emp};
        var copyobj = {...this.state.emp,Name:"Prashad"};
        
        this.setState({emp:copyobj});
    }
    myflag=true;
    componentDidMount(){
        console.log("I am called only once!");
    }

    
    shouldComponentUpdate(){
        console.log("Idk")
        console.log(this.myflag);
        return this.myflag;
    }

    render() { 
        console.log("Render called;")
        return (<>
        <h1>Hello react dont react!</h1>
        <h2>{this.state.emp.No}</h2>
        <h2>{this.state.emp.Name}</h2>
        <h2>{this.state.emp.Address}</h2>
        <button   className="btn btn-primary"  onClick={()=>{this.chngAdd()}}> Click Me</button>
        </>)
    }
}
 
export default Home;
import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class Home extends Component {
    state = { emp:{No:0,Name:"",Address:"" }} ;
    chngdata(args){
        debugger;
        var changename=args.target.name;
        console.log('im running on text box update')
        // console.log(changename) 
        var copyobj={...this.state.emp};
        copyobj[changename]=args.target.value;
       
        this.setState({emp:copyobj});
        debugger;
    }
    chngAdd(){
        console.log(this.state.emp);
        // console.log("Balle balee function called!");
        // var copyobj = {...this.state.emp,Name:"Prashad"};
        
        // this.setState({emp:copyobj});
    }
 


    render() { 
        console.log("Render called;")
        return (<>
        <h1>Hello react dont react!</h1>
        No:<input type="number" name="No" value={this.state.emp.No}  onChange={(event)=>{
            this.chngdata(event);
        }}/>
        <hr />
        Name:<input type="text" name="Name" value={this.state.emp.Name} onChange={(event)=>{
            this.chngdata(event);
        }}/>
         <hr />
        Adress<input type="text" name="Address" value={this.state.emp.Address} onChange={(event)=>{
            this.chngdata(event);
        }}/>
         <hr />

        <button   className="btn btn-primary"  onClick={(event)=>{
            this.chngAdd(event)}}> Click Me</button>
        </>)
    }
}
 
export default Home;
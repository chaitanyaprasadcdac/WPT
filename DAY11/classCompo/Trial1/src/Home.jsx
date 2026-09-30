import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class Home extends Component {
    state = { emp:{No:1,Name:"a",Address:"pn"},
    emps:[
        {No:1,Name:"a",Address:"pn" },
        {No:2,Name:"b",Address:"ab" },{No:3,Name:"c",Address:"cd" },{No:4,Name:"d",Address:"ef" },{No:5,Name:"gh",Address:"fun" }
    ]} ;
    
 chngdata(args){
        var copyobj={...this.state.emp};
        copyobj[args.target.name]=args.target.value;
        this.setState({emp:copyobj});
    }
addrec(arg){
  console.log(arg);
  var copyobj={...this.state.emp};
  this.setState({emp:arg});
}
addrecord(val){
    var copyobj={...this.state.emp};
    var copyobjj={...this.state.emps};
    console.log(copyobjj.length);
    this.state.emps.push(copyobj);
    
    this.setState({emp:{No:0,Name:"",Address:""}});
}
    render() { 
        console.log("Render called;")
        return (
            <div className="container">
                <hr />
               No :<input type="number" name="No" value={this.state.emp.No} onChange={(event)=>{
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
                <button className="btn btn-primary" onClick={()=>{
                   this.addrecord(this.state.emp);
                }}>Add record</button>
                <hr />
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.emps.map((e)=>{
                                return (
                                    <tr key={e.No}>
                                <td>{e.No}</td>
                            <td>{e.Name}</td>
                            <td>{e.Address}</td>
                            <td><button className="btn btn-warning" value={e} onClick={()=>{
                                this.addrec(e);
                            }}>select</button></td>
                            </tr>
                                );
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
 
export default Home;
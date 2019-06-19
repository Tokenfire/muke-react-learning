import React, { Component ,Fragment} from 'react';
import Todoitem from "./todoitem";
import "./style.css";
class Todolist extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:"",
            list:[]
        }
        // this.handleDelete=this.handleDelete.bind(this);
    }
  handleInputChange=(e)=>{
    this.setState({inputValue:e.target.value})
    console.log(this.state.inputValue)
    }
    onSubmit=()=>{
        const list=[...this.state.list,this.state.inputValue]; //1*
        this.setState({
            list,
            inputValue:""
        })
    }
    // handleDelete=(index)=>{
    //     const list=[...this.state.list]; // 1*
    //     list.splice(index,1);
    //     this.setState({
    //         list
    //     })
    // }
    handleDelete(index){
        console.log(this);
        const list=[...this.state.list]; // 1*
        list.splice(index,1);
        this.setState({
            list
        })
    }
    render() { 
        return (
            <Fragment>
                <div>
                    <label htmlFor="gg">输入内容</label>
                    <input id="gg" className="input" onChange={this.handleInputChange} value={this.state.inputValue}/>
                    <button onClick={this.onSubmit}>提交</button>
                </div> 
                <ul>
                    {this.state.list.map((item,index)=>{
                        return <Todoitem item={item} index={index} deleteItem={this.handleDelete.bind(this)}/>
                    })}
                </ul>
            </Fragment>
            );
        }
    }
export default Todolist;
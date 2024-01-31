import React from "react";

class ParentClass extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            count:0,
        };
    }

    render(){
        const {count} = this.state;
        return(
            <div>
                <h1>Profile in Class Based Component</h1>
                <h2>Count: {count}</h2>
                <button 
                onClick={()=>{
                    this.setState({
                        count:count-1,
                    });
                }}
                >count</button>
            </div>
        )
    }
}

export default ParentClass
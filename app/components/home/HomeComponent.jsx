import React from 'react';

class HomeComponent extends React.Component{
	componentDidMount(){
  fetch("/api/test").then(function(response){
        console.log("here");
    });
    fetch("/api/test2").then(function(response){
        console.log("here2");
    });
}

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Home</div>
                <div className="panel-body">Welcome to simple CRUD tutorial</div>
            </div>
        );
    }

}

export default HomeComponent;
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {LoadNewStories} from '../actions/LoadNewStories.js';

class Home extends Component {
  

	time(unix){
let now=new Date();		
let date = new Date((unix)*1000);
// Hours part from the timestamp
let hours = date.getHours();
let h=now.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
let m="0"+now.getMinutes();
// Seconds part from the timestamp
let seconds = "0" + date.getSeconds();
let s="0"+now.getSeconds();
let formattedTime = hours + ' : ' + minutes.substr(-2) + ' : ' + seconds.substr(-2);


return formattedTime;



	}

	createHtml(){

		return (this.props.NewStories.map((data,index)=>{

			if(1)
			{	return (

				<div style={{padding:'10px 10px 10px 10px',marginBottom:'20px',backgroundColor:'#64b1ae',listStyle:'none',width:'60%',marginLeft:'auto',marginRight:'auto'}}><li>Title: {data.title}
					<br/>
					Type: {data.type}<br/>
					Time:{this.time(data.time)}<br/>
					Link: {data.url}
					By: {data.by} -- Descendants: {data.descendants} 
					<br/>
					Score: {data.score}
					<hr/></li></div>
				);
			}
				

		}))}

	

  render() {

  	//console.log('Hello REcieved data at Home '+JSON.stringify(this.props.NewStories));

    return (
      <div className="Home">
      	<center><button  style={{width:'50px',padding:'10px 10px 10px 10px',textAlign:'center'}} onClick={this.props.LoadNewStories.bind(this)}>Load...</button></center>
        	
      	<ul>
        	{this.createHtml()}
        </ul>	
      </div>
    );
  }
}

function mapStateToProps(state){

	console.log('Home -> State to Prop called');
	return {
		NewStories:state.NewStories
	};

		
	}

function matchDispatchToProps(dispatch){

		console.log('Home -> Inc Dispatcher Called');
	return bindActionCreators({LoadNewStories},dispatch);


}	

export default connect(mapStateToProps,matchDispatchToProps)(Home);


//export default Home;

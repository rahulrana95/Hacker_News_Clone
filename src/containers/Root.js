import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../index.css';

class  Root extends Component{


	render(){

		  	//console.log('Hello '+this.props.NewStories);

		return(
			<div className="Root">

			<div className="RootNav">
			<Link to="home"><p> Home</p></Link>
			<Link to="show"><p>Show</p></Link>
			<Link to="latest"><p>Latest</p></Link>

			</div>

			{this.props.children}	

			</div>


				);
			}

						} 

function mapStateToProps(state){

	console.log('Root -> State to Prop called');
	return {
		NewStories:state.NewStories
	};

		
	}

function matchDispatchToProps(dispatch){

		console.log('Root -> Inc Dispatcher Called');
	return bindActionCreators({},dispatch);


}	

export default connect(mapStateToProps,matchDispatchToProps)(Root);
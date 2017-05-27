import axios from 'axios';
import fetch from 'isomorphic-fetch';
import store from '../store/index.js';
import newStoriesId from '../reducers/NewStories.js';



export function LoadNewStories(id) {
let data;



	let base_url='https://hacker-news.firebaseio.com/v0/newstories.json';
	let store_url='https://hacker-news.firebaseio.com/v0/item/';
	let store_end='.json?print=pretty';
			
			fetch(base_url,{method:'GET'})
	.then(response => response.json())
	.then(json=>{
		//console.log(json);


			let options=[];


			
				//let i=newStoriesId.length;
			let l=newStoriesId.length;
			for( let i=l*10;i<l*10+10;i++)
			{	
				// let b=new Date().getTime();
				// console.log('Before Pushing '+b);
				let u=store_url+json[i]+store_end;
				options.push({url:u,method:'GET'});

				let d=new Date().getTime();
				//console.log('After Pushing '+d-b);


				

				fetch(u,{method:'GET'}).then(response=>response.json())
					.then(json=>{
						
							store.dispatch({type:'NewStories',
						payload:json,
						count:i+1});
					//let d=new Date().getTime();
				//console.log('After Call ',new Date().getTime());			

					})
				


			}

			let response=[];

			

				




		
		

	});

	return {type:'asda',
			payload:'asd',count:0};


	
  
}
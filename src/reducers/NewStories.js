export let newStoriesId=[];






export default  function NewStories (state=newStoriesId,action)
	{

		// console.log('state is '+state);

		if(action.type==='NewStories'){


			//console.log('count'+action.count);

			//console.log('Reducer NewStories Recieved payload is '+action.payload);
			newStoriesId=state.concat(action.payload);
			console.log(newStoriesId);
			return state=state.concat(action.payload);

		}

		return state;



	}
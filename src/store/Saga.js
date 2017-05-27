import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
export function* callApi(){

  try{

    let arr=[];
     let base_url='https://hacker-news.firebaseio.com/v0/newstories.json';


      console.log('sga called ');

      const response=yield call(axios.get,base_url);
      console.log('saga response is '+ response);





  }
  catch(e){
    console.log('Error '+e);

  } 

}


export function* fetchData() {
 
  yield takeEvery('LoadNewStories',callApi)


}



export default function* Saga() {
  yield fetchData()
}


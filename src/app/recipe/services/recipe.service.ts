import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes():Observable<string[]> {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete',
      params: {query: 'chicken', number: '10'},
      headers: {
        'X-RapidAPI-Key': '220bd5a5eamsh6a1ce75de2b1275p182b48jsn549c5c165b82',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    let apiURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete';
  
    return this.http.get(apiURL,options).pipe(map((data: any) => {
      let results: any = data.items;
      // let results: any = data.items.map((item: any) =>{
      //   const recipe = [
      //     {

      //     }
      //   ]
      //   // return new re(
      //   //   book.volumeInfo.title !== undefined ? book.volumeInfo.title : "",
      //   //   book.volumeInfo.authors !== undefined ? book.volumeInfo.authors : [],
      //   //   book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : "",
      //   // )
      // });
  
      return results;
      
    }));
  
  }
}

// const options = {
//   method: 'GET',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete',
//   params: {query: 'chicken', number: '10'},
//   headers: {
//     'X-RapidAPI-Key': '220bd5a5eamsh6a1ce75de2b1275p182b48jsn549c5c165b82',
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// };


// const options = {
//   method: 'GET',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information',
//   headers: {
//     'X-RapidAPI-Key': '220bd5a5eamsh6a1ce75de2b1275p182b48jsn549c5c165b82',
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete',
//   params: {query: 'chicken', number: '10'},
//   headers: {
//     'X-RapidAPI-Key': '220bd5a5eamsh6a1ce75de2b1275p182b48jsn549c5c165b82',
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
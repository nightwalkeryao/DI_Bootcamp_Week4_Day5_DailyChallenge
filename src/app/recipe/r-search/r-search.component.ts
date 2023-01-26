import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
// import {Observable} from 'rxjs';
import {map, startWith, debounceTime, switchMap, filter, tap, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-r-search',
  templateUrl: './r-search.component.html',
  styleUrls: ['./r-search.component.css']
})
export class RSearchComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions?: any;
  isLoading = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete',
      params: {query: 'chicken', number: '10'},
      headers: {
        'X-RapidAPI-Key': '220bd5a5eamsh6a1ce75de2b1275p182b48jsn549c5c165b82',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   debounceTime(500),
    //   startWith(''),
    //   switchMap((searchText: string) => this.dataService.getData(searchText))
    // );
    this.myControl.valueChanges.pipe(
      filter(res => {
        return res !== null
      }),
      debounceTime(1000),
    
      switchMap(value => this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete', options)
      .pipe(
        finalize(() => {
          this.isLoading = false
        }),
      )
        )
      ).subscribe((data: any) => {
        console.log(data);
    });
}
  

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }
  
}

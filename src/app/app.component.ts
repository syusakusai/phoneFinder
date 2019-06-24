import { Component } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { CompleterService, CompleterData } from 'ng2-completer';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phoneFinderWebsite';

  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected dataServicePhone: CompleterData;

  protected searchPhone: string;

  booleanData: Boolean = false;
  nameing;
  angka;
  dataSort = [];
  countries = [
    {id: 1, name: 'Italia'},
    {id: 2, name: 'Brasile'},
    {id: 3, name: 'Florida'},
    {id: 4, name: 'Spagna'},
    {id: 5, name: 'Santo Domingo'},
]

  // public countries: Country[];

  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  protected phoneNameData = {
    'phones': [
       {
          'name': 'iPhone 7',
          'brand': 'Apple',
          'release_year': 2016,
          'description': 'new desg',
          'checked': false,
       },
       {
          'name': 'iPhone 6s',
          'brand': 'Apple',
          'release_year': 2015,
          'description': 'a new desc',
          'checked': false,
       },
       {
          'name': 'Galaxy S8',
          'brand': 'Samsung',
          'release_year': 2017,
          'description': 'Samsung announced the Samsung Galaxy S8 and Samsung Galaxy S8+ smartphones on March 29, 2017. It features an iris scanner, which was not present on the Galaxy S7 phones.',
          'checked': false,
       },
       {
          'name': 'Galaxy S7',
          'brand': 'Samsung',
          'release_year': 2016,
          'description': 'The Samsung Galaxy S7 series, which consists of the Samsung Galaxy S7 and the Samsung Galaxy S7 edge, was announced on February 21, 2016. They improve upon the Galaxy S6 by adding an always-on display to optionally show information while the screen is off',
          'checked': false,
       },
       {
          'name': 'Mi 6',
          'brand': 'Xiaomi',
          'release_year': 2017,
          'description': null,
          'checked': false,
       },
       {
          'name': 'G6',
          'brand': 'LG',
          'release_year': 2017,
          'description': '148.9 x 71.9 x 7.9 mm (5.86 x 2.83 x 0.31 in), 163 g (5.75 oz), Corning Gorilla Glass 5 back panel',
          'checked': false,
       }
    ]
 };
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];

  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
    this.dataServicePhone = completerService.local(this.phoneNameData.phones, 'name', 'name');
    // this.countries = countries;
    // console.log(this.searchData);
  }

  test (name) {
    this.nameing = name;
    for (let i = 0; i < this.phoneNameData.phones.length; i++) {
      const c = this.phoneNameData.phones[i];
      this.angka  = i;
      // this.dataSort = 'unde';
        // console.log('ini dataSort',this.dataSort);
        if (name === c.name) {
          // this.dataSort = c;
          this.dataSort.push(c);
        this.booleanData = true;
          console.log(this.dataSort);
          // return this.booleanData = true;
          // console.log('sama');
        } else {
          this.dataSort.splice(i);
        }

    }

    if(this.dataSort) {
     console.log('asd');
     this.dataSort.splice(this.angka);
    }
    
    console.log('ini', this.dataSort);

  }
  public sendCheckedCountries(index): void {
    // const selectedCountries = this.countries.filter( (country) => country.checked );
    const source = from(this.phoneNameData.phones);
    // console.log('so',source)
    const example = source.pipe(
      groupBy(person => person.brand),
      // return each item in group as array
      mergeMap(group => group.pipe(toArray()))
    );
    const subscribe = example.subscribe(val => console.log('val',val));
    
    for (let i = 0; i < this.phoneNameData.phones.length; i++) {
    
      const x = this.phoneNameData.phones[i];
      if (x.checked) {
        
        // console.log(x,index);
        this.dataSort.push(x);
      } else {
        this.dataSort.splice(i);
      }
      // const asd = x.filter( (country) => country.checked );
    }
    // const selected = this.phoneNameData.phones.filter( (this.phoneNameData.phones) => this.phoneNameData.phones)
    // you could use an EventEmitter and emit the selected values here, or send them to another API with some service

    // console.log (selectedCountries);
  }

}

interface Country {
  id: number;
  name: string;
  checked?: boolean;
}

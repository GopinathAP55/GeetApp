import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  textareaValue="";

   geetValue:string[] = [];
   geetImages:string[]=[];
   //Added the geet value into the array to display one by one.
  geetFormSubmit(form : NgForm){
    console.log(form.value.geetBox);
    if(form.value.geetBox != ''){
    this.geetValue.push(form.value.geetBox);
  }
    //This is to clear the text area.
    this.textareaValue="";
  }
  
  url: string='';
  onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (filedata) => { // called once readAsDataURL is completed
          this.url = reader.result + '';
          if(this.url != ''){
             this.geetImages.push(this.url);
          }
          this.url='';
         }
      }
  }
}

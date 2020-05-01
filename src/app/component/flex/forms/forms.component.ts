import { Component, OnInit } from "@angular/core";
import { NgForOf } from "@angular/common";
import { NgForm } from "@angular/forms";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"],
})
export class FormsComponent implements OnInit {
  public tempForm: NgForm;
  public userForm;
  public fields;
  contactForm: FormGroup;
  countries = ["USA", "Germany", "Italy", "France"];
  requestTypes = ["Claim", "Feedback", "Help Request"];
  constructor(public formbuilder: FormBuilder) {
    this.contactForm = this.createFormGroup();
    // this.formbuilder = this.createFormBuilderGroup()
  }
  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl(),
      }),
      requestType: new FormControl(),
      text: new FormControl(),
    });
  }

  // createFormBuilderGroup(){
  //     return FormGroup.group({
  //       personalData: this.formbuilder.group({
  //         email:'ratank.skillls@gmail.com',
  //         mobile:'',
  //         country:''
  //       }),
  //       requestType:'',
  //       text:''
  //     })
  // }

  ngOnInit(): void {
    this.fields = ["name", "number", "email"];
    this.userForm = {
      fname: "RatAN",
      lname: "Karande",
      email: "ratankarande700@gmail.com",
      phnumber: "15417878165",
      profile: "Sofware DEveloper, Manager",
    };
    // this.tempForm.controls.fname = 'ratan'
  }

  SubmituserForm(form: NgForm) {
    console.log("template form values", form.value);
  }
  modelForm() {
    console.log('reactive model',this.contactForm.value);

  }
}

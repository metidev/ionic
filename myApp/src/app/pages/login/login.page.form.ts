import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm {
    private FormBuilder : FormBuilder;
    constructor(formBuilder: FormBuilder){
        this.FormBuilder = formBuilder;
    }
    createForm():  FormGroup {
        return this.FormBuilder.group({
            email : ['',[Validators.required,Validators.email]],
            password : ['',[Validators.required]],

        });
    }
}
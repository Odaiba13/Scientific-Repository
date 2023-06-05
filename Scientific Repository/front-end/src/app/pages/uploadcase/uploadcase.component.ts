import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Case } from 'src/app/interfaces/Case';
import { CaseService } from 'src/app/services/case.service';
import { UploadCaseService } from 'src/app/services/uploadcase.service';


@Component({
  selector: 'app-uploadcase',
  templateUrl: './uploadcase.component.html',
  styleUrls: ['./uploadcase.component.css']
})
export class UploadcaseComponent implements OnInit {

  caseForm: FormGroup;

  constructor(private fb:FormBuilder, private servicio:UploadCaseService, private http:CaseService) { 
    this.caseForm=this.fb.group({
      casename: ["",[Validators.required, Validators.maxLength(100)]],
      datacase: ["", [Validators.maxLength(100)]],
      noncoplanar:[""]
    });
  }

  ngOnInit(): void {}

  sendDataCase(){
    let lista1:Case={
      casename:this.caseForm.get('casename')?.value,
      datacase:this.caseForm.get('datacase')?.value,
      noncoplanar:this.caseForm.get('noncoplanar')?.value
    }

    this.http.PostCase(lista1).subscribe(datos =>{
      console.log(datos);
    });
  }
}
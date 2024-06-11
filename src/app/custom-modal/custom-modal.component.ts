import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

type Epitagh = {
  aa?: number,
  afmekdoti?: string, 
  afmekdoti2?: string,
  arepitagis?: string, 
  arepitagis2?: string,
  companyname?: string,
  hmekdosis?: string,
  poso?: number,
  poso2?: number
};
@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css'],
  providers: [BsModalRef]
})
export class CustomModalComponent implements OnInit {

  parastatikoForm!: UntypedFormGroup;
  @Input() statusDisableEpitagh!: boolean;
  @Input() insertMode!: boolean;
  @Input() editMode!: boolean;
  @Input() epitaghObj!: Epitagh;
  @Output() epitaghAdded =  new EventEmitter<Object>();
  @Output() epitaghUpdated = new EventEmitter<Object>();
  @Output() closeModalInsert = new EventEmitter();
  @Output() closeModalUpdate = new EventEmitter();

  hsstatus: boolean = false;
  
  //private fb: FormBuilder,
  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    
    this.parastatikoForm = new UntypedFormGroup({
      arepitagis: new UntypedFormControl('', Validators.required),
      afmekdoti: new UntypedFormControl('', [Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9), Validators.required]),
      companyname: new UntypedFormControl(''),
      hmekdosis: new UntypedFormControl(''),
      poso: new UntypedFormControl('')
    });


    /* this.parastatikoForm = this.fb.group({ 
     arepitagis: ['', Validators.required],
     afmekdoti: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9), Validators.required]],
     companyname: [''],
     hmekdosis: [''],
     poso: ['']
    }); */

    if (this.editMode && this.epitaghObj) {
      this.parastatikoForm.setValue({
        arepitagis: this.epitaghObj?.arepitagis,
        afmekdoti: this.epitaghObj?.afmekdoti,
        companyname: this.epitaghObj?.companyname,
        hmekdosis: (typeof this.epitaghObj.hmekdosis == 'string')? new Date(this.epitaghObj.hmekdosis): '',
        poso: this.epitaghObj?.poso
      });
    }

    if (this.statusDisableEpitagh) {
      this.parastatikoForm.disable();
    }

  }

  onEpitaghAdded() {
    console.log(this.parastatikoForm);
    this.epitaghAdded.emit({ model: this.parastatikoForm.value });
  }

  onEpitaghUpdated() {
    this.epitaghUpdated.emit({ model: this.parastatikoForm.value });
  }
    

  closemyModalinsertEpitagh() {
    this.closeModalInsert.emit();
  }

  closemyModalupdateEpitagh() {
    this.closeModalUpdate.emit();
  }

}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { faPenToSquare, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIf, NgFor, CurrencyPipe, DatePipe } from '@angular/common';

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

type formdata = {
  epitages: Epitagh[],
  statusdisablefieldsepitagh: boolean,
  totalamount: number,
  epitagessynoloposotemp: number,
  summary: number
};

@Component({
    selector: 'app-modal-example',
    templateUrl: './modal-example.component.html',
    styleUrls: ['./modal-example.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, FontAwesomeModule, CustomModalComponent, CurrencyPipe, DatePipe]
})
export class ModalExampleComponent implements OnInit {
  
  public modalRef!: BsModalRef;
  public modalConfirmDeleteParastatiko!: BsModalRef;
  locale: string = 'el';

  formdataObj!: formdata;
  epitaghUpdateFlag: boolean = false;
  epitaghInsertFlag: boolean = true;
  epitagh: Epitagh = <Epitagh>{};
  epitaghold: Epitagh = <Epitagh>{};
  editEpitaghId: number | undefined;
  passedToChild: Epitagh = <Epitagh>{};
  tempindex!: number;
  editIcon = faPenToSquare;  
  deleteIcon = faTrash;
  searchIcon = faSearch;

  
  constructor(private modalService: BsModalService, private toastr: ToastrService) {}

   ngOnInit() {
    this.formdataObj = {
      epitages: [],  
      statusdisablefieldsepitagh: true,
      totalamount: 0,
      epitagessynoloposotemp: 0,
      summary: 0
    };
   }

  openModalParastatiko(modalParastatiko: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalParastatiko, {
      class: 'modal-dialogue-centered modal-lg',
      backdrop: 'static'
    });
  }

  addListEpitagh(eventdata: any) {
    console.log('addListEpitagh called');
    console.log(eventdata);
    let checkFlag = true;

    this.epitagh = JSON.parse(JSON.stringify(eventdata.model));

    let flagcountepitagh = 0;
    for (let i = 0; i < this.formdataObj.epitages.length; i++) {
      if (this.formdataObj.epitages[i].arepitagis == this.epitagh.arepitagis) {
        flagcountepitagh++;
      }
    }

    if (flagcountepitagh > 0) {
      this.toastr.error('Έχετε ήδη εισάγει παραστατικό με αυτό τον αριθμό');
      checkFlag = false;
    }

    if (
      this.epitagh.arepitagis === undefined ||
      this.epitagh.arepitagis === null ||
      this.epitagh.arepitagis.length == 0
    ) {
      this.toastr.error('Δεν έχετε συμπληρώσει τον αριθμό του παραστατικού');
      checkFlag = false;
    }

    if (
      this.epitagh.poso === undefined ||
      this.epitagh.poso === null
    ) {
      this.toastr.error('Δεν έχετε συμπληρώσει το ποσό του παραστατικού');
      checkFlag = false;
    }

    if (
      this.epitagh.companyname === undefined ||
      this.epitagh.companyname === null ||
      this.epitagh.companyname.length == 0
    ) {
      this.toastr.error('Δεν έχετε συμπληρώσει την επωνυμία της επιχείρησης');
      checkFlag = false;
    }

    if (
      this.epitagh.afmekdoti === undefined ||
      this.epitagh.afmekdoti === null
    ) {
       this.toastr.error(
        'Δεν έχει συμπληρωθεί ο Α.Φ.Μ. του εκδότη του παραστατικού'
      ); 
      checkFlag = false;
    } else {
      if (!this.isValidAFM(this.epitagh.afmekdoti)) {
        this.toastr.error(
          'Ο Α.Φ.Μ. του εκδότη του παραστατικού δεν είναι έγκυρος'
        );
        checkFlag = false;
      } 
    }

    if (
      this.epitagh.hmekdosis === undefined ||
      this.epitagh.hmekdosis === null
    ) {
       this.toastr.error(
        'Δεν έχει συμπληρωθεί η ημερομηνία έκδοσης του παραστατικού'
      ); 
      checkFlag = false;
    } /* else {
      if (!this.isValidDate(this.epitagh.hmekdosis)) {
        this.toastr.error(
          'H ημερομηνία έκδοσης του παραστατικού δεν είναι έγκυρη'
        );
        checkFlag = false;
      }  
    } */

    if (checkFlag) {
      this.runCheckArEpitagis('insert');
    }
  }

  editlistEpitagh(index: number, modalParastatiko: TemplateRef<any>, mode: boolean) {
    if (mode) {
      this.formdataObj.statusdisablefieldsepitagh = true;
    } else {
      this.formdataObj.statusdisablefieldsepitagh = false;
    }
    console.log('edit list epitagh');
    console.log(index);
    this.editEpitaghId = index;
    this.epitagh = JSON.parse(JSON.stringify(this.formdataObj.epitages[index]));
    this.epitaghold = JSON.parse(JSON.stringify(this.formdataObj.epitages[index]));
    this.epitaghUpdateFlag = true;
    this.epitaghInsertFlag = false;
    this.passedToChild = this.epitagh;
    this.openModalParastatiko(modalParastatiko);
  }

  updatelistEpitagh(eventdata:any) {
    let checkFlag = true;
    console.log('updatelistEpitagh');
    console.log(this.editEpitaghId);
    this.epitagh = JSON.parse(JSON.stringify(eventdata.model));

    let flagcountepitagh = 0;

    if (this.formdataObj.epitages && Array.isArray(this.formdataObj.epitages)) {
      for (let i = 0; i < this.formdataObj.epitages.length; i++) {
        if (this.editEpitaghId !== undefined && i == this.editEpitaghId) {
          continue;
        }

        if (this.formdataObj.epitages[i].arepitagis == this.epitagh.arepitagis) {
          flagcountepitagh++;
        }
      }
    }

    if (flagcountepitagh > 0) {
      this.toastr.error('Έχετε ήδη εισάγει παραστατικό με αυτό τον αριθμό');
      checkFlag = false;
    }

    if (
      this.epitagh.arepitagis === undefined ||
      this.epitagh.arepitagis === null ||
      this.epitagh.arepitagis.length == 0
    ) {
      this.toastr.error('Δεν έχετε συμπληρώσει τον αριθμό του παραστατικού');
      checkFlag = false;
    }

    if (
      this.epitagh.arepitagis === undefined ||
      this.epitagh.arepitagis === null ||
      this.epitagh.arepitagis.length == 0
    ) {
      this.toastr.error('Δεν έχετε συμπληρώσει τον αριθμό του παραστατικού');
      checkFlag = false;
    }

    if (
      this.epitagh.poso === undefined ||
      this.epitagh.poso === null
    ) {
      this.toastr.error('Δεν έχετε συμπληρώσει το ποσό του παραστατικού');
      checkFlag = false;
    }

    if (
      this.epitagh.companyname === undefined ||
      this.epitagh.companyname === null ||
      this.epitagh.companyname.length == 0
    ) {
      this.toastr.error('Δεν έχετε συμπληρώσει την επωνυμία της επιχείρησης');
      checkFlag = false;
    }

    if (
      this.epitagh.afmekdoti === undefined ||
      this.epitagh.afmekdoti === null
    ) {
      this.toastr.error(
        'Δεν έχει συμπληρωθεί ο Α.Φ.Μ. του εκδότη του παραστατικού'
      );
      checkFlag = false;
    } else {
      if (!this.isValidAFM(this.epitagh.afmekdoti)) {
        this.toastr.error(
          'Ο Α.Φ.Μ. του εκδότη του παραστατικού δεν είναι έγκυρος'
        );
        checkFlag = false;
      }
    }

    if (
      this.epitagh.hmekdosis === undefined ||
      this.epitagh.hmekdosis === null
    ) {
      this.toastr.error(
        'Δεν έχει συμπληρωθεί η ημερομηνία έκδοσης του παραστατικού'
      );
      checkFlag = false;
    } 
    /* else {
      if (!this.isValidDate(this.epitagh.hmekdosis)) {
        this.toastr.error(
          'H ημερομηνία έκδοσης του παραστατικού δεν είναι έγκυρη'
        );
        checkFlag = false;
      }
    } */


    if (checkFlag) {
      this.runCheckArEpitagis('update');
    }
  }

  runCheckArEpitagis(str: string) {

      if (str == 'insert') {
        this.formdataObj.epitages.push(this.epitagh);
        this.epitagh = <Epitagh>{};
        this.SumPosoEpitages();
        this.modalRef.hide();
      } else {
        if (typeof this.editEpitaghId  == 'number') {
          this.formdataObj.epitages[this.editEpitaghId] = this.epitagh;
        }
        
        this.editEpitaghId = undefined;
        this.epitaghUpdateFlag = false;
        this.epitaghInsertFlag = true;
        this.SumPosoEpitages();
        this.modalRef.hide();
        // $("#myModalEpitagh").modal('hide');
      }
  }

  deletelistEpitagh(index: number) {
    this.formdataObj.epitages.splice(index, 1);
    this.editEpitaghId = undefined;
    this.epitagh = <Epitagh>{};
    this.SumPosoEpitages();
  }

  insertEpitagh(modalParastatiko: TemplateRef<any>) {
    this.formdataObj.statusdisablefieldsepitagh = false;
    this.epitagh = {};
    this.passedToChild = this.epitagh;
    this.epitaghUpdateFlag = false;
    this.epitaghInsertFlag = true;
    console.log('insert epitagh called');
    this.SumPosoEpitages();
    this.openModalParastatiko(modalParastatiko);
  }

  openModalDeleteParastatiko(template: TemplateRef<any>, index: number) {
    console.log(index);
    this.tempindex = index;
    this.modalConfirmDeleteParastatiko = this.modalService.show(template, {
      class: 'modal-md',
    });
  }

    // yes 
  confirmDeleteParastatiko(): void {
    this.deletelistEpitagh(this.tempindex);
    this.modalConfirmDeleteParastatiko.hide();
  }
  
  // no
  noDeleteParastatiko(): void {
    this.modalConfirmDeleteParastatiko.hide();
  }

  closemyModalinsertEpitagh() {
    console.log('close modal insert');

    this.epitagh = {};
    this.passedToChild = {};
    this.epitaghUpdateFlag = false;
    this.epitaghInsertFlag = true;
    this.SumPosoEpitages();
    this.modalRef.hide();
  }

  
  closemyModalupdateEpitagh() {
    console.log('close modal update');
    if (typeof this.editEpitaghId == 'number') {
      this.formdataObj.epitages[this.editEpitaghId] = this.epitaghold;
    }

    this.editEpitaghId = undefined;
    this.epitagh = {};
    this.passedToChild = {};
    this.epitaghUpdateFlag = false;
    this.epitaghInsertFlag = true;
    this.SumPosoEpitages();
    this.modalRef.hide();
  }


  SumPosoEpitages() {
    console.log('sum poso epitages is called');
    this.formdataObj.totalamount = 0;
    this.formdataObj.epitagessynoloposotemp = 0;
    this.formdataObj.summary = 0;

    for (let i = 0; i < this.formdataObj.epitages.length; i++) {
      this.formdataObj.epitagessynoloposotemp = this.formdataObj.epitagessynoloposotemp + Number(this.formdataObj.epitages[i].poso);
      this.formdataObj.totalamount = this.formdataObj.epitagessynoloposotemp;
    }
    console.log(this.formdataObj.totalamount);
  }

  isValidAFM(afm: string): boolean {
    if (!afm.match(/^\d{9}$/) || afm == '000000000') return false;

    var m = 1,
      sum = 0;
    for (var i = 7; i >= 0; i--) {
      m *= 2;
      sum += +afm.charAt(i) * m;
    }

    return (sum % 11) % 10 == +afm.charAt(8);
  }


}

import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormService } from '../_services/form.service';
import { DataService } from '../_services/data.service';
import { HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormlyFieldConfig } from '@ngx-formly/core';
import * as moment from 'moment/moment';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  base = 'payment-invoice';
  template = 'invoice';
  availableData = [];
  popup=false;
  token='';
  url='http://127.0.0.1:8000/viewinvoice/8821961';
  filename='teams_data.pdf';
  ermsg='';
  search = '';
  availabletotal = 0;
  mydate=Date.now();
  failedtotal = 0;
  API_URL='';


  page = 0;
  availablepage = 0;
  failedpage = 0;
  availableperPage=0;
  failedperPage=0;
  upcpage = 0;
  comppage = 0;

  @Input('paymentId') paymentId = '';

  constructor(private api: ApiService,
    private formService: FormService,
    public dataService: DataService,
    private matDialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

      this.activatedRoute.paramMap.subscribe(value => {
        if(value.get('paymentId')) {
          this.paymentId = value.get('paymentId');
          this.API_URL= environment.url+'viewinvoice/'+this.paymentId;
          this.init().then();

        }else {
          this.router.navigateByUrl('/dashboard').then();
        }
      });




    this.dataService.setTitle('View Cron');
  }


  async init() {
    let params = new HttpParams();
    const value = await this.api.get(this.base + '/' + this.paymentId, { params }).toPromise();
    if (value.status) {
       this.availableData = value.data.data;
       console.log(this.availableData);
    }
  }


  ngOnInit(): void {
  }
  checkDate(date){

    return date;

  }
}

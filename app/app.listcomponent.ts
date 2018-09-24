import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { list } from './list';
import * as FileSaver from 'file-saver';
import { PagerService } from './index';
@Component({
    selector : 'list',
    template : `
    <br>
    <table style="margin-left: auto; margin-right: auto;">
    <tr *ngFor="let item of pagedItems; let i = index">
    <td style="font-size:20px; padding-right:30px; font-family: 'Comic Sans MS', Arial, Helvetica, sans-serif;">{{item.date}}</td>
    <td><img src="../image/download3.png" (click)="downloadVideo(item.date)" width="20" height="20"></td>
    </tr>
    </table><br><br>
    <ul *ngIf="pager.pages && pager.pages.length" class="pagination">
                <li [ngClass]="{disabled:pager.currentPage === 1}" style="margin-left: auto; margin-right: auto;">
                    <img src="../image/left.png" (click)="setPage(pager.currentPage - 1)" width="20" height="20">
                </li>
                <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" style="margin-left: auto; margin-right: auto;">
                    <img src="../image/right.png" (click)="setPage(pager.currentPage + 1)" width="20" height="20">
                </li>
            </ul>
    `
})
export class listComponent {
    input : string = "d";
    file : any;
    theDataSource2 : Observable;
    index : number;
    pager : any = {};
    pagedItems : any[];
    videoName : string;

    getlist : Array<string> = [];

	constructor (private http : Http, private pagerService : PagerService) {
        this.theDataSource2 = this.http.get('http://192.168.0.21:8080/getList')
            .map(res => res.json());

        this.index = 0;
	}
    

	ngOnInit () {
		// 서버에서 데이터를 받아온다
       
        
        this.theDataSource2.subscribe(
			data => {
                this.getlist = data;
                this.getlist.sort(function(a : any, b: any){return b-a});
                this.pager = this.pagerService.getPager(this.getlist.length, 1);
                this.pagedItems = this.getlist.slice(this.pager.startIndex,this.pager.endIndex + 1);
			},
			err => console.log("Can't get list. Error code: %s, URL: %s ", err.status, err.url),
			() => console.log('list(s) are retrieved')
		);

            
       
    }
    setPage(page : number){
        this.pager = this.pagerService.getPager(this.getlist.length, page);
        this.pagedItems = this.getlist.slice(this.pager.startIndex,this.pager.endIndex + 1);
    }
    downloadVideo(data) {
                //this.file = new Blob([_base64ToArrayBuffer(this.input)], { type: 'video/mp4' });
                //this.viewload = "storedOK
                console.log(data);
                this.videoName = data + ".mp4";
                this.theDataSource = this.http.post('http://192.168.0.21:8080/and', this.videoName).map(res=>res.json());
                this.theDataSource.subscribe(
                    data => {
                    },
                    err => console.log(err),
                    () => console.log('Product(s) are retrieved')
                );
    }    
}




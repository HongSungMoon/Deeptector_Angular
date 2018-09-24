import { Component } from '@angular/core';

@Component({
    selector : 'mainc',
    template : `
    <img src="../image/loadingcctv.jpg" width="50" height="50"><br>
    <h1><strong>DEEPTECTOR</strong></h1>
    
    
    NOTICE
    
    <table border="1" style="margin-left: auto; margin-right: auto;">
    <tr><td width="30%" height="30%">0000005</td><td>공지사항5</td><td>2018-04-30</td></tr>
    <tr><td>0000004</td><td>공지사항4</td><td>2018-04-30</td></tr>
    <tr><td>0000003</td><td>공지사항3</td><td>2018-04-30</td></tr>
    <tr><td>0000002</td><td>공지사항2</td><td>2018-04-30</td></tr>
    <tr><td>0000001</td><td>공지사항1</td><td>2018-04-30</td></tr>
    </table>
    
    LASTEST
    <table border="1" style="margin-left: auto; margin-right: auto;">
    <tr>
    <td>최근동영상파일</td>
    <td>밑줄창</td>
    </tr>
    </table>
    `
})
export class mainComponent{
}
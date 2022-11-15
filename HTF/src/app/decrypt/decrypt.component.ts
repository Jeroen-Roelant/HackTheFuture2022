import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.decryptMessage("N3dZ2opfr/53XoYd9NqZdBwJYQFdnaTPmNAuRRvKON8=", "Ronald Weasley00", "Not Leviosaaa000"))
  }

  decryptMessage(spell: string, key: string, iv: string){
    let decryptedData = CryptoJS.AES.decrypt(spell, key, {
      iv: CryptoJS.enc.Base64.parse(iv)
    });

    return decryptedData.toString(CryptoJS.enc.Utf8);
  }
}

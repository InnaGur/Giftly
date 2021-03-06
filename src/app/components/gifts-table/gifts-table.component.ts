import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gift, GiftStatus } from 'src/app/models/gift.class';

@Component({
  selector: 'giftly-gifts-table',
  templateUrl: './gifts-table.component.html',
  styleUrls: ['./gifts-table.component.scss']
})
export class GiftsTableComponent implements OnInit {

  @Input() allowEditList: string;
  @Input() friendWatching: string;
  giftsArr: Array<Gift>;

  @Output() giftsChange = new EventEmitter();
  @Output() giftStatusChange = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  removeGift(gift: Gift): void {
    this.giftsArr = this.giftsArr.filter(obj => obj !== gift);
    this.giftsChange.emit(this.giftsArr);
  }

  isAvailable(status: GiftStatus): boolean {
    return status === GiftStatus.Taken;
  }

  getIsAllowEditList(): boolean {
    if (this.allowEditList === 'true') {
      return true;
    }
    return false;
  }

  getImgUrl(imgUrl: string) {
    if (imgUrl == undefined) {
      return 'assets/giftly.png';
    }
    return imgUrl;
  }

  @Input()
  get gifts() {
    return this.giftsArr;
  }

  set gifts(value) {
    this.giftsArr = value;
    this.giftsChange.emit(this.giftsArr);
  }

  showBuyGiftButton(gift: Gift) : boolean {
    return gift.Status == GiftStatus.ReadyForGrabs && this.friendWatching === 'true';
  }

  showFreeGiftButton(gift: Gift) : boolean {
    return gift.Status == GiftStatus.Taken && this.friendWatching === 'true' 
      && gift.boughtByCurrentUser === true;
  }

  changeGiftStatus(gift: Gift) {
    this.giftStatusChange.emit(gift);
  }
}

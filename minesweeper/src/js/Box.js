import { clickCheker } from "./clickCheker.js"
import { clickMarker } from "./clickMarker.js"
import { matrixInfoBombsAround } from "./index.js"
export class Box {
    isOpen = false;
    isMark = false;

    constructor(width, height, positionX, positionY) {
        // console.log("constr",width, height,positionX,positionY)
        this.width = width;
        this.height = height;
        this.positionX = positionX;
        this.positionY = positionY;
    }


    creater() {
        this.box = document.createElement('div');
        this.box.classList.add('box');
        this.box.style.width=`${this.width}%`;
        this.box.style.height=`${this.height}%`;
        const saveThis=this
        this.box.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            saveThis.clickRightButton()
         }, true); 
        this.box.addEventListener('click', this.clickLeftButton.bind(this));

        return this.box;
    }

    clickRightButton() {
        console.log('clickRightButton');
        !this.isOpent && (this.isMark = !this.isMark);
        if (!this.isOpent) {
            if (this.isMark) {
                this.box.classList.add('box_mark');
            } else {
                this.box.classList.remove('box_mark');
            }
        }
    }

    clickLeftButton() {
        if (!this.isOpent && !this.isMark) {
            this.openBox()

        }
    }


    openBox() {
        console.log('isOpent', this.positionX, this.positionY);
        this.isOpent = true;
        const isBomb = clickCheker(this.positionX, this.positionY)

        if (isBomb) {
            this.box.classList.add('box_mina');
            console.log("КОНЕЦ");
        } else {
            this.box.classList.add('box_clear');
            const bombsAround = matrixInfoBombsAround[this.positionX][this.positionY];
            this.box.innerText = bombsAround;
            console.log("УДАЧА");
            clickMarker(this.positionX, this.positionY);
        }
    }

}
canvas=document.getElementById("mycanvas");
b=canvas.getContext("2d");
bg="street.jfif";
c1="car 1.png";
c1x=100;
c1y=100;
c1w=60;
c1h=50;
c2="car 2.png";
c2x=100;
c2y=100;
c2w=60;
c2h=50;
function a(){
    bt=new Image();
    bt.onload=uploadbg;
    bt.src=bg;

    c1t=new Image();
    c1t.onload=uploadc1;
    c1t.src=c1;

    c2t=new Image();
    c2t.onload=uploadc2;
    c2t.src=c2;
}
function uploadbg(){
    b.drawImage(bt,0,0,canvas.width,canvas.height);
}
function uploadc1(){
    b.drawImage(c1t,c1x,c1y,c1w,c1h);
}
function uploadc2(){
    b.drawImage(c2t,c2x,c2y,c2w,c2h);
}
window.addEventListener("keydown",c);
function c(e){
    k=e.keyCode;
    if (k=='37') {
        left();
    }
    if (k=='39') {
        right();
    }
    if (k=='38') {
        up();
    }
    if (k=='40') {
        down();
    }
    if (k=='65') {
        left1();
    }
    if (k=='68') {
        right1();
    }
    if (k=='87') {
        up1();
    }
    if (k=='83') {
        down1();
    }
}
function left(){
    if (c1x>=0) {
        c1x=c1x-10;
        uploadbg();
        uploadc1();
    }
}
function right(){
    if (c1x<=940) {
        c1x=c1x+10;
        uploadbg();
        uploadc1();
    }
}
function up(){
    if (c1y>=0) {
        c1y=c1y-10;
        uploadbg();
        uploadc1();
    }
}
function down(){
    if (c1y<=550) {
        c1y=c1y+10;
        uploadbg();
        uploadc1();
    }
}
function left1(){
    if (c2x>=0) {
        c2x=c2x-10;
        uploadbg();
        uploadc2();
    }
}
function right1(){
    if (c2x<=940) {
        c2x=c2x+10;
        uploadbg();
        uploadc2();
    }
}
function up1(){
    if (c2y>=0) {
        c2y=c2y-10;
        uploadbg();
        uploadc2();
    }
}
function down1(){
    if (c2y<=550) {
        c2y=c2y+10;
        uploadbg();
        uploadc2();
    }
}
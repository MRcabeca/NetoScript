var NoviE=document.querySelector('.B2');
var NoviD=document.querySelector('.B1');
var PromoE=document.querySelector('.B4');
var PromoD=document.querySelector('.B3');


var produto=["imagens/produto1.jpg","imagens/produto2.jpg","imagens/produto3.jpg"
,"imagens/produto4.png","imagens/produto5.jpg","imagens/produto6.png"];
var produtoValor1=0;
var produtoValor2=1;
var produtoValor3=2;
var produtoValor4=3;
var produtoValor5=4;
var produtoValor6=5;

NoviE.onclick=function() {
    produtoValor1=(produtoValor1+1)%6;
    produtoValor2=(produtoValor2+1)%6;
    produtoValor3=(produtoValor3+1)%6;

    document.querySelector('.Novidade1').src=produto[produtoValor1];
    document.querySelector('.Novidade2').src=produto[produtoValor2];
    document.querySelector('.Novidade3').src=produto[produtoValor3];
};

NoviD.onclick=function() {
    produtoValor1=(produtoValor1-1);
    produtoValor2=(produtoValor2-1);
    produtoValor3=(produtoValor3-1);
    if(produtoValor1 < 0){
        produtoValor1 = 5;
    }
    if(produtoValor2 < 0){
        produtoValor2 = 5;
    }
    if(produtoValor3 < 0){
        produtoValor3 = 5;
    }
    document.querySelector('.Novidade1').src=produto[produtoValor1];
    document.querySelector('.Novidade2').src=produto[produtoValor2];
    document.querySelector('.Novidade3').src=produto[produtoValor3];
};

PromoE.onclick=function() {

    produtoValor4=(produtoValor4+1)%6;
    produtoValor5=(produtoValor5+1)%6;
    produtoValor6=(produtoValor6+1)%6;

    document.querySelector('.Promo1').src=produto[produtoValor4];
    document.querySelector('.Promo2').src=produto[produtoValor5];
    document.querySelector('.Promo3').src=produto[produtoValor6];

};

PromoD.onclick=function() {
    produtoValor4=(produtoValor4-1);
    produtoValor5=(produtoValor5-1);
    produtoValor6=(produtoValor6-1);
    if(produtoValor4 < 0){
        produtoValor4 = 5;
    }
    if(produtoValor5 < 0){
        produtoValor5 = 5;
    }
    if(produtoValor6 < 0){
        produtoValor6 = 5;
    }
    document.querySelector('.Promo1').src=produto[produtoValor4];
    document.querySelector('.Promo2').src=produto[produtoValor5];
    document.querySelector('.Promo3').src=produto[produtoValor6];
};
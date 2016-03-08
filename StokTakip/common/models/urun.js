module.exports = function(Urun) {
   
   //urun kodu min : 3 max : 5 olabilir
   Urun.validatesLengthOf('urunKodu', 
     {
         min : 3,
         max : 5,
         message : {
            min : 'Ürün Kodu Minimum 3 Karakter Olmalı',
            max : 'Ürün Kodu Maksimum 5 Karakter Olmalı'
         }
     }
   );
};

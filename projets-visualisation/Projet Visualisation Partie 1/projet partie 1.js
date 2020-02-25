}
    function Afficher(){
        var recup=Recuperer()
        if(categorie=="Categorie A"){
            var  SB=NBheures*1000;
    }
        if(Categorie=="Categorie B"){
            var  SB=NBheures*7500;
    }
        if (Categorie=="Categorie C"){
            var  SB=NBheures*5000;
    }
        if(Heuresup<=5){
            if (Categorie=="Categorie A"){
                var HS=NBheuresup*130%*10000;
            }
            if (Categorie=="Categorie B"){
                var  HS=NBheuresup*130%*7500;
            }
            if (Categorie=="Categorie C"){
                var  HS=NBheuresup*130%*5000;
            }
        if(Heuresup>5){
            if(Categorie=="Categorie A"){
                var  HS=NBheuresup*145%*10000;
            }
            if(Categorie=="Categorie B"){
                var  HS=NBheuresup*145%*7500;
            }
            if(Categorie=="Categorie C"){
                var  HS=NBheuresup*145%*5000;
            }
        }
        var S=SB+HS+Avantage;
        if(Categorie=="Categorie A"){
            var RAS=S*10%
        }
        if(Categorie=="Categorie B"){
            var  RAS=S*7.5%
        }
        if(Categorie=="Categorie C"){
            var  RAS=S*5%
        }
        var  SN=S-(S*Tauximpot)
        if(Categorie=="Categorie A"){
            var  SN=S-RAS
        }
        if(Categorie=="Categorie B"){
            var  SN=S-RAS
        }
        if(Categorie=="Categorie C"){
            var  SN=S-RAS
        }


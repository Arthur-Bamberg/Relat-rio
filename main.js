function validar(){
     var dia = new Date().getDate()
     let res = document.getElementById('res')
     const hora = new Date().getHours()
     if(hora<12){
         res.innerHTML = `Bom dia!<br><br>`
     }else if(hora<18){
         res.innerHTML = `Boa tarde!<br><br>`
     }else{
         res.innerHTML = `Boa noite!<br><br>`
     }
     for(c=0;c<5;c++){
             const tra = document.getElementsByName('tra')
             const trab = document.getElementsByName('trab')
             const trab0 = document.getElementsByName('trab0')
             const trab1 = document.getElementsByName('trab1')
             const trab2 = document.getElementsByName('trab2') 
             const text0 = document.getElementById('r0t').value            
             const text1 = document.getElementById('r1t').value
             const text2 = document.getElementById('r2t').value
             const text3 = document.getElementById('r3t').value
             const text4 = document.getElementById('r4t').value  
             console.log(text1, text2, text3, text4)
             if(c==0){
                 dia-=8
             }if(dia<1){
                dia += 30
            }else if(dia>30){
                dia -= 30
                 }
             res.innerHTML += dia/10>=1 ? `<strong>${dia}</strong>` : `<strong>0${dia}</strong>`;
             dia++
             switch(c){
                 case 0 : res.innerHTML += `<strong>-SEG: </strong>`
                 if(tra[0].checked){
                     res.innerHTML += `Consultoria da descrição da imagem d${text0} para as redes sociais do Museu;<br>`
                 }else if(tra[1].checked){
                     res.innerHTML += `Pesquisa bibliográfica: ${text0};<br>`
                 }else{
                     res.innerHTML += `<br>`
                 };
                 break;
                 case 1 : res.innerHTML += `<strong>-TER: </strong>`
                 if(trab[0].checked){
                     res.innerHTML += `Consultoria da descrição da imagem d${text1} para as redes sociais do Museu;<br>`
                 }else if(trab[1].checked){
                     res.innerHTML += `Pesquisa bibliográfica: ${text1};<br>`
                 }else{     
                     res.innerHTML += `<br>`
                 };
                 break;
                 case 2 : res.innerHTML += `<strong>-QUA: </strong>`
                 if(trab0[0].checked){
                    res.innerHTML += `Consultoria da descrição da imagem d${text2} para as redes sociais do Museu;<br>`
                 }else if(trab0[1].checked){
                     res.innerHTML += `Pesquisa bibliográfica: ${text2};<br>`
                 }else{
                     res.innerHTML += `<br>`
                 };
                 break;
                 case 3 : res.innerHTML += `<strong>-QUI: </strong>`
                 if(trab1[0].checked){
                    res.innerHTML += `Consultoria da descrição da imagem d${text3} para as redes sociais do Museu;<br>`
                 }else if(trab1[1].checked){
                    res.innerHTML += `Pesquisa bibliográfica: ${text3};<br>`
                 }else{
                     res.innerHTML += `<br>`
                 };
                 break;
                 case 4 : res.innerHTML += `<strong>-SEX: </strong> `
                 if(trab2[0].checked){
                    res.innerHTML += `Consultoria da descrição da imagem d${text4} para as redes sociais do Museu;<br>`
                 }else if(trab2[1].checked){
                    res.innerHTML += `Pesquisa bibliográfica: ${text4};<br>`
                 }else{
                     res.innerHTML += `<br>`
                 };
                 break;                    
         }
     } 
      res.innerHTML += `<br>Abraços!` 
    }

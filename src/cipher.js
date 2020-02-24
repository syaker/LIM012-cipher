const cipher = {

encode : (numEspacios, codigo) => {

          let juntar = '';
      for (let i = 0; i < codigo.length; i++) {
          let convertirNum = (codigo.charCodeAt(i) - 65 + parseInt(numEspacios))%26 + 65;
          let convertirLetra = String.fromCharCode(convertirNum);
          juntar += convertirLetra;

        }
          return juntar;
},

decode : (numEspaciosDes, codigo2) => {

          let juntar2 = '';
      for (let i = 0; i < codigo2.length; i++) {
          let convertirNumDes = (codigo2.charCodeAt(i) + 65 - parseInt(numEspaciosDes))%26 + 65;
          let convertirLetraDes = String.fromCharCode(convertirNumDes);
          juntar2 += convertirLetraDes;
          
          }
          return juntar2;
}

};


export default cipher

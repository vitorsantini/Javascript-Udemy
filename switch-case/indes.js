const data = new Date('1987-04-23 00:00:00');
const diaSemana = data.getDay();

let stringDiaSemana = '';

switch(diaSemana){
    case 0:
        stringDiaSemana = 'Domingo';
        break;
    case 1:
        stringDiaSemana = 'Segunda';
        break;
    case 2:
        stringDiaSemana ='Terça';
        break;
    case 3:
        stringDiaSemana = 'Quarta';
        break;
    case 4:
        stringDiaSemana = 'Quinta';
        break;
    case 5:
        stringDiaSemana = 'Sexta';
        break;
    case 6:
        stringDiaSemana = 'Sabado';
        break;    
}

console.log(stringDiaSemana);

// // Homework 1

// let num = +prompt('Yashirilgan sonni toping')

// if(num==1){
//     alert('Yashirilgan sondan ancha uzoqdasiz')
// }else if(num==15){
//     alert('Hali uzoqdasiz')
// }else if(num==20){
//     alert('Yana qoshing')
// }else if(num==30){
//     alert('Siz osha sonni topdingiz')
// }else if(num==35){
//     alert('Otib kettingiz')
// }else if(num==40){
//     alert('Uzoqlashvosiz')
// }else if(num==50){
//     alert('Juda uzoqdasiz')
// }

//homework 2

// let oy = prompt('Biror oyni kiriting')
//  if(oy =='yanvar'){
//     alert('yanvar oyida 31 kun bor')
// }else if(oy =='fevral'){
//     alert('fevral oyida 28 kun bor')
// }else if(oy =='mart'){
//     alert('mart oyida 31 kun bor')
// }else if (oy == 'aprel'){
//     alert(' aprel oyida 30 kun bor')
// }else if (oy == 'may'){
//     alert(' may oyida 31 kun bor')
// }else if (oy == 'iyun'){
//     alert('  iyun oyida 30 kun bor')
// }else if (oy == 'iyul'){
//     alert(' iyul oyida 31 kun bor')
// }else if (oy == 'avgust'){
//     alert(' avgust  oyida 31 kun bor')
// }else if (oy == 'sentabr'){
//     alert(' sentabr oyida 30 kun bor')
// }else if (oy == 'oktyabt'){
//     alert(' oktyabt  oyida 31 kun bor')
// }else if (oy == 'noyabr'){
//     alert(' noyabr oyida 30 kun bor')
// }else if (oy == 'dekabr'){
//     alert('  dekabr oyida 31 kun bor')
// }


// homework 3


// let yosh = +prompt('Yoshingizni kiriting')

// if( 0 <= 18 && !isNaN(0) && !isNaN(18)){
//         alert('siz hali oqishingiz kerak!')
// }else if( 18 <= 30 && !isNaN(18) && !isNaN(30)){
//         alert('siz hali ishlashingiz kerak!')
// }else if( 31 != 45 && !isNaN(31) && !isNaN(45)){
//     alert('siz tez orada pensiyaga chiqasiz!')
// }else if( 46 <= 60 && !isNaN(46) && !isNaN(60)){
//         alert('siz pensiyadasiz!')
// }else if( 61 <= 100 && !isNaN(61) && !isNaN(100)){
//         alert('Damizzi olin :)')
// }else('hatolik')




//                                           // Homework 1

// let num = +prompt('Yashirilgan sonni toping')

// if(num==2){
//     alert('Yashirilgan sondan ancha uzoqdasiz')
// }else if(num==8){
//     alert('Hali uzoqdasiz')
// }else if(num==10){
//     alert('Yana qoshing')
// }else if(num==17){
//     alert('Siz osha sonni topdingiz')
// }else if(num==20){
//     alert('Otib kettingiz')
// }else if(num==22){
//     alert('Uzoqlashvosiz')
// }else if(num==25){
//     alert('Juda uzoqdasiz')
// }






do{
    let num = +prompt('Sonni toping')
    if(isNaN(num)){
        alert('siz son kiritmadingiz');
    }else if(num > 100){
        alert('siz 100 dan katta son kiritingiz ')
    }
    else if(num > 30){
        alert('kamaytiring')
    }else if(num == 0){ 
        alert(' siz 0 kiritingiz');
    }
    else if(num < 30){
        alert('kopaytiring');
    }
        else if(num  < 0){
        alert('siz 0 dan kichik son kiritingiz');
    }

}while(num !== 30){
    alert('Uraaaaa')
}
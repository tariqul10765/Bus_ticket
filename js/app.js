/*show parragraf*/
$('.from-group').click(function(){
    $(this).siblings('.from-group').children('.lbl').hide();
    $(this).children('.lbl').slideDown(500);
    // $(this).children('.group-item').css("background","black" );
   
})



$('.from-group2').click(function(){

    $(this).children('.lbl').slideDown(500);
});

$('.datepicker').datepicker();



// $('.lb').click(function(e){
//     $(this).siblings('.player').toggle(500);
       
//     })
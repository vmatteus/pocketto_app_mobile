$(document).ready(function(){
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('(00) 00000-0000');
    $('.confirmation-code').mask('000000');

    $('.custom-upload input[type=file]').change(function(){
        $(this).next().find('input').val($(this).val());
    });
});

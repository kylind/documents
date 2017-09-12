$(function(){

    function alignField() {
        $('.fieldSpec.align-back').each(function() {

            var fieldSpec = $(this).next('.fieldSpec');
            var label = fieldSpec.find('.labelText');
            var des = fieldSpec.find('.description');

            $(this).find('.labelText').height(label.outerHeight());
            $(this).find('.description').height(des.outerHeight());

        });
        $('.fieldSpec.align-front').each(function() {
            var fieldSpec = $(this).prev('.fieldSpec');
            var label = fieldSpec.find('.labelText');
            var des = fieldSpec.find('.description');

            $(this).find('.labelText').height(label.outerHeight());
            $(this).find('.description').height(des.outerHeight());
        });
    }

    function resetField() {
        $('.fieldSpec.align-back').each(function() {


            $(this).find('.labelText').height('auto');
            $(this).find('.description').height('auto');

        });
        $('.fieldSpec.align-front').each(function() {
            $(this).find('.labelText').height('auto');
            $(this).find('.description').height('auto');
        });
    }

    //jrespond
    var jRes = jRespond([
        {
            label: 'handheld',
            enter:600,
            exit: 3000
        }
    ]);

    setTimeout(function(){
        jRes.addFunc({
            breakpoint: 'handheld',
            enter: function() {
                 $(window).on('resize',alignField);
                 alignField();

            },
            exit:function(){
                 $(window).off('resize',alignField);
                 resetField();

            }

        });
    },50);




});
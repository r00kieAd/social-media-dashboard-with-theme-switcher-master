$('.grid-x').hover(
    function() {
        $(this).css({
            'filter': 'brightness(0.95)',
            'cursor': 'pointer'
        });
    },

    function() {
        $(this).css({
            'filter': 'brightness(1)'
        });
    }
)

$('#myToggle').click(
    function() {
        if (!$(this).prop('checked')) {
            $(this)[0].checked = false;
            return 
        }
        $(this)[0].checked = true;
    }
);

function switchToDarkMode() {
    return
}
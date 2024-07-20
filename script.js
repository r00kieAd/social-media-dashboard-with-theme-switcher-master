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
            switchToDarkMode();
            return 
        }
        $(this)[0].checked = true;
        switchToLightMode();
    }
);

function switchToDarkMode() {
    $('.mode').text('Light Mode');
    $('body').css('background-color', 'white');
    $('#bg').css('background', 'hsl(225, 100%, 98%)');
    $('.grid-x').css('background-color', 'hsl(227, 47%, 96%)');
    $('.heading').css({'color': 'hsl(230, 17%, 14%)'});
    $('.title-2').css({'color': 'hsl(228, 12%, 44%)'});
    $('.user-info').css({'color': 'hsl(228, 12%, 44%)'});
    $('.followers').css({'color': 'hsl(230, 17%, 14%)'});
    $('.stat-main').css({'color': 'hsl(230, 17%, 14%)'});
    // hsl(228, 34%, 66%)
}

function switchToLightMode() {
    $('.mode').text('Dark Mode');
    $('body').css({'background-color':'hsl(230, 17%, 14%)',
        'transition': '.2s ease'
    });
    $('#bg').css({'background': 'hsl(232, 19%, 15%)',
        'transition': '.2s ease'
    });
    $('.grid-x').css({'background-color': 'hsl(228, 28%, 20%)',
        'transition': '.2s ease'
    });
    $('.heading').css({'color': 'white',
        'transition': '.2s ease'
    });
    $('.title-2').css({'color': 'white',
        'transition': '.2s ease'
    });
    $('.user-info').css({'color': 'white',
        'transition': '.2s ease'
    });
    $('.followers').css({'color': 'white',
        'transition': '.2s ease'
    });
    $('.stat-main').css({'color': 'white',
        'transition': '.2s ease'
    });
}
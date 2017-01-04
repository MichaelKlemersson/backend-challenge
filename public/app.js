function checkIfIsAPalindrome(string) {
    $.post('/is-palindrome', { text: string }, function(response) {
        $('.jumbotron > .alerts > .alert-success').removeClass('hidden');
        $('.jumbotron > .alerts > .alert-danger').addClass('hidden');
    }).fail(function(err) {
        $('.jumbotron > .alerts > .alert-success').addClass('hidden');
        $('.jumbotron > .alerts > .alert-danger').removeClass('hidden');
    }).done(function() {
        setTimeout(function() {
            $('.jumbotron > .alerts > .alert').addClass('hidden');
        }, 3000);
    });
}

$(function() {
    $('#btn-search').on('click', function() {
        checkIfIsAPalindrome($('#input-palindrome').val().trim());
    });

    $('#input-palindrome').on('keyup', function(e) {
        if (e.keyCode == 13) {
            e.stopPropagation();
            checkIfIsAPalindrome($(this).val().trim());
        }
    });
});

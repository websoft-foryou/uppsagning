window.onscroll = function() {myFunction()};

var header = document.getElementById("mainmenu-area");
var sticky = header.offsetTop;
var window_is_large = false;
/* format: 'key1': {'title' : string, 'answer' : string },
            'key2': {'title' : string, 'answer' : string },
 */
$questions = {
    'question-1': {
        'title' : 'I have received tow invoices for my electriciy contract - <p>What does that man?',
        'answer': 'If you have switched electricity contracts through us at My services, it alwasy measn that your previous electricity agreement has been terminated in connection with the exchange, since you cannot have tow active electricity trading agreements at the same address.\n' +
            'Why did you then receive tow invoices?\n' +
            '<p>' +
            'Well, when it comes to electricity contracts it is always divided into 2 parts, electricity grids and electricity trading.\n' +
            'Power grids are always connected to the area where you live and can never be changed.\n' +
            '<p>' +
            'You always get an invoice for your electricity grid.\n' +
            '<p>' +
            'Electricity agreement is the agreement you can exchange between diffeerent suppliers and this is also the one that you have changed through us at My Services.\n' +
            '<p>' +
            'You always get an invoice for your electricity trade.\n' +
            'If you previously received an invocie, it means that you probably had both your electricity grid and your electricity deal with the same supplier'
    },
    'question-2': {
        'title' :'',
        'answer' : ''
    },
    'question-3': {
        'title' :'',
        'answer' : ''
    },
    'question-4': {
        'title' :'',
        'answer' : ''
    },
    'question-5': {
        'title' :'',
        'answer' : ''
    },
    'question-6': {
        'title' :'',
        'answer' : ''
    },
    'question-7': {
        'title' :'',
        'answer' : ''
    },
    'question-8': {
        'title' :'',
        'answer' : ''
    },
    'question-9': {
        'title' :'Why do I need Mobile Bank ID to use My Services?',
        'answer' : ''
    },
    'question-10': {
        'title' :'Is it Safe to Use My Services',
        'answer' : ''
    }
};

$questions['question-2']['title'] = $questions['question-1']['title'];
$questions['question-2']['answer'] = $questions['question-1']['answer'];
$questions['question-3']['title'] = $questions['question-1']['title'];
$questions['question-3']['answer'] = $questions['question-1']['answer'];
$questions['question-4']['title'] = $questions['question-1']['title'];
$questions['question-4']['answer'] = $questions['question-1']['answer'];
$questions['question-5']['title'] = $questions['question-1']['title'];
$questions['question-5']['answer'] = $questions['question-1']['answer'];
$questions['question-6']['title'] = $questions['question-1']['title'];
$questions['question-6']['answer'] = $questions['question-1']['answer'];
$questions['question-7']['title'] = $questions['question-1']['title'];
$questions['question-7']['answer'] = $questions['question-1']['answer'];
$questions['question-8']['title'] = $questions['question-1']['title'];
$questions['question-8']['answer'] = $questions['question-1']['answer'];

$questions['question-9']['answer'] = $questions['question-1']['answer'];

$questions['question-10']['answer'] = $questions['question-1']['answer'];

$(document).ready(function () {
    if ($(window).width() > 576) window_is_large = true;
    $('.faq-question').click(function() {
        var key = $(this).attr('datakey');
        $('.modal-title').html($questions[key]['title']);
        $('.modal-body').html($questions[key]['answer']);

        $('#answer_form').modal('show');
    })
})

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


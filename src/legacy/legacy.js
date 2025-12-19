import $ from 'jquery';

$(document).on("click", ".accordion__header", function () {
    $(this).next().slideToggle()
})
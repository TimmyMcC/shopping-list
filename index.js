$(function() {

// here i want to add a <li> complete with buttons
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    $('ul').append($(
      '<li><span class="shopping-item">' +
      ${text: $('#js-shopping-entry').val()} +
      '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li'
    ));
  });

// here i want to be able to check or uncheck (strikethrough or un-strikethrough) the list item based on clicking the 'check' button
  $('.shopping-item-toggle').click(function() {
    const checked = $(event.currentTarget);
    checked.toggleClass('shopping-item__checked');
  });

// here i want to be able to remove a <li> by clicking the 'delete' button
  $('.shopping-item-delete').click(function() {
    const deleted = $(event.currentTarget);
    deleted.remove('???');
  });
})

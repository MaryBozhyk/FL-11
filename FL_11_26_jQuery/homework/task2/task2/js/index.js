$(document).ready(function () {
  const $list = $(".list");
  const $input = $("#add-input");
  const $add = $("#add-submit");
  const $total = $('span[some-attr]');
  const $done = $('.total');
  const $totalVal = $list.children().length;
  const $doneVal = $('.done').length;
  const $inProgress = $('.in-progress');

  const todos = [
    {
      text: "Buy milk",
      done: false
    },
    {
      text: "Play with dog",
      done: false
    }
  ];

  $(todos).todolist($list);

  const itemActions = {

    addItem: function (name) {
      item = {
        text: name,
        done: false
      }
      todos.push(item);
      $(item).todolist($list);

      $('.item-text').click(function () {
        itemActions.doneItem($(this));
        console.log('yes')
      });

      $('.item-remove').click(function () {
        itemActions.deleteItem($(this).parent());
      });
    },

    doneItem: function (item) {
      item.done = true;
      item.addClass('done');
    },

    deleteItem: function (item) {
      item.remove();
      $total.text($list.children().length)
    },

    countingTotal: function () {
      $total.text($totalVal)
      $done.text($doneVal)
      $inProgress.text($totalVal - $doneVal)
    }

  }

  $add.click(function () {
    itemActions.addItem($input.val());
    $input.val('');
  });

  $('.item-text').click(function () {
    itemActions.doneItem($(this));
  });

  $('.item-remove').click(function () {
    itemActions.deleteItem($(this).parent());
  });

});
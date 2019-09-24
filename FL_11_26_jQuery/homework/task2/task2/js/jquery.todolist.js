(function($){
 $.fn.todolist = function(list){
     let parentList = $(list)

    this.each(function(i, item){
        $(parentList).append(($('<li>')).attr('class','item').append(
                $('<span>').attr('class', 'item-text').append(item.text)).append($('<button>').attr('class', 'item-remove').append('Remove')));    
    })

    return parentList
 };

})(jQuery);
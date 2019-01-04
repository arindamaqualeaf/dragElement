var isResizing = false,
    lastDownX = 0;

$(function () {
    var dragAble = $('.dragAble');
    var objectWidth = dragAble.width();
    var objectHeight = dragAble.height();
    console.log(objectWidth);
    dragAble.on('mousedown', function (e) {
        isResizing = true;
        lastDownX = e.clientX;


    }).on('mouseup', function (e) {
        // $(this).css('cursor', 'default');
        // alert("MouseUp");
    });
    $(document).on('mousemove', function (e) {
        // we don't want to do anything if we aren't resizing.
        var x = e.clientX;
        var y = e.clientY;
        // var leftOfset = dragAble.offset().left;
        // var rightOfset = dragAble.offset().top;
        // dragAble.on('mousedown', function (e) {
        //     var offset = dragAble.offset();
        //     var relativeX = (e.pageX - offset.left);
        //     var relativeY = (e.pageY - offset.top);

        //     console.log(relativeY, relativeX);
        //     return relativeX, relativeY;
        // });


        // console.log(leftOfset, rightOfset);


        if (!isResizing)
            return;


        // var offsetRight = container.width() - (e.clientX - container.offset().left);
        // dragAble.css('position', "absolute");   
        // var mousePointerLocation = x - leftOfset;
        // console.log(mousePointerLocation);
        dragAble.css('left', x - objectWidth / 2);
        dragAble.css('top', y - objectHeight / 2);

    }).on('mouseup', function (e) {
        // stop resizing       
        isResizing = false;
    });
});
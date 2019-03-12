$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#Video").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#Video").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#Video").attr('src', url);
    });
});

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#catVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#catModal").on('hide.bs.modal', function(){
        $("#catVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#catModal").on('show.bs.modal', function(){
        $("#catVideo").attr('src', url);
    });
});
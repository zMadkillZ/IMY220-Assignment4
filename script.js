
$(".details").each(function(i, item) {
      $(item).find('button').on("click", function(){
            if($(item).find('span').is(":visible")){
                console.log(item);
                console.log("Testing!");
                var type = $(item).attr("data-type");
                var val = $(item).find( "span" ).html();
                console.log(type);
                console.log(val);
                $(item).find('span').hide();
                $(item).find('b').hide();
                $(item).append("<input type="+ type +" value="+ val +" />");
                $(item).find('button').html("Update");
            }
            else{
                var test = $(item).find("input").val();
                console.log(test);
                $(item).find('span').html(test);
                $(item).find('span').show();
                $(item).find('b').show();
                $(item).find('button').html("Edit");
                $(item).find('input').remove();
            }
      })
  });


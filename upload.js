

//fetch the deatils and append it
//just use .val() method on input box to fetch what has been written
let count=0;
$(document).ready(function(){
    $("input[type=submit]").click(function(e){
            var rollNo=$('#Roll-no').val();
            var name=$("#Name").val();
            var marks=$('#Marks').val();
             if(rollNo==""||name==""||marks=="")
             {
                 alert("please fill all the input field");
             }
             else
             {
                     $('.display-section').append(
                       '<div class="item"> Roll no-<span>"'+rollNo +"</span>,<span>"+name +"</span> has scored <span>"+marks+" </span></div>"
                      );

                     $('span').css({
                         backgroundColor : "green",
                        color: "white",
                        padding:"3px"
                     });
                    $('.item').css({
                         position:"relative",
                        width:"100%",
                         height:"45px",
                        fontSize:"1.2rem",
                        fontFamily:" 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        //  marginLeft:"20px" ,
                        // marginBottom:"3px",
                        // marginTop:"-1px"
                        padding:"10px 20px",
                        marginTop:"10px"
                        
                 
                     });
                        // $('.display-section p').toggleClass(".bg");

                         e.preventDefault();
                 }
    });

});

//jquery append  was just flickering and going was not saving.
//so u must use event.preventDefault()
//input button is a submit button, so is submitting the form back to itself,\
//  which means the page is reloaded.
             
                //toggle class
 // if(count%2==0){
            //      $('.display-section p').addClass(".bg");
            // }else{
            //     $('.display-section p').removeClass(".bg");
            // }
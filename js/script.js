$(function(){
  
  $("nav a").click(function(e){
       e.preventDefault();
        var secID = e.currentTarget.id;
 
      $("html, body").animate({
        scrollTop: $($.attr(this, 'href')).offset().top}, 1000); 
    
  })
  
});

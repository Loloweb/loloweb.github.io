$(function() { // Spin.
    
    var $rota = $('.spin')
    
    $rota.click(function(){
        var $this = $(this);
        
        if($this.data('rotating')){
            clearInterval($this.data('rotating'));
            $this.data('rotating', false)
        } else {
            $this.data('rotating', setInterval(function(){
                var degree = $this.data('degree') || 0;
                $this.css({ transform: 'rotate(' + degree + 'deg)'});
                $this.data('degree', ++degree)
            }, 5));
        }
    });
});

function cache() {
    // Get the checkbox
    var checkBox = document.getElementById("cache");
    // Get the output
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output
    if (checkBox.checked == false){
      stuff.style.display = "contents";
    } else {
      stuff.style.display = "none";
    }
  }
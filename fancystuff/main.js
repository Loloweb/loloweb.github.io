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

$(function() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let ascii = document.getElementById('ascii');
    if (params.has('uwu')) {
        if (params.has('uwu')) {
            // Replace HTML with SVG
            ascii.innerHTML = `<div style="display: flex; ">
                    <img src="/img/vtuberlolo.png" alt="uwu" style="width: 50%; height: auto;">
                </div>`;
        }
    }
})

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
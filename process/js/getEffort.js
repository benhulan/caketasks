function getEffort(){
    var minSliderValue = document.getElementById("aptEffort").data("slider-min");
    var maxSliderValue = document.getElementById("aptEffort").data("slider-max");

    document.getElementById('aptEffort').slider({
        value : 0,
      formatter: function(value) {
        return 'Effort: ' + value;
      }
    });

    // If You want to change input text using slider handler
    document.getElementById('aptEffort').on('slide', function(slider){
      document.getElementById("inputValue").val(slider.value);
    });

    // If you want to change slider using input text
    document.getElementById("inputValue").on("keyup", function() {
        var val = Math.abs(parseInt(this.value, 10) || minSliderValue);
        this.value = val > maxSliderValue ? maxSliderValue : val;
        document.getElementById('aptEffort').slider('setValue', val);
    });
};
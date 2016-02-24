    function translate(lang) {
        var url = 'http://miosito.it/?p='; //redirect url
        var arrayPostEn = ['2','10','5'];
        var arrayPostIt = ['4','11','7'];
        var idPost = getParameterByName('p'); // get id from current url
        if ((lang == 'it') && (idPost != null)){ //from en to it
            var index =  indexOf(arrayPostEn,idPost);
            if (index != -1) window.location.href = url + arrayPostIt[index];
        }
        if((lang == 'en') && (idPost != null)){ //from it to en
            var index =  indexOf(arrayPostIt,idPost);
            if (index != -1) window.location.href = url + arrayPostEn[index];
        }
  }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    // works in all browsers
    function indexOf(array, valToFind) {
        var foundIndex = -1;
        for (var index = 0; index < array.length; index++) {
            if (array[index] === valToFind) {
                foundIndex = index;
                break;
            }
        }
        return foundIndex;
    }

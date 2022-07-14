
var main_height = '350px';

var img1_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FMori-Calliope-878861181&format=jsonp&callback=?';
var image_1 = document.getElementById('img1');

$.getJSON(img1_oembed_url, function(data) 
{
    image_1.src = data.url;
    image_1.alt = data.title;
    image_1.style.height = main_height;
    image_1.style.width = 'auto';
});


var img2_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FHer-Last-Breath-Kaede-Akamatsu-Video-877491258&format=jsonp&callback=?';
var image_2 = document.getElementById('img2');

$.getJSON(img2_oembed_url, function(data) 
{
    image_2.src = data.url;
    image_2.alt = data.title;
    image_2.style.height = main_height;
    image_2.style.width = 'auto';
});

var img3_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FSailor-Moon-Redraw-Challange-842831667&format=jsonp&callback=?'
var image_3 = document.getElementById('img3');

$.getJSON(img3_oembed_url, function(data) 
{
    image_3.src = data.url;
    image_3.alt = data.title;
    image_3.style.height = main_height;
    image_3.style.width = 'auto';
});

var img4_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FRosuuri-s-DTIYS-817314079&format=jsonp&callback=?'
var image_4 = document.getElementById('img4');

$.getJSON(img4_oembed_url, function(data) 
{
    image_4.src = data.url;
    image_4.alt = data.title;
    image_4.style.height = main_height;
    image_4.style.width = 'auto';
});

var img5_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FSaruei-Art-Contest-833501254&format=jsonp&callback=?'
var image_5 = document.getElementById('img5');

$.getJSON(img5_oembed_url, function(data) 
{
    image_5.src = data.url;
    image_5.alt = data.title;
    image_5.style.height = main_height;
    image_5.style.width = 'auto';
});

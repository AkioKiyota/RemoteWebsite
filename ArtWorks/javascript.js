
var reduce = .35;


var img1_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FMori-Calliope-878861181&format=jsonp&callback=?';
var image_1 = document.getElementById('img1');

$.getJSON(img1_oembed_url, function(data) 
{
    var des_width = parseFloat(data.width) * reduce ;
    var des_height = parseFloat(data.height) * reduce;

    console.log('img1: ' + des_height);

    image_1.src = data.url;
    image_1.alt = data.title;
    image_1.width = des_width.toString();
    image_1.height = des_height.toString();
})


var img2_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FRosie-856971729&format=jsonp&callback=?';
var image_2 = document.getElementById('img2');

$.getJSON(img2_oembed_url, function(data) 
{
    var des_width = parseFloat(data.width) * reduce ;
    var des_height = parseFloat(data.height) * reduce;

    console.log('img2: ' + des_height);

    image_2.src = data.url;
    image_2.alt = data.title;
    image_2.width = des_width.toString();
    image_2.height = des_height.toString();
});

var img3_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FSailor-Moon-Redraw-Challange-842831667&format=jsonp&callback=?'
var image_3 = document.getElementById('img3');

$.getJSON(img3_oembed_url, function(data) 
{
    var des_width = parseFloat(data.width) * reduce ;
    var des_height = parseFloat(data.height) * reduce;

    console.log('img3: ' + des_height);

    image_3.src = data.url;
    image_3.alt = data.title;
    image_3.width = des_width.toString();
    image_3.height = des_height.toString();
});

var img4_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FMori-Calliope-878861181&format=jsonp&callback=?'
var image_4 = document.getElementById('img4');

$.getJSON(img4_oembed_url, function(data) 
{
    var des_width = parseFloat(data.width) * reduce ;
    var des_height = parseFloat(data.height) * reduce;

    console.log('img4: ' + des_height);

    image_4.src = data.url;
    image_4.alt = data.title;
    image_4.width = des_width.toString();
    image_4.height = des_height.toString();
});

var img5_oembed_url = 'https://backend.deviantart.com/oembed?url=https%3A%2F%2Fwww.deviantart.com%2Fshirisasaya%2Fart%2FMori-Calliope-878861181&format=jsonp&callback=?'
var image_5 = document.getElementById('img5');

$.getJSON(img5_oembed_url, function(data) 
{
    var des_width = parseFloat(data.width) * reduce ;
    var des_height = parseFloat(data.height) * reduce;

    console.log('img5: ' + des_height);

    image_5.src = data.url;
    image_5.alt = data.title;
    image_5.width = des_width.toString();
    image_5.height = des_height.toString();
});


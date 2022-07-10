window.onscroll = function()
{
    scrollFunc();
}

var scrollValue = 200;

var topContainer = document.getElementById('top-container').style;
var logo = document.getElementById('logo').style

function scrollFunc()
{
    if(document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue)
    {
        topContainer.height = '40px';
        Logo();
    }else
    {
        topContainer.height = '60px';
        LogoR();
    }
}

function Logo()
{
    logo.fontSize = '20px';
    logo.padding = '11px 5px';
}

function LogoR()
{
    logo.fontSize = '35px';
    logo.padding = '11px 20px';
}

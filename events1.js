var $panelWrapper = $('.Panel-wrapper'),
    $Header       = $('.Header'),
    $HeaderLogo   = $('.Header-logo'),
    $Sidebar      = $('.Sidebar');

$HeaderLogo.click(function() {
    $panelWrapper.toggleClass('Panel-wrapper-open');
});
 $Header.hover(function() {
    $panelWrapper.toggleClass('Panel-wrapper-open');
 });


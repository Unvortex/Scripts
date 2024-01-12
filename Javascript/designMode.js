javascript:(function() {
    var designModeStatus = document.designMode;
    document.designMode = (designModeStatus === 'on') ? 'off' : 'on';
    alert('Design mode is now ' + document.designMode.toUpperCase());
  })();
  
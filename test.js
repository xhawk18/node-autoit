var au = require('autoit');

au.Init();
au.Run("notepad.exe");
au.WinWait("[Class:Notepad]");
au.Send("Hello, autoit & nodejs!");

var isVisible = au.ControlCommand("[Class:Notepad]", "", "[CLASS:Edit]", "IsVisible");
console.log(isVisible); 

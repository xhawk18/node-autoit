var au = require('autoit');

au.Init();
au.Run("notepad.exe");
au.WinWait("[Class:Notepad]");
au.Send("Hello, autoit & nodejs!");

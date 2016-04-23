# An autoit DLL wrapper by nodejs

## Install

```sh
$ npm install --save autoit
```

## Usage

```js
var au = require('autoit');

au.Init();
au.Run("notepad.exe");
au.WinWait("[Class:Notepad]");
au.Send("Hello, autoit & nodejs!");
```

## API
### Init()

### error(void)
    Return: Integer

### AutoItSetOption(szOption, nValue)
    Return: Integer

### ClipGet([nBufSize])
    Return: szClip

### ClipPut(szClip)

### ControlClick(szTitle [, szText], szControl [, szButton] [, nNumClicks] [, nX] [, nY])
    Return: integer
### ControlClick(hWnd, hCtrl [, szButton] [, nNumClicks] [, nX] [, nY])
    Return: integer
    
### ControlCommand(szTitle [, szText], szControl, szCommand [, szExtra] [, nBufSize])
    Return: szResult
### ControlCommand(hWnd, hCtrl, szCommand [, szExtra] [, nBufSize])
    Return: szResult

### ControlListView(szTitle [, szText], szControl, szCommand [, szExtra1] [, szExtra2] [, nBufSize])
    Return: szResult
### ControlListView(hWnd, hCtrl, szCommand [, szExtra1] [, szExtra2] [, nBufSize])
    Return: szResult

### ControlDisable(szTitle [, szText], szControl)
    Return: Integer
### ControlDisable(hWnd, hCtrl)
    Return: Integer

### ControlEnable(szTitle [, szText], szControl)
    Return: Integer
### ControlEnable(hWnd, hCtrl)
    Return: Integer
    
### ControlFocus(szTitle [, szText], szControl)
    Return: Integer
### ControlFocus(hWnd, hCtrl)
    Return: Integer

### ControlGetFocus(szTitle [, szText] [, nBufSize])
    Return: szControlWithFocus
### ControlGetFocus(hWnd [, nBufSize])
    Return: szControlWithFocus

### ControlGetHandle(hWnd, szControl)
    Return: hCtrl

### ControlGetHandleAsText(szTitle [, szText], szControl [, nBufSize])
    Return: szRetText
    
### ControlGetPos(szTitle [, szText], szControl)
    Return: lpRect
### ControlGetPos(hWnd, hCtrl)
    Return: lpRect

### ControlGetText(szTitle [, szText], szControl [, nBufSize])
    Return: szControlText
### ControlGetText(hWnd, hCtrl [, nBufSize])
    Return: szControlText

### ControlHide(szTitle [, szText], szControl)
    Return: Integer
### ControlHide(hWnd, hCtrl)
    Return: Integer
    
### ControlMove(szTitle [, szText], szControl, nX, nY [, nWidth] [, nHeight])
    Return: Integer
### ControlMove(hWnd, hCtrl, nX, nY [, nWidth] [, nHeight])
    Return: Integer

### ControlSend(szTitle [, szText], szControl, szSendText [, nMode])
    Return: Integer
### ControlSend(hWnd, hCtrl, szSendText [, nMode])
    Return: Integer

### ControlSetText(szTitle [, szText], szControl, szControlText)
    Return: Integer
### ControlSetText(hWnd, hCtrl, szControlText)
    Return: Integer

### ControlShow(szTitle [, szText], szControl)
    Return: Integer
### ControlShow(hWnd, hCtrl)
    Return: Integer

### ControlTreeView(szTitle [, szText], szControl, szCommand [, szExtra1] [, szExtra2] [, nBufSize])
    Return: szResult
### ControlTreeView(hWnd, hCtrl, szCommand [, szExtra1] [, szExtra2] [, nBufSize])
    Return: szResult

### DriveMapAdd(szDevice, szShare, nFlags [, szUser] [, szPwd] [, nBufSize])
    Return: szResult
### DriveMapDel(szDevice)
    Return: Integer
### DriveMapGet(szDevice [, nBufSize])
    Return: szMapping

### IsAdmin()
    Return: Integer

### MouseClick([szButton] [, nX] [, nY] [, nClicks] [, nSpeed])
    Return: Integer
### MouseClickDrag(szButton, nX1, nY1, nX2, nY2 [, nSpeed])
    Return: Integer
### MouseDown([szButton])
### MouseGetCursor()
    Return: Integer
### MouseGetPos()
    Return: lpPoint
### MouseMove(nX, nY [, nSpeed])
    Return: Integer
### MouseUp([szButton])
### MouseWheel(szDirection, nClicks)

### Opt(szOption, nValue)
    Return: Integer

### PixelChecksum(lpRect [, nStep])
    Return: Integer
### PixelGetColor(nX, nY)
    Return: Integer
### PixelSearch(lpRect, nCol [, nVar] [, nStep])
    Return: pPointResult
### ProcessClose(szProcess)
    Return: Integer
### ProcessExists(szProcess)
    Return: Integer
### ProcessSetPriority(szProcess, nPriority)
    Return: Integer
### ProcessWait(szProcess [, nTimeout])
    Return: Integer
### ProcessWaitClose(szProcess [, nTimeout])
    Return: Integer

### Run(szProgram [, szDir] [, nShowFlag]);
    Return: Integer
### RunWait(szProgram [, szDir] [, nShowFlag]);
    Return: Integer
### RunAs(szUser, szDomain, szPassword, nLogonFlag, szProgram [, szDir] [, nShowFlag])
    Return: Integer
### RunAsWait(szUser, szDomain, szPassword, nLogonFlag, szProgram [, szDir] [, nShowFlag])
    Return: Integer

### Send(szSendText [, nMode])
### Shutdown(nFlags)
    Return: Integer
### Sleep(nMilliseconds)
### StatusbarGetText(szTitle [, szText] [, nPart] [, nBufSize])
    Return: szStatusText
### StatusbarGetText(hWnd [, nPart] [, nBufSize])
    Return: szStatusText

### ToolTip(szTip [, nX] [, nY])

### WinActivate(szTitle [, szText])
    Return: Integer
### WinActivate(hWnd)
    Return: Integer

### WinActive(szTitle [, szText])
    Return: Integer
### WinActive(hWnd)
    Return: Integer

### WinClose(szTitle [, szText])
    Return: Integer
### WinClose(hWnd)
    Return: Integer    

### WinExists(szTitle [, szText])
    Return: Integer
### WinExists(hWnd)
    Return: Integer    

### WinGetCaretPos()
    Return: lpPoint

### WinGetClassList(szTitle [, szText] [, nBufSize])
    Return: szRetText
### WinGetClassList(hWnd [, nBufSize])
    Return: szRetText

### WinGetClientSize(szTitle [, szText])
    Return: lpRect
### WinGetClientSize(hWnd)
    Return: lpRect

### WinGetHandle(szTitle [, szText])
    Return: hWnd
### WinGetHandleAsText(szTitle [, szText] [, nBufSize])
    Return: szRetText

### WinGetPos(szTitle [, szText])
    Return: lpRect
### WinGetPos(hWnd)
    Return: lpRect

### WinGetProcess(szTitle [, szText])
    Return: Integer
### WinGetProcess(hWnd)
    Return: Integer

### WinGetState(szTitle [, szText])
    Return: Integer
### WinGetState(hWnd)
    Return: Integer

### WinGetText(szTitle [, szText] [, nBufSize])
    Return: szRetText
### WinGetText(hWnd [, nBufSize])
    Return: szRetText
    
### WinGetTitle(szTitle [, szText] [, nBufSize])
    Return: szRetText
### WinGetTitle(hWnd [, nBufSize])
    Return: szRetText

### WinKill(szTitle [, szText])
    Return: Integer
### WinKill(hWnd)
    Return: Integer

### WinMenuSelectItem(szTitle [, szText], szItem1 [, szItem2] [, szItem3] [, szItem4] [, szItem5] [, szItem6] [, szItem7] [, szItem8])
    Return: Integer
### WinMenuSelectItem(hWnd, szItem1 [, szItem2] [, szItem3] [, szItem4] [, szItem5] [, szItem6] [, szItem7] [, szItem8])
    Return: Integer
    
### WinMinimizeAll()
### WinMinimizeAllUndo();
    
### WinMove(szTitle [, szText], nX, nY [, nWidth] [, nHeight])
    Return: Integer
### WinMove(hWnd, nX, nY [, nWidth] [, nHeight])
    Return: Integer

### WinSetOnTop(szTitle [, szText], nFlag)
    Return: Integer
### WinSetOnTop(hWnd, nFlag)
    Return: Integer

### WinSetState(szTitle [, szText], nFlags)
    Return: Integer
### WinSetState(hWnd, nFlags)
    Return: Integer

### WinSetTitle(szTitle [, szText], szNewTitle)
    Return: Integer
### WinSetTitle(hWnd, szNewTitle)
    Return: Integer

### WinSetTrans(szTitle [, szText], nTrans)
    Return: Integer
### WinSetTrans(hWnd, nTrans)
    Return: Integer

### WinWait(szTitle [, szText] [, nTimeout])
    Return: Integer
### WinWait(hWnd [, nTimeout])
    Return: Integer

### WinWaitActive(szTitle [, szText] [, nTimeout])
    Return: Integer
### WinWaitActive(hWnd [, nTimeout])
    Return: Integer
    
### WinWaitClose(szTitle [, szText] [, nTimeout])
    Return: Integer
### WinWaitClose(hWnd [, nTimeout])
    Return: Integer
    
### WinWaitNotActive(szTitle [, szText] [, nTimeout])
    Return: Integer
### WinWaitNotActive(hWnd [, nTimeout])
    Return: Integer

### PostMessage(hWnd, msg [, wParam] [, lParam])
        Return: Integer

### SendMessage(hWnd, msg [, wParam] [, lParam])
        Return: Integer

## License

MIT © [xhawk](https://github.com/xhawk18)

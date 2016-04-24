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
### API parameters
#### Type of API parameters
    Parameter starts with "sz" is a string, for example: szOption, szText
    Parameter starts with "n" is an integer, for example: nValue
    Parameter starts with "h" is a handler, which is essentially an integer, for example: hWnd, hCtrl

#### About the default parameters
    You can call the functions with default parameters.
    For example --
        ControlCommand(szTitle [, szText], szControl, szCommand [, szExtra] [, nBufSize])
    you can call it with the last two parameters omitted --
```js
    au.ControlCommand("[Class:Notepad]", "", "[CLASS:Edit]", "IsVisible")
```
    If you would like to use the default value of second parameters "szText", please fill it with undefined,
```js
    au.ControlCommand("[Class:Notepad]", undefined, "[CLASS:Edit]", "IsVisible")
```

### API list
#### Init()
    Return: none

#### error()
    Return: integer

#### AutoItSetOption(szOption, nValue)
    Return: integer

#### ClipGet([nBufSize])
    Return: szClip

#### ClipPut(szClip)
    Return: none

#### ControlClick(szTitle [, szText], szControl [, szButton] [, nNumClicks] [, nX] [, nY])
    Return: integer
#### ControlClick(hWnd, hCtrl [, szButton] [, nNumClicks] [, nX] [, nY])
    Return: integer
    
#### ControlCommand(szTitle [, szText], szControl, szCommand [, szExtra] [, nBufSize])
    Return: szResult
#### ControlCommand(hWnd, hCtrl, szCommand [, szExtra] [, nBufSize])
    Return: szResult

#### ControlListView(szTitle [, szText], szControl, szCommand [, szExtra1] [, szExtra2] [, nBufSize])
    Return: szResult
#### ControlListView(hWnd, hCtrl, szCommand [, szExtra1] [, szExtra2] [, nBufSize])
    Return: szResult

#### ControlDisable(szTitle [, szText], szControl)
    Return: integer
#### ControlDisable(hWnd, hCtrl)
    Return: integer

#### ControlEnable(szTitle [, szText], szControl)
    Return: integer
#### ControlEnable(hWnd, hCtrl)
    Return: integer
    
#### ControlFocus(szTitle [, szText], szControl)
    Return: integer
#### ControlFocus(hWnd, hCtrl)
    Return: integer

#### ControlGetFocus(szTitle [, szText] [, nBufSize])
    Return: szControlWithFocus
#### ControlGetFocus(hWnd [, nBufSize])
    Return: szControlWithFocus

#### ControlGetHandle(hWnd, szControl)
    Return: hCtrl

#### ControlGetHandleAsText(szTitle [, szText], szControl [, nBufSize])
    Return: szRetText
    
#### ControlGetPos(szTitle [, szText], szControl)
    Return: lpRect
#### ControlGetPos(hWnd, hCtrl)
    Return: lpRect

#### ControlGetText(szTitle [, szText], szControl [, nBufSize])
    Return: szControlText
#### ControlGetText(hWnd, hCtrl [, nBufSize])
    Return: szControlText

#### ControlHide(szTitle [, szText], szControl)
    Return: integer
#### ControlHide(hWnd, hCtrl)
    Return: integer
    
#### ControlMove(szTitle [, szText], szControl, nX, nY [, nWidth] [, nHeight])
    Return: integer
#### ControlMove(hWnd, hCtrl, nX, nY [, nWidth] [, nHeight])
    Return: integer

#### ControlSend(szTitle [, szText], szControl, szSendText [, nMode])
    Return: integer
#### ControlSend(hWnd, hCtrl, szSendText [, nMode])
    Return: integer

#### ControlSetText(szTitle [, szText], szControl, szControlText)
    Return: integer
#### ControlSetText(hWnd, hCtrl, szControlText)
    Return: integer

#### ControlShow(szTitle [, szText], szControl)
    Return: integer
#### ControlShow(hWnd, hCtrl)
    Return: integer

#### ControlTreeView(szTitle [, szText], szControl, szCommand [, szExtra1] [, szExtra2] [, nBufSize])
    Return: szResult
#### ControlTreeView(hWnd, hCtrl, szCommand [, szExtra1] [, szExtra2] [, nBufSize])
    Return: szResult

#### DriveMapAdd(szDevice, szShare, nFlags [, szUser] [, szPwd] [, nBufSize])
    Return: szResult
#### DriveMapDel(szDevice)
    Return: integer
#### DriveMapGet(szDevice [, nBufSize])
    Return: szMapping

#### IsAdmin()
    Return: integer

#### MouseClick([szButton] [, nX] [, nY] [, nClicks] [, nSpeed])
    Return: integer
#### MouseClickDrag(szButton, nX1, nY1, nX2, nY2 [, nSpeed])
    Return: integer
#### MouseDown([szButton])
    Return: none
#### MouseGetCursor()
    Return: integer
#### MouseGetPos()
    Return: lpPoint
#### MouseMove(nX, nY [, nSpeed])
    Return: integer
#### MouseUp([szButton])
    Return: none
#### MouseWheel(szDirection, nClicks)
    Return: none

#### Opt(szOption, nValue)
    Return: integer

#### PixelChecksum(lpRect [, nStep])
    Return: integer
#### PixelGetColor(nX, nY)
    Return: integer
#### PixelSearch(lpRect, nCol [, nVar] [, nStep])
    Return: pPointResult
#### ProcessClose(szProcess)
    Return: integer
#### ProcessExists(szProcess)
    Return: integer
#### ProcessSetPriority(szProcess, nPriority)
    Return: integer
#### ProcessWait(szProcess [, nTimeout])
    Return: integer
#### ProcessWaitClose(szProcess [, nTimeout])
    Return: integer

#### Run(szProgram [, szDir] [, nShowFlag]);
    Return: integer
#### RunWait(szProgram [, szDir] [, nShowFlag]);
    Return: integer
#### RunAs(szUser, szDomain, szPassword, nLogonFlag, szProgram [, szDir] [, nShowFlag])
    Return: integer
#### RunAsWait(szUser, szDomain, szPassword, nLogonFlag, szProgram [, szDir] [, nShowFlag])
    Return: integer

#### Send(szSendText [, nMode])
    Return: none
#### Shutdown(nFlags)
    Return: integer
#### Sleep(nMilliseconds)
    Return: none
#### StatusbarGetText(szTitle [, szText] [, nPart] [, nBufSize])
    Return: szStatusText
#### StatusbarGetText(hWnd [, nPart] [, nBufSize])
    Return: szStatusText

#### ToolTip(szTip [, nX] [, nY])
    Return: none

#### WinActivate(szTitle [, szText])
    Return: integer
#### WinActivate(hWnd)
    Return: integer

#### WinActive(szTitle [, szText])
    Return: integer
#### WinActive(hWnd)
    Return: integer

#### WinClose(szTitle [, szText])
    Return: integer
#### WinClose(hWnd)
    Return: integer    

#### WinExists(szTitle [, szText])
    Return: integer
#### WinExists(hWnd)
    Return: integer    

#### WinGetCaretPos()
    Return: lpPoint

#### WinGetClassList(szTitle [, szText] [, nBufSize])
    Return: szRetText
#### WinGetClassList(hWnd [, nBufSize])
    Return: szRetText

#### WinGetClientSize(szTitle [, szText])
    Return: lpRect
#### WinGetClientSize(hWnd)
    Return: lpRect

#### WinGetHandle(szTitle [, szText])
    Return: hWnd
#### WinGetHandleAsText(szTitle [, szText] [, nBufSize])
    Return: szRetText

#### WinGetPos(szTitle [, szText])
    Return: lpRect
#### WinGetPos(hWnd)
    Return: lpRect

#### WinGetProcess(szTitle [, szText])
    Return: integer
#### WinGetProcess(hWnd)
    Return: integer

#### WinGetState(szTitle [, szText])
    Return: integer
#### WinGetState(hWnd)
    Return: integer

#### WinGetText(szTitle [, szText] [, nBufSize])
    Return: szRetText
#### WinGetText(hWnd [, nBufSize])
    Return: szRetText
    
#### WinGetTitle(szTitle [, szText] [, nBufSize])
    Return: szRetText
#### WinGetTitle(hWnd [, nBufSize])
    Return: szRetText

#### WinKill(szTitle [, szText])
    Return: integer
#### WinKill(hWnd)
    Return: integer

#### WinMenuSelectItem(szTitle [, szText], szItem1 [, szItem2] [, szItem3] [, szItem4] [, szItem5] [, szItem6] [, szItem7] [, szItem8])
    Return: integer
#### WinMenuSelectItem(hWnd, szItem1 [, szItem2] [, szItem3] [, szItem4] [, szItem5] [, szItem6] [, szItem7] [, szItem8])
    Return: integer
    
#### WinMinimizeAll()
    Return: none
#### WinMinimizeAllUndo()
    Return: none
    
#### WinMove(szTitle [, szText], nX, nY [, nWidth] [, nHeight])
    Return: integer
#### WinMove(hWnd, nX, nY [, nWidth] [, nHeight])
    Return: integer

#### WinSetOnTop(szTitle [, szText], nFlag)
    Return: integer
#### WinSetOnTop(hWnd, nFlag)
    Return: integer

#### WinSetState(szTitle [, szText], nFlags)
    Return: integer
#### WinSetState(hWnd, nFlags)
    Return: integer

#### WinSetTitle(szTitle [, szText], szNewTitle)
    Return: integer
#### WinSetTitle(hWnd, szNewTitle)
    Return: integer

#### WinSetTrans(szTitle [, szText], nTrans)
    Return: integer
#### WinSetTrans(hWnd, nTrans)
    Return: integer

#### WinWait(szTitle [, szText] [, nTimeout])
    Return: integer
#### WinWait(hWnd [, nTimeout])
    Return: integer

#### WinWaitActive(szTitle [, szText] [, nTimeout])
    Return: integer
#### WinWaitActive(hWnd [, nTimeout])
    Return: integer
    
#### WinWaitClose(szTitle [, szText] [, nTimeout])
    Return: integer
#### WinWaitClose(hWnd [, nTimeout])
    Return: integer
    
#### WinWaitNotActive(szTitle [, szText] [, nTimeout])
    Return: integer
#### WinWaitNotActive(hWnd [, nTimeout])
    Return: integer

#### PostMessage(hWnd, nMsg [, nWParam] [, nLParam])
    Return: integer

#### SendMessage(hWnd, nMsg [, nWParam] [, nLParam])
    Return: integer

## License

MIT © [xhawk](https://github.com/xhawk18)

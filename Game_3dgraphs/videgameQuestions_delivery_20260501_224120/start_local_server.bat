@echo off
cd /d "%~dp0"

echo Starting local server for the WordNet question game...
echo.
echo Game:
echo http://127.0.0.1:8765/question_game.html
echo.
echo Graph:
echo http://127.0.0.1:8765/unfinished_code.html
echo.
echo Press Ctrl+C in this window to stop the server.
echo.

python -m http.server 8765 --bind 127.0.0.1
if errorlevel 1 (
  py -m http.server 8765 --bind 127.0.0.1
)

@echo off
echo ==========================================
echo       Auto Updating Code to GitHub...
echo ==========================================

git add .
set /p commit_msg="Enter commit message (Press Enter for 'Auto update'): "
if "%commit_msg%"=="" set commit_msg=Auto update: %date% %time%

git commit -m "%commit_msg%"
git push origin main

echo ==========================================
echo        Successfully Updated to GitHub!
echo ==========================================
pause

@echo off
echo ====================================================
echo   Firebase Deployment - Sevis Global Education
echo ====================================================
echo.

echo Step 1: Logging into Firebase...
echo.
firebase login --reauth

echo.
echo Step 2: Listing your Firebase projects...
echo.
firebase projects:list

echo.
echo Step 3: Building optimized website...
echo.
call npm run build

echo.
echo Step 4: Deploying to Firebase...
echo.
firebase deploy

echo.
echo ====================================================
echo   Deployment Complete!
echo ====================================================
echo.
echo Your website is now live!
echo.
echo Next: Run this command to open your site:
echo   firebase open hosting:site
echo.
pause


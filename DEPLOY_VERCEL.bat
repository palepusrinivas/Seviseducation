@echo off
echo.
echo ========================================
echo    SEVIS GLOBAL EDUCATION
echo    VERCEL DEPLOYMENT SCRIPT
echo ========================================
echo.

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [1/3] Installing Vercel CLI...
    echo.
    call npm install -g vercel
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo ERROR: Failed to install Vercel CLI
        echo Please run manually: npm install -g vercel
        pause
        exit /b 1
    )
    echo.
    echo ✅ Vercel CLI installed successfully!
    echo.
) else (
    echo ✅ Vercel CLI already installed
    echo.
)

echo [2/3] Logging in to Vercel...
echo.
echo A browser window will open for authentication.
echo Please complete the login process.
echo.
call vercel login
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Vercel login failed
    pause
    exit /b 1
)

echo.
echo ✅ Login successful!
echo.

echo [3/3] Deploying to Vercel...
echo.
echo This will deploy your website to production.
echo.
call vercel --prod
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Deployment failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo    ✅ DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your website is now LIVE! 🚀
echo.
echo To view your deployment:
echo 1. Check the URL shown above
echo 2. Or run: vercel --prod
echo.
echo To add a custom domain:
echo 1. Go to: https://vercel.com
echo 2. Select your project
echo 3. Go to Settings → Domains
echo.
pause


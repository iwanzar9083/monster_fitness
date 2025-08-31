@echo off
:: Navigate to project folder
cd /d "C:\Users\rahul\Downloads\sagar fuul"

:: Install dependencies
echo Installing npm dependencies...
npm install

:: Build the project
echo Building project...
npm run build

:: Deploy to Vercel (dist/spa as output folder)
echo Deploying to Vercel...
for /f "delims=" %%i in ('vercel --prod --confirm --output dist/spa --token YOUR_VERCEL_TOKEN 2^>^&1 ^| find "https://"') do set DEPLOY_URL=%%i

:: Open deployed site in default browser
echo Opening deployed site: %DEPLOY_URL%
start "" "%DEPLOY_URL%"

echo Deployment finished!
pause

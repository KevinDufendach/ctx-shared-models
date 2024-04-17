$ErrorActionPreference = "Stop"

git pull
npm version patch
git push

#npx tsc
cd ../caretrax/frontend
yarn upgrade wb-shared-models
Write-Host "Frontend updated successfully"

cd ../api
yarn upgrade wb-shared-models
Write-Host "API updated successfully"

cd ../../ctx-shared-models
Write-Host "Congrats, your script executed successfully"

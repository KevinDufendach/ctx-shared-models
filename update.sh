set -e

npm version patch
git push

#npx tsc
cd ../caretrax/frontend
yarn upgrade ctx-shared-models
echo "Frontend updated successfully"

cd ../api
yarn upgrade ctx-shared-models
echo "API updated successfully"

cd ../../ctx-shared-models
echo "Congrats, your script executed successfully"

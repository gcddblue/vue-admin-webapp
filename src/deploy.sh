# deploy.sh
# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 提交到 https://github.com/gcddblue/vue-admin-webapp.git 项目的 gh-pages 分支
git push -f git@github.com:gcddblue/vue-admin-webapp.git master:gh-pages

cd -
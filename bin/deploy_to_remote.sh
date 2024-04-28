rm -rf dist
bun install
bun run build

tar -czvf dist.tar.gz dist 

scp ./dist.tar.gz gududuHK:/root/www/e-commerce/frontend &&
rm -rf dist.tar.gz &&

ssh gududuHK sudo rm -rf /root/www/e-commerce/frontend/dist &&
ssh gududuHK tar -xzvf /root/www/e-commerce/frontend/dist.tar.gz -C /root/www/e-commerce/frontend && 
ssh gududuHK sudo rm -rf /root/www/e-commerce/frontend/dist.tar.gz
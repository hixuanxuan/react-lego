mkdir -p output
cp build output/dist

cp -r nginx output/dist/conf
cd output/dist
time=`date +%s`
tar -zcvf "../dist-$time.tar.gz" ./*
cp ./dist-$time.tar.gz /usr/lego/server/assets/export
rm -rf ../output
echo "dist-$time.tar.gz"

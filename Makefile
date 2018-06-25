s3:
	aws --profile missionintegers-www s3 cp --recursive --acl public-read --exclude '*~' ./www/ s3://missionintegers.com/

web:
	utils/darwin/wof-fileserver -path ./www

icns:
	if test ! -d app_icon.iconset; then mkdir app_icon.iconset; fi
	rm -f app_icon.iconset/*.png
	sips -z 16 16 app_icon/app_icon.png --out app_icon.iconset/icon_16x16.png
	sips -z 16 16 app_icon/app_icon.png --out app_icon.iconset/icon_16x16.png
	sips -z 32 32 app_icon/app_icon.png --out app_icon.iconset/icon_16x16@2x.png
	sips -z 32 32 app_icon/app_icon.png --out app_icon.iconset/icon_32x32.png
	sips -z 64 64 app_icon/app_icon.png --out app_icon.iconset/icon_32x32@2x.png
	sips -z 64 64 app_icon/app_icon.png --out app_icon.iconset/icon_64x64.png
	sips -z 128 128 app_icon/app_icon.png --out app_icon.iconset/icon_128x128.png
	sips -z 256 256 app_icon/app_icon.png --out app_icon.iconset/icon_128x128@2x.png
	sips -z 256 256 app_icon/app_icon.png --out app_icon.iconset/icon_256x256.png
	sips -z 512 512 app_icon/app_icon.png --out app_icon.iconset/icon_256x256@2x.png
	sips -z 512 512 app_icon/app_icon.png --out app_icon.iconset/icon_512x512.png
	cp app_icon/app_icon.png app_icon.iconset/icon_512x512@2x.png
	cp app_icon.iconset/icon_32x32.png www/images/icon_16x16.png
	cp app_icon.iconset/icon_32x32.png www/images/icon_32x32.png
	cp app_icon.iconset/icon_32x32.png www/images/icon_96x96.png
	iconutil --convert icns --output app_icon.icns app_icon.iconset
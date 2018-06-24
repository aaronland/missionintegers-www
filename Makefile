s3:
	aws --profile missionintegers-www s3 cp --recursive --acl public-read --exclude '*~' ./www/ s3://missionintegers.com/

web:
	utils/darwin/wof-fileserver -path ./www
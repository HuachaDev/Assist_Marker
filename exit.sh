#!/bin/bash
cd /var/www/Assist_Marker
sudo npm run dev
curl http://localhost:4000/attendance/exit
killall node

#! /bin/bash
set -e
curl -o cdq_install.sh https://owl-packages.s3.amazonaws.com/MP/cdq_install.sh
chmod +x cdq_install.sh
echo | ./cdq_install.sh
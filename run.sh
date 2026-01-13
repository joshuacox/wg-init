#!/bin/bash
set -x
if [[ -f .cid ]]; then
  CID=$(cat .cid)
  docker kill ${CID}
  docker rm ${CID}
  rm .cid
fi
./net.sh
docker build -t testwg .
docker run \
  --net wg \
  -it \
  --rm \
  --cidfile .cid \
  --privileged \
  -e INSECURE=true \
  --name testwg \
  --ip6 fdcc:ad94:bacf:62a3::2a \
  --ip 10.43.43.42 \
  -v ./wg0.conf:/etc/wireguard/wg0.conf \
  -v /lib/modules:/lib/modules:ro \
  --cap-add NET_ADMIN \
  --cap-add SYS_MODULE \
  --sysctl net.ipv4.ip_forward=1 \
  --sysctl net.ipv4.conf.all.src_valid_mark=1 \
  --sysctl net.ipv6.conf.all.disable_ipv6=0 \
  --sysctl net.ipv6.conf.all.forwarding=1 \
  --sysctl net.ipv6.conf.default.forwarding=1 \
  --sysctl net.ipv4.conf.all.src_valid_mark=1 \
  testwg

exit 0
  -p 51820:51820/udp \
  -p 51821:51821/tcp \
  --restart unless-stopped \

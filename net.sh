#!/bin/sh
docker network create \
  -d bridge --ipv6 \
  --subnet 10.43.43.0/24 \
  --subnet fdcc:ad94:bacf:62a3::/64 \
   wg

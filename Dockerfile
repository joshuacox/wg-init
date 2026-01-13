FROM debian:trixie

RUN apt-get update \
  && apt-get upgrade -yq \
  && apt-get install -y wireguard iproute2 bash openresolv procps curl wget iputils-ping net-tools dnsutils \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY wg0.conf /etc/wireguard/

#CMD ["/bin/sh"]
ENTRYPOINT ["/bin/sh"]

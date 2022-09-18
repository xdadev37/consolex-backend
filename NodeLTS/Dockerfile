# node:16-alpine3.15
FROM git.oncolog.ir:453/ltsnode_lts-node
ENV TZ="Asia/Tehran"
WORKDIR /root
RUN apk update \
&& apk upgrade \
&& rm -rf .yarn .yarnrc .yarnrc.yml \
&& yarn set version berry
WORKDIR /home/src
ENTRYPOINT ["tail", "-f", "/dev/null"]

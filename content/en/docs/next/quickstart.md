---
title: Quickstart
weight: 900
description: Get etcd up and running in less than 5 minutes!
---

## Step 1 - Install etcd

Set the environment variables to help with the commands that follow.

```
ETCD_VER={{< param git_version_tag >}}

GOOGLE_URL=https://storage.googleapis.com/etcd
GITHUB_URL=https://github.com/etcd-io/etcd/releases/download
```

Download and install etcd:

On Linux
```
$ DOWNLOAD_URL=${GITHUB_URL}

$ rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz
$ rm -rf /tmp/test-etcd && mkdir -p /tmp/test-etcd

$ curl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz -o /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   644  100   644    0     0   1396      0 --:--:-- --:--:-- --:--:--  1396
100 12.5M  100 12.5M    0     0  9767k      0  0:00:01  0:00:01 --:--:-- 17.7M

$ tar xzvf /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz -C /tmp/test-etcd --strip-components=1
etcd-v3.5.0-alpha.0-linux-amd64/etcdctl
etcd-v3.5.0-alpha.0-linux-amd64/Documentation/
etcd-v3.5.0-alpha.0-linux-amd64/Documentation/dev-guide/
etcd-v3.5.0-alpha.0-linux-amd64/Documentation/dev-guide/apispec/
etcd-v3.5.0-alpha.0-linux-amd64/Documentation/dev-guide/apispec/swagger/
etcd-v3.5.0-alpha.0-linux-amd64/Documentation/dev-guide/apispec/swagger/rpc.swagger.json
etcd-v3.5.0-alpha.0-linux-amd64/Documentation/dev-guide/apispec/swagger/v3lock.swagger.json
etcd-v3.5.0-alpha.0-linux-amd64/Documentation/dev-guide/apispec/swagger/v3election.swagger.json
etcd-v3.5.0-alpha.0-linux-amd64/Documentation/README.md
etcd-v3.5.0-alpha.0-linux-amd64/READMEv2-etcdctl.md
etcd-v3.5.0-alpha.0-linux-amd64/README.md
etcd-v3.5.0-alpha.0-linux-amd64/README-etcdctl.md
etcd-v3.5.0-alpha.0-linux-amd64/etcd
```

On macOS
```
$ DOWNLOAD_URL=${GOOGLE_URL}

$ rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz
$ rm -f /tmp/etcd-${ETCD_VER}-darwin-amd64.zip
$ rm -rf /tmp/test-etcd && mkdir -p /tmp/test-etcd

$ curl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-darwin-amd64.zip -o /tmp/etcd-${ETCD_VER}-darwin-amd64.zip
$ unzip /tmp/etcd-${ETCD_VER}-darwin-amd64.zip -d /tmp
$ mv /tmp/etcd-${ETCD_VER}-darwin-amd64/* /tmp/test-etcd
```

## Step 2 - Run etcd

In order to test etcd, two terminals are needed. One to run the etcd service, another to run etcdctl.

In one terminal, go to the download directory and start etcd:
```
$ cd /tmp/test-etcd
$ etcd --logger=zap
{"level":"warn","ts":"2021-05-12T11:03:01.247-0700","caller":"etcdmain/etcd.go:119","msg":"'data-dir' was empty; using default","data-dir":"default.etcd"}
⋮
```

In a second terminal session, use etcdctl to set a key:
```
$ etcdctl put helloetcd "Hello, etcd"
OK
```

Now that a key has been set, retrieve it:
```
$ etcdctl get helloetcd
helloetcd
Hello, etcd
```


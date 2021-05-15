---
title: Quickstart
weight: 900
description: Get etcd up and running in less than 5 minutes!
---

Follow the instructions below to locally install, run, and test a simple
single-member cluster of etcd.

## Install etcd

Set the environment variables to help with the commands that follow:

```
ETCD_VER={{< param git_version_tag >}}

GOOGLE_URL=https://storage.googleapis.com/etcd
GITHUB_URL=https://github.com/etcd-io/etcd/releases/download
```

Download and install etcd from pre-built binaries:

On Linux

```
DOWNLOAD_URL=${GITHUB_URL}

rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz
rm -rf /tmp/test-etcd
mkdir -p /tmp/test-etcd

curl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz -o /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz

tar xzvf /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz -C /tmp/test-etcd --strip-components=1
```

On macOS

```
DOWNLOAD_URL=${GOOGLE_URL}

rm -f /tmp/etcd-${ETCD_VER}-darwin-amd64.zip
rm -rf /tmp/etcd-${ETCD_VER}-darwin-amd64
rm -rf /tmp/test-etcd
mkdir -p /tmp/test-etcd

curl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-darwin-amd64.zip -o /tmp/etcd-${ETCD_VER}-darwin-amd64.zip

unzip /tmp/etcd-${ETCD_VER}-darwin-amd64.zip -d /tmp
ln -s /tmp/etcd-${ETCD_VER}-darwin-amd64/* /tmp/test-etcd
```

{{% alert title="Note" color="info" %}}
To work with the latest version, learn how to [build from the main branch](/docs/{{< param version >}}/dl-build/#build-the-latest-version).
{{% /alert %}}

## Launch etcd

Go to the download directory and launch etcd:

```
$ cd /tmp/test-etcd
$ ./etcd
{"level":"warn","ts":"2021-05-12T11:03:01.247-0700","caller":"etcdmain/etcd.go:119","msg":"'data-dir' was empty; using default","data-dir":"default.etcd"}
⋮
```

## Set and get a key

From another terminal, use etcdctl to set a key:

```
$ cd /tmp/test-etcd
$ ./etcdctl put greeting "Hello, etcd"
OK
```

Now that a key has been set, retrieve it:

```
$ ./etcdctl get greeting
greeting
Hello, etcd
```

## Next steps

Now it's time to dig into the full etcd API and other guides.

- Explore the full gRPC [API][api].
- Set up a [multi-machine cluster][clustering].
- Learn the [config format, env variables and flags][configuration].
- Find [language bindings and tools][integrations].
- Use TLS to [secure an etcd cluster][security].
- [Tune etcd][tuning].

[api]: /docs/{{< param version >}}/learning/api
[clustering]: /docs/{{< param version >}}/op-guide/clustering
[configuration]: /docs/{{< param version >}}/op-guide/configuration
[integrations]: /docs/{{< param version >}}/integrations
[security]: /docs/{{< param version >}}/op-guide/security
[tuning]: /docs/{{< param version >}}/tuning


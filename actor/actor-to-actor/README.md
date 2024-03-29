# Actor to Actor calls

This example shows an actor `pinger` that accepts HTTP requests over the [wasmcloud:httpserver](https://crates.io/crates/wasmcloud-interface-httpserver) contract and makes an actor-to-actor call to the `ponger` actor that returns a simple String. The syntax that you see for `PingpongSender::to_actor` can be used for any operation where `actorReceive: true` is set in the interface file, you don't need to have a custom interface for each actor-to-actor call.

## Diagram

![pinger ponger architecture diagram](./pingerponger.png)

## Running this example

You'll need [wash](https://wasmcloud.com/docs/installation) installed to run this.

```
wash up -d
wash app deploy ./wadm.yaml

# cURL the pinger's HTTP handler
curl localhost:8080
```

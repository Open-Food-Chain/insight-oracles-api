## Oracles Methods

### Get Oracles list
Returns a list of all on chain oracles

```
  GET /insight-api/oracles/list
```

GET response:
```
{
  "data":[
    "1e7cf21a6d535a9154cc46e5b2e4a55db0fc7fdd51ad479798bf3eb62c4be132",
    "53db4f12162e6f84620df195cc4c7d149af61ae189ba2deb7eeeeeeb427e7320",
    "fab81975c27c46d3748631ad836ebb20c46bc2af7dbaeb9841cdaec84a5241ac",
    "c789b8e7e9b4505c22472b238d05a06e241e004149886936a240c564330fca8a",
    "ab975cabd0dfbee2980ff85784dde45c67605ef464fa1edc3d451fc215f1513d",
    "2de11f3a10d3b09b2ae61a8ecf05b8f5824c24aafc41aac621e0a758dad7dfbc",
    "526801239e4d0d08f82fd786e632167919214daf4acd96e3c0df59694c31ad12",
    "613662aaee978f6b6cbb51cd009fe131c840e5fc6937a41b534e68fc21d5a74a",
    "f60e4237d0e8e30cb2bc5ed1b688df12b213f2448034bbd6ab5c569d8a2c0599"
  ]
}
```

### Get Address book entry
Returns an address book entry by Raddress

```
  GET /insight-api/oracles/addressbook/{pubkey}
```

Example
```
  GET /insight-api/oracles/oracles/addressbook/RVg6Vdvo2enj95zudq2Wk5JvfpysSGP4rf
```

GET response:
```
{
  "data":{
    "t":"R",
    "n":"PETR",
    "r":"RVg6Vdvo2enj95zudq2Wk5JvfpysSGP4rf",
    "pk":"031cfd95f561d386142af06e4ce2c5bbfdb4743732670455f1813d99ea0b3015f1",
    "o":"f60e4237d0e8e30cb2bc5ed1b688df12b213f2448034bbd6ab5c569d8a2c0599"
  }
}
```

### Get Oracle Data Sample
Returns latest data sample from 1st oracle's publisher. This is a shortcut to RPC ```oracleinfo``` -> ```oraclesamples```

```
  GET /insight-api/oracles/data/{txid}
```

Example
```
  GET /insight-api/oracles/oracles/data/f60e4237d0e8e30cb2bc5ed1b688df12b213f2448034bbd6ab5c569d8a2c0599
```

GET response:
```
{
  "data":{
    "t":"R",
    "n":"PETR",
    "r":"RVg6Vdvo2enj95zudq2Wk5JvfpysSGP4rf",
    "pk":"031cfd95f561d386142af06e4ce2c5bbfdb4743732670455f1813d99ea0b3015f1",
    "o":"f60e4237d0e8e30cb2bc5ed1b688df12b213f2448034bbd6ab5c569d8a2c0599"
  }
}
```

### Get Main Oracle Data
Returns oracle data associated with type

```
  GET /insight-api/oracles/list?type={type}
```

Example
```
  GET /insight-api/oracles/list?type=addressbook
```

where type is one of the following:

- ```info``` - 1st oracle
- ```foundation``` - 1st oracle latest sample
- ```addressbook``` - address book oracle latest sample

GET response:
```
{
  "data":{
    "result":"success",
    "txid":"1e7cf21a6d535a9154cc46e5b2e4a55db0fc7fdd51ad479798bf3eb62c4be132",
    "name":"addressbook",
    "description":"addressbook",
    "format":"D",
    "marker":"RPofXcng3McApu9QagWhozbzUUjP83BJ4C",
    "registered":[
      {
        "publisher":"0256380ba5eef15002da1ae7e93ff65c745073964c1e44e67e7a8f3322036d5dbb",
        "baton":"RM1R95Nr47Fm9E9rRzgWqp5BwkutpKefHn",
        "batontxid":"c25750055898c8fff959c7db2dd59a15b14c66ca9efbd215d5fca4bf3a430f17",
        "lifetime":"200.00000000",
        "funds":"199.99000000",
        "datafee":"0.01000000"
      }
    ]
  }
}
```

## Passphrough API methods

### oracleinfo

```
  GET /insight-api/oracles/info/{txid}
```

### oraclesaddress

```
  GET /insight-api/oracles/address/{pubkey}
```

### oraclesample

```
  GET /insight-api/oracles/sample/{oracle txid}/{sample txid}
```

### oraclessample

```
  GET /insight-api/oracles/samples/{txid}/{address}/{num}
```
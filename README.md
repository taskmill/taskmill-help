Scripts
=======

##Creating a Script

Scripts are **imported** from your GitHub repositories. To expose a file as a callable endpoint, add `@deploy` as a comment at the top.

Scripts imported from public repositories are themselves publicly accessable to anyone.

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/helloworld.js' />

##Running a Script

Scripts hosted here have the same **path** as they do on GitHub. All you need to do is replace `github.com` by `taskmill.io` and `blob` by `exec`.

```bash
https://github.com/a7medkamel/taskmill-help/blob/master/intro/helloworld.js
```

```bash
curl https://taskmill.io/a7medkamel/taskmill-help/exec/master/intro/helloworld.js
             ^^^^^^^^^^^                          ^^^^
```

## Input

Your script is an [express] endpoint. The function's signature is `(req, req, next)`. All data posted or streamed to the script is available on your req object. Same goes for `query` parameters.

### Request Body
<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/req-body.js' />
> Express req.body [express:req.body]

### Request Query String
<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/req-query.js' />
> Express req.query [express:req.query]

[express]: http://expressjs.com/
[express:req.body]: http://expressjs.com/4x/api.html#req.body
[express:req.query]: http://expressjs.com/4x/api.html#req.query

## Output

Use the Response Object to write output data. You have access to multiple methods on `Response`, again these are the same as [express].

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/helloworld.js' />
> Express Response [express:response]

[express:response]: http://expressjs.com/4x/api.html#response

### Content Type

You can set the content-type header either programaticaly or through the scripts manual.

#### Programaticaly

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/content-type.js' />

#### Manual
<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/manual/output.js' />

# Services

We provide built in services that you can make use of. Such services include Email, SMS, and Automated Phone Calls.

## Email

You can send emails directly from our servers.

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/services/email.js' />

## SMS

You can send emails directly from our servers.

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/services/sms.js' />
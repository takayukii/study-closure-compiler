# study-closure-compiler

## Getting Started

[Getting Started with the Closure Compiler Application](https://developers.google.com/closure/compiler/docs/gettingstarted_app)

```
$ npm install --save google-closure-compiler
```

```$xslt
$ java -jar node_modules/google-closure-compiler/compiler.jar --help
```

```$xslt
$ java -jar node_modules/google-closure-compiler/compiler.jar --js src/hello.js --js_output_file build/hello-compiled.js
```

## Trials

### ES2015

Transpiling ES2015 to ES5

```$xslt
const hello = (longName) => {
  alert('Hello, ' + longName);
};
hello('New User');
```

```$xslt
$ java -jar node_modules/google-closure-compiler/compiler.jar --js src/hello.es2015.js --js_output_file build/hello-compiled.js
```

```$xslt
var hello=function(a){alert("Hello, "+a)};hello("New User");
```

### Tutoriales sobre RegExp

#### W3Schools

* [w3schools.com: JavaScript RegExp Reference](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
* [w3schools.com: JavaScript Regular Expressions](https://www.w3schools.com/js/js_regexp.asp)

#### MDN

* [MDN: Tutorial on Regular Expressions](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)
* [MDN: API de la Clase RegExp](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

#### Eloquent JS

* [Eloquent JS: Chapter 9: Regular Expressions](http://eloquentjavascript.net/09_regexp.html)

### RegExp Objects

* [RegExp Objects](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Regexp)

##### El Constructor

The `RegExp` constructor creates a regular expression object for matching text with a pattern.

Literal and constructor notations are possible:

```
/pattern/flags; 
new RegExp(pattern [, flags]);
```

* The literal notation provides compilation of the regular expression
when the expression is evaluated. 
* Use literal notation when the regular
expression will remain constant. 
* For example, if you use literal notation
to construct a regular expression used in a loop, the regular expression
won't be recompiled on each iteration.
* The constructor of the regular expression object, for example,
`new RegExp("ab+c")`, provides runtime compilation of the regular
expression. 
* Use the constructor function when you know the regular
expression pattern will be changing, or you don't know the pattern and
are getting it from another source, such as user input.
* When using the constructor function, the normal string escape rules
(preceding special characters with `\` when included in a string) are
necessary. For example, the following are equivalent:

```
var re = /\w+/;
var re = new RegExp("\\w+");
```


##### exec
*  RegExp.prototype.[exec](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/exec)

The `exec()` method executes a search for a match in a specified string. Returns a result array, or `null`.

If you are executing a match simply to find `true` or `false`, 
use the `RegExp.prototype.test()` method or the `String.prototype.search()` method.

##### search
*  String.prototype.[search](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/search)

`str.search(regexp)`

If successful, `search` returns the index of the regular expression inside
the string. Otherwise, it returns `-1`.

When you want to know whether a pattern is found in a string use `search`
(similar to the regular expression `test` method); for more information
(but slower execution) use `match` (similar to the regular expression
`exec` method).

##### match
*  String.prototype.[match](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/match)
*  
String.prototype.[replace](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/replace)

##### replace
The `replace()` method returns a new string with some or all matches of
a pattern replaced by a replacement.  
The pattern can be a string or a `RegExp`, 
and the replacement can be a string or a function to be called
for each match.

```
> re = /apples/gi
/apples/gi
> str = "Apples are round, and apples are juicy."
'Apples are round, and apples are juicy.'
> newstr = str.replace(re, "oranges")
'oranges are round, and oranges are juicy.'
```

The replacement string can be a function to be invoked to create the
new substring (to put in place of the substring received from parameter
`#1`). The arguments supplied to this function are:

| **Possible name** | **Supplied value** |
| ----------------- | ------------------ |
|match              | The matched substring. (Corresponds to `$&`.)|
|`p1`, `p2`, ...    | The nth parenthesized submatch string, provided the first argument to replace was a RegExp object. (Corresponds to `$1`, `$2`, etc.) For example, if `/(\a+)(\b+)/`, was given, `p1` is the match for `\a+`, and `p2` for `\b+`.|
|`offset`             | The `offset` of the matched substring within the total string being examined  (For example, if the total string was `"abcd"`, and the                  matched substring was `"bc"`, then this argument will be `1` |
|string             |The total string being examined |

###### Ejemplo de `replace`
```bash
[~/javascript/learning]$ pwd -P
/Users/casiano/local/src/javascript/learning
[~/javascript/learning]$ cat f2c.js 
```
```javascript
#!/usr/bin/env node
function f2c(x)
{
  function convert(str, p1, offset, s)
  {
    return ((p1-32) * 5/9) + "C";
  }
  var s = String(x);
  var test = /(\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}

var arg = process.argv[2] || "32F";
console.log(f2c(arg));
```
Ejecución:

```bash
[~/javascript/learning]$ ./f2c.js 100F
37.77777777777778C
[~/javascript/learning]$ ./f2c.js 
0C
```

#### Extensiones a las Expresiones Regulares

##### Expresiones Regulares Extendidas (a la Perl)

* [ GitHub repo ilustrando el uso de XRegExp URL](https://github.com/ULL-ESIT-GRADOII-PL/xregexp-example)
* [xregexp repo en GitHub. Documentación](https://github.com/slevithan/xregexp)
* [http://xregexp.com/](http://xregexp.com/) Documentación

##### Extensiones a las Expresiones Regulares en ECMA6

* [New regular expression features in ECMAScript 6](http://www.2ality.com/2015/07/regexp-es6.html)

#### Ejercicios

* [Ejercicios de Expresiones Regulares](regexpejercicios.md)

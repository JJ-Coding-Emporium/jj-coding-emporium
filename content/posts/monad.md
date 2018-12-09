---
title: "Monad"
date: 2018-12-07T19:40:26-08:00
draft: true
js: []
---

*Disclaimer: I don't understand monads. Which is why I'm blogging about them - perhaps I'll understand them by the time I'm done. And perhaps you will too!*

## The history of the programming monad
Monads were first introduced to the programming realm by the language designers of [Haskell](https://www.haskell.org/), who were grappling with the thorny problem of IO for a pure functional programming language. What's this problem, you ask? Well, pure languages are, by strict definition, not allowed to *have* or *mutate* state. For instance, this is not strictly pure (even though the function itself is pure):

{{< highlight javascript "linenos=table,linenostart=0" >}}
function sumArray (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
{{< / highlight >}}

The function `sumArray` is pure, since for any given input, it'll always return the same output, but its implementation is impure, as it changes (mutates) the variables `sum` and `i` inside the for loop. In fact, pure functional languages don't have variables or loops of any kind. 

The problem with IO is that it is, by its nature, impure. Imagine calling a synchronous function `readFile` that takes a filename as input.
{{< highlight javascript "linenos=table,linenostart=0" >}}
  const contents = readFile('path-to-file')
{{< / highlight >}}

There's no telling what `contents` will be. The file could have changed, it could not exist, etc. 

And so, for the longest time, Haskell did not have IO. The designers were determined to keep the language pure, if not simply for dogmatic reasons, but to preserve its [*laziness*](https://wiki.haskell.org/Lazy_evaluation). 



{{< tweet 992773186239516677 >}}
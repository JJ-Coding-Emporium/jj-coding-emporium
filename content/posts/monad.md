---
title: "Monad"
date: 2018-12-07T19:40:26-08:00
draft: true
author: ["Justin Lee"]
js: []
---

*Disclaimer: I don't understand monads. Which is why I'm blogging about them - perhaps I'll understand them by the time I'm done. And perhaps you will too!*

## The history of the programming monad
Monads were first introduced to the programming realm by the language designers of [Haskell](https://www.haskell.org/), who were grappling with the thorny problem of IO for a pure functional programming language. What's this problem, you ask? Well, pure languages are not allowed to *have* or *mutate* state. For instance, this is not pure (even though the function itself is pure):

{{< highlight javascript "linenos=table,linenostart=0" >}}
function sumArray (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
{{< / highlight >}}

The function `sumArray` is pure, since for any given input, it always return the same output, but its implementation is impure, as it changes (mutates) the variables `sum` and `i` inside the for loop. In fact, pure functional languages don't have variables or loops of any kind. 

The problem with IO is that it is, by its nature, impure. Imagine calling a synchronous function `readFile` that takes a filename as input.
{{< highlight javascript "linenos=table,linenostart=0" >}}
  const contents = readFile('path-to-file')
{{< / highlight >}}

There's no telling what `contents` will be. The file could have changed, it could not exist, etc. 

And so, for the longest time, Haskell did not have IO. The designers were determined to keep the language pure, if not simply for dogmatic reasons, but to preserve its [*laziness*](https://wiki.haskell.org/Lazy_evaluation). 

The utility of a language that lacts the ability to interact with the outside world in any way is limited, but without a practical way to perform pure IO, Haskell remained in the confines of the ivory towers. 

That is, until the designers of Haskell realized that the monad solves the problem of pure IO. 

## So what the heck is a monad? 
> A monad is just a monoid in the category of endofunctors, what's the problem? 

I've read them being described as [burritos](https://blog.plover.com/prog/burritos.html) and [Lannisters](https://www.snoyman.com/blog/2016/09/monads-are-like-lannisters), but I'm not convinced that these analogies are helpful. 

As a quick aside, Philip Wadler, the computer scientist who realized the monads, originally discovered and studied by category theorists, could be applied to programming languages, makes the fascinating point that ideas that are found more than once independently are discovered, not invented. This tells us that monads, like the laws of logic, are discovered. He makes the further claim that the way we feel is different using an invented language from a language that was discovered. The core of functional languages is built on Lambda calculus, which was discovered. 



### The Maybe Monad
return :: a -> Maybe a
>>=    :: Maybe a -> (a -> Maybe b) -> Maybe b



<!-- {{< tweet 992773186239516677 >}} -->
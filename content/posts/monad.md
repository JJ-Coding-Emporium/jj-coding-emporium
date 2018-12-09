---
title: "Monad"
date: 2018-12-07T19:40:26-08:00
draft: true
js: []
---

*Disclaimer: I don't understand monads. Which is why I'm blogging about them - perhaps I'll understand them by the time I'm done. And perhaps you will too!*

## The history of the programming monad
Monads were first introduced to the programming realm by the language designers of [Haskell](https://www.haskell.org/), who were grappling with the thorny problem of IO for a pure functional programming language. What's this problem, you ask? Well, pure languages are, by strict definition, not allowed to *have* or *mutate* external (outside of the function) state. For instance, this is illegal:
{{< highlight javascript >}}
const arr = [1,2,3,4,5]
let sum = 0
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
{{< / highlight >}}


 They realized that monads provide an elegant and efficient way to solve the thorny problem of IO for a pure functional programming language.



{{< tweet 992773186239516677 >}}
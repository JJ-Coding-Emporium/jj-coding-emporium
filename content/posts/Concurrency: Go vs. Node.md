---
title: "Concurrency: Go vs. Node"
date: 2018-11-27T08:13:10-08:00
draft: false
---

# Go
{{< highlight go "linenos=table,hl_lines=8 15-17,linenostart=199" >}}
package main

import (
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func getUser(username string) string {
	response, _ := http.Get("https://api.github.com/users/" + username)
	responseData, _ := ioutil.ReadAll(response.Body)
	userData := string(responseData)
	return userData
}

func GithubHandler(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	username := params["username"]
	w.WriteHeader(http.StatusOK)
	userData := getUser(username)
	log.Println(userData)
}

func main() {
	router := mux.NewRouter()
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("static")))
	router.HandleFunc("/github/{username}", GithubHandler)
	log.Println("Listening on port 8080")
	http.ListenAndServe(":8080", router)
}

{{< / highlight >}}

# Node
{{< highlight javascript "linenos=table,hl_lines=8 15-17,linenostart=0" >}}
const createNode = val => ({
  val,
  left: null,
  right: null
})

const search = (node, val) => {
  if (node === null) return null
  else if (val === node.val) return node
  else if (val < node.val) return search(node.left, val)
  else if (val > node.val) return search(node.right, val)
}

const insertNode = (node, newNode) => {
  if (newNode.val < node.val) {
    if (node.left === null) {
      node.left = newNode
    } else insertNode(node.left, newNode)
  } else {
    if (node.right === null) {
      node.right = newNode
    } else insertNode(node.right, newNode)
  }
}

const createBST = () => {
  let root = null
  return {
    insert: function (val) {
      const node = createNode(val)
      if (root === null) root = node
      else insertNode(root, node)
      return this
    },
    find: val => search(root, val),
    contains: val => search(root, val) != null,
    delete: val => {
      // todo
    },
    getTree: () => root
  }
}

module.exports = createBST
{{< / highlight >}}
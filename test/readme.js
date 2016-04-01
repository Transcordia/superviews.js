;(function () {
var hoisted1 = ["title", "boo"]
var hoisted2 = ["title", "I will render only once. Subsequent patches will be skipped."]
var hoisted3 = ["type", "text"]
var hoisted4 = ["type", "text"]
var hoisted5 = ["title", "hello"]
var hoisted6 = ["class", "list-header"]

return function myWidget (data, foo, bar) {
  var todos = []

      function add (item) {
        todos.push(item)
      }

      function remove () {
        todos.pop()
      }
  elementOpen("span", "foo", hoisted1)
  elementClose("span")
  elementPlaceholder("div", "bar", hoisted2)
  elementOpen("div", null, null, "class", data.cssClass)
    elementOpen("a", null, null, "href", "http://www.google.co.uk?q=" + (data.query) + "")
    elementClose("a")
    text(" \
        My name is " + (data.name) + " my age is " + (data.age) + " \
        I live at " + (data.address) + " \
     \
        ")
    elementOpen("div", null, null, "title", JSON.stringify(data))
      text("Hover for json")
    elementClose("div")
    elementOpen("button", null, null, "onclick", function ($event) {
      $event.preventDefault();
      var $element = this;
    alert(hi)})
      text("Say hi")
    elementClose("button")
    elementOpen("input", null, hoisted3, "value", data.val, "onchange", function ($event) {
      $event.preventDefault();
      var $element = this;
    data.val = this.value})
    elementClose("input")
    if (data.showMe) {
      elementOpen("p")
        elementOpen("span", null, null, "class", data.bar + ' other-css')
          text("description")
        elementClose("span")
        elementOpen("input", null, hoisted4, "disabled", data.isDisabled)
        elementClose("input")
      elementClose("p")
    }
    if (data.showMe) {
      text(" \
            I'm in an `if` attribute \
          ")
    }
    elementOpen("span", null, null, "style", { color: data.foo, backgroundColor: data.bar })
      text("My style changes")
    elementClose("span")
    elementOpen("ul")
      ;(Array.isArray(data.items) ? data.items : Object.keys(data.items)).forEach(function(item, $index) {
        elementOpen("li", $index)
          elementOpen("span", null, null, "class",  $index % 2 ? 'odd' : 'even' )
            text("" + ($index) + "")
          elementClose("span")
          elementOpen("input", null, null, "value", item.name)
          elementClose("input")
        elementClose("li")
      }, data.items)
    elementClose("ul")
    elementOpen("ul")
      ;(Array.isArray(data.arr) ? data.arr : Object.keys(data.arr)).forEach(function(item, $index) {
        elementOpen("li", $index)
          elementOpen("span")
            text("" + (item.name) + "")
          elementClose("span")
        elementClose("li")
      }, data.arr)
    elementClose("ul")
    elementOpen("ul")
      ;(Array.isArray(data.obj) ? data.obj : Object.keys(data.obj)).forEach(function(key, $index) {
        elementOpen("li", $index)
          elementOpen("span", null, hoisted5)
            text("" + (key) + " - " + (data.obj[key]) + "")
          elementClose("span")
        elementClose("li")
      }, data.obj)
    elementClose("ul")
    elementOpen("ul")
      ;(Array.isArray(data.products) ? data.products : Object.keys(data.products)).forEach(function(product, $index) {
        elementOpen("li", product.id)
          text(" \
                  " + (product.name) + " \
                ")
        elementClose("li")
      }, data.products)
    elementClose("ul")
    elementOpen("ul")
      if (data.items.length) {
        ;(Array.isArray(data.arr) ? data.arr : Object.keys(data.arr)).forEach(function(item, $index) {
          elementOpen("li", item.id)
            text(" \
                    " + (item.name) + " \
                  ")
          elementClose("li")
        }, data.arr)
      }
      if (!data.items.length) {
        elementOpen("li", null, hoisted6)
          text(" \
                  No items found \
                ")
        elementClose("li")
      }
    elementClose("ul")
  elementClose("div")
}
})()
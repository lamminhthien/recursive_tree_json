var _ = require('lodash');

function transformToTree (arr) {
  var nodes = {};
  return arr.filter(function (obj) {
    var id = obj["name"],
      parentId = obj["parent"];

    nodes[id] = _.defaults(obj, nodes[id], { children: [] });
    parentId && (nodes[parentId] = (nodes[parentId] || { children: [] }))["children"].push(obj);

    return !parentId;
  });
}

var arr = [
  { "name": "my2child1", "title": "My 2 Child 1", "parent": "my2" },
  { "name": "my2child2", "title": "My 2 Child 2", "parent": "my2" },
  { "name": "parent", "title": "A single parent" },
  { "name": "child-parent", "title": "A child parent", "parent": "child1" },
  { "name": "my", "title": "My" },
  { "name": "my2", "title": "My2" },
  { "name": "child1", "title": "Child 1", "parent": "my" },
  { "name": "child2", "title": "Child 2", "parent": "my" }
];

var result = transformToTree(arr);

console.log(JSON.stringify(result, null, 2));

class Node:
  "A node class, denotes a node in a graph"
  def __init__(self, name):
    self.name = name
    self.children = []

  def add_child(self, name):
    self.children.append(Node(name))
    return self

  def depth_first_search(self, array):
    array.append(self.name)
    if (self.children):
      for child in self.children:
        child.depth_first_search(array)

    return array;

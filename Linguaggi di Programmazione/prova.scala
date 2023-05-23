object Main {
  var x : Int = 1
  var A : Array[Int] = new Array[Int] (5)
  
  def foo (i: => Int, j: => Int) = {
    x = (i++) + (j++) + (i++) + (j++) 
  }
  
  def main(args: Array[String]): Unit = {
    // I want to make A[0] = 0; A[1] = 1, etc. with a for loop
    for (i <- 0 to 4) {
      A(i) = i
    }

    // print of A
    for (i <- 0 to 4) {
      print(A(i) + " ")
    }

    // print of X
    println("\n" + x)
  }
}
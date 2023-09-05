// Include java.util.Set

import java.util.Vector;


class prova {

    // main
    public static void main(String[] args) {        
        Vector<? super Counter> s = new Vector<Counter>(2);
        //Object x = s.get(0);
        s.add(new MultCounter());
        Palle x = new Counterrr();
        s.add(x);
    }
}

class Palle {
    int z;
    Palle(){};
    int get(){return z;};
}

class Counter extends Palle {
    int x = 1;
    // constructor
    Counter(){ }
    int get(){ return x; }
    void inc( int i ){ x = x + i; }
    
}

class Counterrr extends Palle {
    // constructor
    Counterrr(){ }
    void inc( int i ){ x = x + i; }
}
class MultCounter extends Counter {
    // constructor
    MultCounter(){ }
    
    static void inc( MultCounter c ){
        c.inc( 2 );
    }
    static void inc( Counter c ){
        c.inc( 1 );
        System.out.println("Counter.inc");
    }
}
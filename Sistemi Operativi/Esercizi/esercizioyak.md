## Esercizio g.1

```java
Program P:
    for (i = 0; i < 2; i++) {
        long_computer();    // 5 ms
        io();               // 4 ms
    }
    short_computer();       // 2 ms
```

Si usa un device condiviso gestito in modalità FIFO.

4 processi su 2 core. 3 ms time slice.

Tempi di attivazione:
- 0 ms
- 2 ms
- 4 ms
- 7 ms



```c


MS      |   Core 1   |   Core 2
0-1     |  p1_lc_1   |   //
1-2     |  p1_lc_2   |   //
2-3     |  p1_lc_3   |   p2_lc_1   
3-4     |  p1_lc_4   |   p2_lc_2
4-5     | !p3_lc_1   |   p2_lc_3    // C: 1
5-6     |  p3_lc_2   |  !p1_lc_5    // C: 2
6-7     |  p3_lc_3   |   p1_io_1
7-8     | !p2_lc_4   |   p1_io_2    // C: 3, 4, IO: 1
8-9     |  p2_lc_5   |  !p3_lc_4    // C: 4, 1
9-10    |  p2_io_0   |   p3_lc_5    // IO: 1, 2
10-11   | !p4_lc_1   |   p3_io_0    // C: 1, 2, IO: 1, 2, 3
11-12   |  p4_lc_2   |  !p1_io_3    // C: 2, 3
12-13   |  p4_lc_3   |   p1_io_4    // C: 2, 3, IO: 2, 3
12-13   | !p2_io_1   |   p1_lc_1    // C: 3, 4, IO: 2, 3
13-14   |  p2_io_2   |  !p3_io_0    // C: 4, 1, IO: 2, 3
14-15   |  p2_io_3   |   p3_io_0    // C: 4, 1, IO: 2, 3
15-16   | !p4_lc_4   |   p3_io_0    // C: 1, 2, IO: 2, 3
15-16   |  p4_lc_5   |  !p1_lc_2    // C: 2, 3, IO: 2, 3
16-17   |  p4_io_0   |   p1_lc_3    // C: 2, 3, IO: 2, 3, 4
17-18   | !p2_io_4   |   p1_lc_4    // C: 3, 4, IO: 3, 4
18-19   |  p2_lc_1   |  !p3_io_1    // C: 4, 1, IO: 3, 4
19-20   |  p2_lc_2   |   p3_io_2    // C: 4, 1, IO: 3, 4
20-21   | !p4_io_0   |   p3_io_3    // C: 1, 2, IO: 3, 4
21-22   |  p4_io_0   |  !p1_lc_5    // C: 2, 3, IO: 3, 4
22-23   |  p4_io_0   |   p1_io_0    // C: 2, 3, IO: 3, 4, 1
23-24   | !p2_lc_3   |   p1_io_0    // C: 3, 4, IO: 3, 4, 1
24-25   |  p2_lc_4   |  !p3_io_4    // C: 4, 1, IO: 3, 4, 1
25-26   |  p2_lc_5   |   p3_lc_1    // C: 4, 1, IO: 4, 1
26-27   | !p4_io_1   |   p3_lc_2    // C: 1, 2, IO: 4, 1
27-28   |  p4_io_2   |  !p1_io_0    // C: 2, 3, IO: 4, 1
28-29   |  p4_io_3   |   p1_io_0    // C: 2, 3, IO: 4, 1
29-30   | !p2_io_0   |   p1_io_0    // C: 3, 4, IO: 4, 1, 2
30-31   |  p2_io_0   |  !p3_lc_3    // C: 4, 1, IO: 4, 1, 2
31-32   |  p2_io_0   |   p3_lc_4    // C: 4, 1, IO: 4, 1, 2
32-33   | !p4_io_4   |   p3_lc_5    // C: 1, 2, IO: 4, 1, 2
33-34   |  p4_lc_1   |  !p1_io_1    // C: 2, 3, IO: 1, 2
34-35   |  p4_lc_2   |   p1_io_2    // C: 2, 3, IO: 1, 2
35-36   | !p2_io_0   |   p1_io_3    // C: 3, 4, IO: 1, 2
36-37   |  p2_io_0   |  !p3_io_0    // C: 4, 1, IO: 1, 2, 3
37-38   |  p2_io_0   |   p3_io_0    // C: 4, 1, IO: 1, 2, 3
38-39   | !p4_lc_3   |   p3_io_0    // C: 1, 2, IO: 1, 2, 3
39-40   |  p4_lc_4   |  !p1_io_4    // C: 2, 3, IO: 1, 2, 3
40-41   |  p4_lc_5   |   p1_sc_1    // C: 2, 3, IO: 1, 2, 3
41-42   | !p2_io_1   |   p1_sc_2    // C: 3, 4, IO: 2, 3       p1 finisce
42-23   |  p2_io_2   |  !p3_io_0    // C: 4, IO: 2, 3
...
```


## Esercizio c.1:
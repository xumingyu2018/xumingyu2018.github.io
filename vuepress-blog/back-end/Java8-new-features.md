---
icon: edit
date: 2022-01-09
category:
  - Java
tag:
  - Java特性
---

# Java8新特性

![新特性.PNG](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bebf3242d1114105b1a6b9533d17bcee~tplv-k3u1fbpfcp-watermark.image?)

## HashMap

#### JDK1.8之前：（性能会稍差）

数组 + 链表 (链表散列），通过 key 的`hashCode`经过扰动函数(减少碰撞)处理过后得到 hash值再经过哈希算法获得数组索引位置；若存在元素，通过`equal`判定hash值和key值是否相同，相同则覆盖，不同则拉链法解决冲突（碰撞）。

#### JDK1.8之后：

`Entry`数组 + 链表 +红黑树(更好解决冲突)，hash值和key值（通过`equal`比较后不同时）不同则：当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的总长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树，即链表长度>8，总容量>64）时，将链表转化为红黑树（动态平衡二叉树），以减少搜索时间。

## CurrentHashMap

#### JDK1.7

首先将数据分为一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问。（ConcurrentLevel=16）

`ConcurrentHashMap`是由 `Segment` 数组结构和 `HashEntry`数组结构组成
Segment 实现了 `ReentrantLock`,所以 `Segment` 是一种可重入锁，扮演锁的角色。`HashEntry` 用于存储键值对数据。

一个 `ConcurrentHashMap`里包含一个 `Segment` 数组。`Segment` 的结构和 `HashMap`类似，是一种数组和链表结构，一个 `Segment` 包含一个 `HashEntry`数组，每个 `HashEntry`是一个链表结构的元素，每个 `Segment` 守护着一个 `HashEntry`数组里的元素，当对 `HashEntry`数组的数据进行修改时，必须首先获得对应的 `Segment` 的锁。

#### JDK1.8 (CAS无锁算法)

`ConcurrentHashMap`取消了 `Segment` 分段锁，采用 CAS 和 `synchronized` 来保证并发安全。数据结构跟 HashMap1.8 的结构类似，数组+链表/红黑二叉树。Java 8 在链表长度超过一定阈值（8）时将链表转换为红黑树。

`synchronized` 只锁定当前链表或红黑二叉树的首节点，这样只要 hash 不冲突，就不会产生并发，效率又提升 N 倍。

![1.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f8d2437720984ee491532e2c3836bf67~tplv-k3u1fbpfcp-watermark.image?)

![2.PNG](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2de86bc76f94463a1cf5830f7ccb1d0~tplv-k3u1fbpfcp-watermark.image?)

## 内存区域

![4.PNG](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f64533886c84e6dbb0f3d33e2ae742d~tplv-k3u1fbpfcp-watermark.image?)

#### 1.Java8之前（HotPot）

- 方法区属于堆中永久区（`PremGen`）的一部分（存类加载的一些信息及核心类库，几乎不会被垃圾回收机制回收）

#### 2.Java8之后

- 永久区被取代为元空间（MetaSpace)，特点：物理内存，从而垃圾回收几率低（内存满时回收），OOM内存溢出发生概率小

## Lambda表达式

### 基础语法

#### 左侧为参数列表，右侧为需要执行的功能，即Lambda体

- 无参数，无返回值

```java
 () -> System.out.println("Lambda!!");
```

- 有一个参数，无返回值（只有一个参数时，括号可省略）

```java
 (x) -> System.out.println(x);    x -> System.out.println(x)
```

- 2个及以上参数，有返回值，且Lambda体中有多条语句

```java
 Comparator<Integer> com =(x, y) -> {
     system.out.println("函数式接口");  
     return Integer.compare(x, y);
 }
```

- Lambda体中只有1条语句，return和大括号都可省略

```java
 Comparator<Integer> com =(x, y) -> Integer.compare(x, y);
```

- Lambda表达式的参数列表的数据类型可以省略，JVM编译器通过上下文推断出数据类型，即类型推断

```java
 (Integer x,Integer y) -> Integer.compare(x, y);
```

### 替代匿名内部类

#### (只要方法的参数是函数式接口都可以用 Lambda 表达式)

函数式接口： 即接口中只有一个抽象方法的接口，可以使用`@FunctionalInterface`修饰

#### 1.Runnable 接口
```java
 new Thread(new Runnable() {
       @Override
       public void run() {
           System.out.println("The runable now is using!");
       }
 }).start();
 //用lambda
 new Thread(() -> System.out.println("It's a lambda function!")).start();
```

#### 2.Comperator 接口

```java
 // 示例1
 Comparator<Integer> com = new Comparator<Integer>() {
         @@Override
         public int compare(Integer o1, Integer o2) {
             return Integer.compare(o1, o2);
         }
 }
 //Lambda(1条语句)
 Comparator<Integer> com =(x, y) -> Integer.compare(o1, o2);
 ​
 //Lambda(多条语句)
 Comparator<Integer> com =(x, y) -> {
     system.out.println("Lambda");  
     return Integer.compare(o1, o2);
 }
 ​
 //示例2
 List<Integer> strings = Arrays.asList(1, 2, 3);
 ​
 Collections.sort(strings, new Comparator<Integer>() {
 @Override
 public int compare(Integer o1, Integer o2) {
     return o1 - o2;}
 });
 ​
 //Lambda
 Collections.sort(strings, (Integer o1, Integer o2) -> o1 - o2);
 //分解开
 Comparator<Integer> comperator = (Integer o1, Integer o2) -> o1 - o2;
 Collections.sort(strings, comperator);
```

#### 3.Listener 接口

```java
 JButton button = new JButton();
 button.addItemListener(new ItemListener() {
 @Override
 public void itemStateChanged(ItemEvent e) {
    e.getItem();
 }
 });
 //lambda
 button.addItemListener(e -> e.getItem());
```

#### 4.自定义函数式接口

```java
// 示例1
@FunctionalInterface
public interface LambdaInterface {
 void f();
}

//使用
public class LambdaClass {
    public static void forEg() {
        lambdaInterfaceDemo(()-> System.out.println("自定义函数式接口"));
    }
    //函数式接口参数
    static void lambdaInterfaceDemo(LambdaInterface i){
        System.out.println(i);
    }
}

//示例2：对一个数进行运算
@FunctionalInterface  //接口中只有一个抽象方法，public abstract可省略
public interface MyFun{
    public Integer getValue(Integer num);
}

@Test
public void test() {
     Integer num = operation(100, (x) -> x + 100 )
}

public Integer operation(Integer num, MyFun mf){
     return mf.getValue(num)
}
```

#### 5.集合迭代

```java
void lamndaFor() {
        List<String> strings = Arrays.asList("1", "2", "3");
        //传统foreach
        for (String s : strings) {
            System.out.println(s);
        }
        //Lambda foreach
        strings.forEach((s) -> System.out.println(s));
        //or
        strings.forEach(System.out::println);
         //map
        Map<Integer, String> map = new HashMap<>();
        map.forEach((k,v)->System.out.println(v));
}
```

### 其他函数式接口

![5.PNG](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebe37223bd1f47bf9162d9411221b6bb~tplv-k3u1fbpfcp-watermark.image?)

### 四大内置核心函数式接口

- `Consumer<T>`：消费型接口 `void accept(T t);`
- `Supplier<T>`：供给型接口 `T get();`
- `Function<T, R>`：函数型接口 `R apply(T t);`
- `Predicate<T>`：断言型接口 `boolean test(T t);`

```java
    //    消费型接口 Consumer<T>     void accept(T t)
    @Test
    public void test1() {
        //未使用Lambda表达式
        Learn("java", new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println("学习什么？ " + s);
            }
        });
        System.out.println("====================");
        //使用Lambda表达
        Learn("html", s -> System.out.println("学习什么？ " + s));
    }

    private void Learn(String s, Consumer<String> stringConsumer) {
        stringConsumer.accept(s);
    }

    //    供给型接口 Supplier<T>     T get()
    @Test
    public void test2() {
        // Supplier提供0-100随机数放到集合中
        List<Integer> list = getNumList(10, () -> (int)(Math.random() * 100));
        for(Integer num : list) {
            System.out.println(num);
        }
    }
    // 产生指定个数的整数放入集合中
    public List<Integer> getNumList(int num, Supplier<Integer> sup) {
        List<Integer> list = new ArrayList<>();
        for(int i = 0; i < num; i++) {
            Integer n = sup.get();
            list.add(n);
        }
        return list;
    }

    //函数型接口 Function<T,R>   R apply(T t)
    @Test
    public void test3() {
        //使用Lambda表达式
        Employee employee = new Employee(1001, "Tom", 45, 10000);

        Function<Employee, String> func1 =e->e.getName();
        System.out.println(func1.apply(employee)); //Tom
        System.out.println("====================");

        //使用方法引用
        Function<Employee,String>func2 = Employee::getName;
        System.out.println(func2.apply(employee)); //Tom

    }

    //断定型接口 Predicate<T>    boolean test(T t)
    @Test
    public void test4() {
         List<String> list = Arrays.asList("123", "1234", "12345");
         // 将字符串长度大于3的放入集合
         List<String> strList = ListfilterStr(list, (s) -> s.length() > 3);
         for(String str : strList ) {
            System.out.println(str);
         }
    }
    //将满足条件的字符串放入集合中
    public List<String> filterStr(List<String> list, Predicate<String> pre) {
        List<String> strList = new ArrayList<>();
        for(String str : list) {
            if(pre.test(str)) {
                strList.add(str);
            }
        }    
    }
```

### 方法引用与构造引用

1.  方法引用语法格式

    -   对象：：实例方法名
    -   类：：静态方法名
    -   类：：实例方法名

    注意：

    -   Lambda体中调用方法的参数列表与返回值类型，要与函数式接口中抽象方法的函数列表与返回值类型保持一致
    -   若Lambda参数列表中的第一个参数是实例方法的调用者，而第二个参数是实例方法的参数时，可使用 类：：实例方法名，如`x.equal(y)`

0.  构造器引用语法格式

    -   类名：：new

    注意：

    -   需要调用的构造器的参数列表要与函数式接口中抽象方法的参数列表保持一致（如：若调用无参构造器，则用`Supplier<T>`，因为它的抽象方法`T get()`没有参数）

0.  数组引用

    -   Type[]：：new

## Stream

### Stream三个操作步骤

1.  创建Stream

    -   集合获取流：`new ArrayList<>().stream()`
    -   获取数组流：`Arrays.stream(new int[10])`
    -   Stream静态方法of：`Stream.of("aa", "bb", "cc")`
    -   无限流：`Stream.iterate()`
    -   并行流：`Stream.parallel()`

0.  中间操作（不会有任何结果）

    -   筛选和切片

        1.  `.filter(判断)`：过滤
        0.  `.limit(n)`：使元素不超过给定数量
        0.  `.skip(n)`：跳过前n个
        0.  `.distinct()`：去重（需要重写`hashCode()`和`equals()`）

    -   映射（提取信息到新的集合中）

        1.  `.map(带1个参数)`：类似于二维数组流或`add()`如：[11, 22, [aa, bb, cc]]
        0.  `.flatMap(带1个参数)`：类似于一维数组流或`addAll()`如：[11, 22, aa, bb, cc]

    -   排序

        1.  `.sorted()`：字典排序（`Comparable`接口中`CompareTo`方法）
        0.  `.sorted(Comparator com)`：自定义排序

0.  终止操作（延迟加载/惰性求值）

    -   查找与匹配

        1.  `.allMatch() / .anyMatch() / .noneMatch()`
        0.  `.findFirst() / .findAny()`
        0.  `.count()`
        0.  `.max([Comparator]Integer::compare) / .min(Comparator com)`
        0.  `.forEach()`

    -   归约

        1.  `.reduce([起始值]，递归操作[2个参数])`常和map连接

            ```
            // 累加数组
            List<Integer> list = Arrays.asList(1, 2, 3)
            Integer sum = list.stream().reduce(0, (x, y) -> x + y);
            // 计算工资总和
            Optional<Double> sum = employees.stream().map(Employee::getSalary).reduce(Double::sum);
            ```

    -   收集

        1.  `.collect(Collectors.xxx())` 可将流转化为其他形式

            其中xxx可为：`groupingBy(),counting(),averagingDouble()`等

### 常见StreamAPI

```java
@Test
public void test() {
    // 创建Stream
    Stream<String> stream = Stream.of("aa", "bb", "cc");
    
    List<String> strings = Arrays.asList("abc", "def", "gkh", "abc");
    //返回符合条件的stream
    Stream<String> stringStream = strings.stream().filter(s -> "abc".equals(s));
    //计算流符合条件的流的数量
    long count = stringStream.count();

    //forEach遍历->打印元素
    strings.stream().forEach(System.out::println);

    //limit 获取到1个元素的stream
    Stream<String> limit = strings.stream().limit(1);
    //toArray 比如我们想看这个limitStream里面是什么，比如转换成String[],比如循环
    String[] array = limit.toArray(String[]::new);

    //map 对每个元素进行操作返回新流
    Stream<String> map = strings.stream().map(s -> s + "22");

    //sorted 排序并打印
    strings.stream().sorted().forEach(System.out::println);

    //Collectors collect 把abc放入容器中
    List<String> collect = strings.stream().filter(string -> "abc".equals(string)).collect(Collectors.toList());
    //把list转为string，各元素用，号隔开
    String mergedString = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.joining(","));

    //对数组的统计，比如用
    List<Integer> number = Arrays.asList(1, 2, 5, 4);

    IntSummaryStatistics statistics = number.stream().mapToInt((x) -> x).summaryStatistics();
    System.out.println("列表中最大的数 : "+statistics.getMax());
    System.out.println("列表中最小的数 : "+statistics.getMin());
    System.out.println("平均数 : "+statistics.getAverage());
    System.out.println("所有数之和 : "+statistics.getSum());

    //concat 合并流
    List<String> strings2 = Arrays.asList("xyz", "jqx");
    Stream.concat(strings2.stream(),strings.stream()).count();

    //注意 一个Stream只能操作一次，不能断开，否则会报错。
    Stream stream = strings.stream();
    //第一次使用
    stream.limit(2);
    //第二次使用
    stream.forEach(System.out::println);
    //报错 java.lang.IllegalStateException: stream has already been operated upon or closed

    //但是可以这样, 连续使用
    stream.limit(2).forEach(System.out::println);
}
```

### 特点

1.  通过简单的链式编程，使得它可以方便地对遍历处理后的数据进行再处理
0.  方法参数都是函数式接口类型
0.  一个 Stream 只能操作一次，操作完就关闭了，继续使用这个 stream 会报错
0.  Stream 不保存数据，不改变数据源
0.  Stream操作是延迟执行的

## Optional

用途：防止空指针异常

Optional容器类的常用方法：

-   `Optional.of(T t)`：创建一个Optional实例
-   `Optional.empty()`：创建一个空的Optional实例
-   `Optional.ofNullable(T t)`：若t不为null，创建Optional实例，否则创建空实例
-   `isPresent()`：判断是否含值
-   `orElse(T t)`：如果调用对象含值，返回该对象值，否则返回自定义对象t的值
-   `orElseGet(Supplier s)`：如果调用对象含值，返回该对象值，否则返回函数式接口s的值
-   `map(Function f)`：若有值对其处理，并返回处理后的Optional否则返回Optional.empty()
-   `flatMap(Function mapper)`：与map类似，要求返回值必须是Optional

主要的API： `Optional.ofNullable()`

```java
// 传统防止空指针异常方法
class Zoo {
   private Dog dog;
}

class Dog {
   private int age;
}

Zoo zoo = getZoo();
if(zoo != null){
   Dog dog = zoo.getDog();
   if(dog != null){
      int age = dog.getAge();
      System.out.println(age);
   }
}

// Optional map
Optional.ofNullable(zoo).map(o -> o.getDog()).map(d -> d.getAge()).ifPresent(age ->
    System.out.println(age)
);
// Optional flatmap
Optional.ofNullable(zoo).flatmap(o -> Optional.of(o.getDog())).flatmap(d -> Optional.of(d.getAge())).ifPresent(age ->
    System.out.println(age)
);
```

## 时间日期API

总结：

- Java 8 之前 转换都需要借助 `SimpleDateFormat`类（线程不安全，需通过ThreadLocal解决），而Java 8 之后只需要`LocalDate` 、 `LocalTime` 、 `LocalDateTime`的 `of` 或 `parse` 方法。

### 格式化

Java 8 之前：

```java
public void oldFormat(){
    Date now = new Date();
    //format yyyy-MM-dd HH:mm:ss
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    String date  = sdf.format(now);
    System.out.println(String.format("date format : %s", date));

    //format HH:mm:ss
    SimpleDateFormat sdft = new SimpleDateFormat("HH:mm:ss");
    String time = sdft.format(now);
    System.out.println(String.format("time format : %s", time));

    //format yyyy-MM-dd HH:mm:ss
    SimpleDateFormat sdfdt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    String datetime = sdfdt.format(now);
    System.out.println(String.format("dateTime format : %s", datetime));
}
```

Java 8 之后：

```java
public void newFormat(){
    //format yyyy-MM-dd
    LocalDate date = LocalDate.now();
    System.out.println(String.format("date format : %s", date));

    //format HH:mm:ss
    LocalTime time = LocalTime.now().withNano(0);
    System.out.println(String.format("time format : %s", time));

    //format yyyy-MM-dd HH:mm:ss
    LocalDateTime dateTime = LocalDateTime.now();
    DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    String dateTimeStr = dateTime.format(dateTimeFormatter);
    System.out.println(String.format("dateTime format : %s", dateTimeStr));
}
```

### 字符串转日期格式

Java 8 之前：

```java
//已弃用
Date date = new Date("2021-01-26");
//替换为
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
Date date1 = sdf.parse("2021-01-26");
```

Java 8 之后：

```java
LocalDate date = LocalDate.of(2021, 1, 26);
LocalDate.parse("2021-01-26");

LocalDateTime dateTime = LocalDateTime.of(2021, 1, 26, 12, 12, 22);
LocalDateTime.parse("2021-01-26 12:12:22");

LocalTime time = LocalTime.of(12, 12, 22);
LocalTime.parse("12:12:22");
```

### 时间格式线程安全问题

![6.PNG](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2f18fb55d014bba98a8ff4e5877cda8~tplv-k3u1fbpfcp-watermark.image?)

## 接口的默认实现方法和静态方法

-   类优先原则：如果一个父类提供了具体实现方法，那么接口中具有相同名称和参数的默认实现方法会被忽略。 
-   接口冲突：如果实现的2个接口同时提供了一个具有相同名称和参数列表的方法，那么必须选择一个覆盖该方法来解决接口的冲突。

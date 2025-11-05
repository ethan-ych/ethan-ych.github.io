---
layout: page
permalink: /courses/
title: Course Reviews
nav: true
nav_order: 2
toc: 
    sidebar: left
    levels: 2
toc_label: Jump to Semester
---
In these reviews, I chose to focus on how each class would fit into my (and maybe your) Computer Science education, rather than giving advice on how to succeed in the course. I think CMU has a unique curriculum in the sense that it exposes you to many fundamental areas of the field, and I hope this guide can help you take advantage of that. It is worth noting that I wrote all these reviews after completing undergrad, so I was able to evaluate these courses with a fuller picture. 

This page contains (or at least will contain) every class I took at CMU, not just limited to CS or math. If you don't see any comment on a particular course, it probably means that I don't have much to say about it. Lastly, if you have any questions about the reviews, please don't hesitate to reach out to me! I'd be glad to know someone is reading my reviews. 

*Disclaimer: These reviews are entirely based on my own experiences and opinions. Other students may have very different perspectives on the same courses, so take my thoughts as just one viewpoint among many.*

## Spring 2025

##### 15-311 Logic and Mechanized Reasoning, *Marijn Heule* 

I did SAT solver research with Marijn so I decided to take a class to formally study the theory behind it. I believe not many people know about the field of formal methods so here's my one-line summary: formal methods studies how to represent problems with logical statements, and how to reason about such statements, often automatically. 

Our logical systems are extremely expressive. Think about how we can already encode every problem in NP with propositional logic, since SAT is famously NP-complete. We can therefore exploit this and develop solvers for different logical systems (propositional, first-order, etc.), which will then allow us to solve various problems automatically. This matters because, our CS education teaches students to fear NP-hardness or even undecidability, but in practice we don't go home and cry when we encounter an NP-hard problem, thanks to these highly efficient solvers. 

Now you know what formal methods is about, and this class teaches both the theory and practice of that, namely the syntax, semantics, and decision procedures of different logical systems, as well as the implementation of their solvers (it also teaches Lean!). Just like other PL/logic electives, this class probably won't help you that much with your career, but it's nonetheless cool to study. On a side note, the exams are often a time crunch and a lot of problems are hit or miss, so beware of that. 

## Fall 2024

##### 15-312 Foundations of Programming Languages, *Bob Harper*

As Karl said in my 150 lecture, this course doesn't just take you through the zoo of programming languages while pointing to one and saying "Look! That programming language has a long nose! Hahaha." 312 introduces you to the formalization of programming languages and how we can use it to prove properties of a given language. It also shows you how theoretical studies on types can illuminate language design. 

You will start from a small statically-typed, functional language with limited expressions, to bigger languages that can be dynamically-typed or imperative, and eventually a language that supports concurrency. Typically, half of the homework will be induction proof on language properties and the other half will be writing an interpreter. You will quite possibly be lost during the lectures at first but the homework will solidify your understanding.

You should consider taking the course with Bob. Not only because he's a respected researcher in programming language theory (PLT) and wrote the textbook, but because of his unparalleled passion for the field. He has strong opinions on many mainstream languages and it was refreshing to hear his critique from a type-theoretic standpoint.

I do need to note that after taking this class, I still didn't feel like I had a comprehensive or intuitive understanding of PLT, mainly due to how abstract the course was (which also therefore felt disconnected to the real-world discussion on programming languages). I hope to combat this by reading a textbook and/or taking more classes in PL. 

##### 15-459 Undergraduate Quantum Computation, *Ryan O'Donnell*

Let me preface the review with one of Ryan's ending remarks on the course, "Quantum computing is like a DLC on classical computing!" This is indeed true if you think about it: the discovery of quantum physics allows us to (in principle) perform computation that we never could with just classical bits. However, reality is often disappointing: spoiler alert, quantum computing might not be as powerful as you think or hear. I won't elaborate more on this so you can find out yourself in the course. 

Keep in mind that this is a theory course so it abstracts away all the physical realization and just assumes we have access to as many stable quantum bits (qubits) as we need. With qubits, we can build a model of computation that is based on linear algebra and feels drastically different from our familiar classical system. 

Since we're dealing with a new model of computation, much of the course felt like learning the basic operations and memorizing the "tricks" that quantum algorithms pull to achieve the desired results. A typical introduction goes like this: we can get the result if we assume we can compute *A*, and we can compute *A* if we can do *B* by manipulating qubits, which requires a subroutine *C*... Maybe this is inevitable when teaching quantum computing, but I did have fewer aha moments compared to other theory classes. 

The math behind the theory is still interesting and I wish I had spent more time on this class (which I couldn't thanks to the recruiting season). Taking this course helped me demystify the buzzword "quantum computing" so maybe you should too!

##### 15-591 Independent Study in Computer Science, *Marijn Heule*

For my 15-354 CDM's final project, I chose to implement a <a href='https://github.com/ethan-ych/DPLL-Visualized'>DPLL SAT solver</a> and thought it was interesting. This led me to finding Marijn, whose work is in automated reasoning and especially SAT solving, when I was looking for some research experience. 

You can view my poster <a href="{{ '/assets/pdf/poster.pdf' | relative_url }}">here</a>. One advice I can give on finding a professor to work with is don't be afraid of cold emailing and sending follow-ups. Many professors in SCS will be happy to discuss potential projects, given that they have advising capacity and your background aligns with their work. Most professors are extremely busy so follow-ups will help them notice your email.

##### 54-191 Acting for Non-Majors, *Gab Cody*

CMU has one of the best drama programs in the country, which is probably why Acting for Non-Majors has long been one of the most popular gen-eds. It’s practically impossible to get into this class unless you’re a senior. I’ve always liked to treat my gen-ed requirements as opportunities to explore new ideas, so this class had been on my radar for a while.

It introduced me to what acting entails, or at least allowed me to form my own interpretation: working with your body and speech to create convincing and engaging portrayals of different scenarios. Throughout the semester, we went through various exercises (theater games, monologues, open scenes, etc.) to improve our on-stage reactions, and concluded the class by performing a scene from a classic play. The final performance was especially enjoyable, as it required analyzing characters and exploring styles that suited each of us.

All in all, I developed an appreciation for good acting through this class. I do wish we had done more complete performances to apply what we’d learned.

## Summer 2024

##### 21-355 Principles of Real Analysis I, *Tim Flaherty*

This is a required course for the math minor and it makes sense since analysis is a fundamental area of math. Real analysis specifically lays the foundation for calculus, and this course covers topics like limits, continuity, and differentiation and integration of single-variable functions, with a bit of function limits at the end.

It was really interesting to think about continuous math from a proof-based standpoint, since many results in calculus are non-obvious or even counterintuitive until you establish and derive from a rigorous definition. For example, did you know that <a href='https://en.wikipedia.org/wiki/Thomae%27s_function'>this function</a> is continuous at all irrational points by definition of continuity? When doing analysis problems, I liked to visualize a Desmos graphing calculator in my head and zoom in or out indefinitely to get intuition, and it was a whole lot of fun. 

The only unfortunate part was that this was a summer course, so it sort of rushed through derivation and integration, which I wish I had more time to understand in depth. Analysis is relatively unrelated to CS, but I still really enjoyed it - it felt a lot more elegant than abstract algebra or anything discrete I’ve studied (at least to me).

## Spring 2024

##### 15-259 Probability and Computing, *Mor Harchol-Balter & Weina Wang*

Probability and Computing (PnC) has long been one of CMU's star classes because of its connection between well, probability and computing. It however went through a major curriculum change between 2023 and 2024 and lost most of its coverage on the computing part - but overall it's definitely still a class worth taking. 

I had to drop PnC in Spring '23 because I had too much on my plate. Back then, PnC introduced not just basic probability but also advanced tail bounds, randomized algorithms and even Markov Chains. Now it is essentially broken down into two classes 15259 and 15359, and 259 only consists of basic probability and some amount of statistics and system simulation. The workload became much, much more manageable but that also means you'll need to spend two semesters to witness the advanced stuff. 

Why is it still a class worth taking then? That's because it's very well-structured and well-taught. The homework problems are carefully designed and selected, and both Mor and Weina are fantastic teachers that are able to explain complex concepts clearly. This class is more challenging than other probability electives offered in the stats department but you'll likely learn much more. 

(PnC is also known for giving out Citadel-sponsored candies to students that answer questions, not necessarily correctly, in lecture. Clearly this is meant to encourage students to participate in class, but I noticed it ended up being the same few students answering most of the questions. Personally I feel like this might discourage other students that are not able to absorb materials as quickly.)

##### 15-411 Compiler Design, *Jan Hoffmann*

Compilers is so special because you and a partner essentially need to write a C0 (a type-safe subset of C) to x86 compiler from scratch. As far as I know, very few, if any, compilers courses elsewhere require such a major accomplishment. On top of that, you're expected to implement common optimizations, and you will be graded based on the output code's performance. 

You will be designing and implementing every component of the compiler, including the lexer, parser, typechecker, intermediate representation translator, code generator, and finally the register allocator. You're allowed to use a generator for lexer and parser (which does NOT trivialize lexing and parsing, since you still need to write the rules), and everything else you only get a barebones starter code. 

The entire project is split into 6 labs, and your compiler is supposed to support more language functionality incrementally: basic arithmetic, conditionals and loops, function calls, and eventually memory allocation. Lab 5 is optimization and Lab 6 is extra things you want to add. The lectures will teach you the theoretical knowledge you need for implementing each component, but practice often differs from theory, so you'll need to figure things out on the fly. 

Did I mention that most teams write their compilers in OCaml? In my semester, the course recommended either OCaml or Rust. Functional languages (and Rust which is multi-paradigm) with their algebraic datatype and recursion-friendly nature make them good at what writing a compiler requires. As someone who loves functional languages, I was glad to witness how they are used in a large, real-world project. I am however also curious what it's like to write a compiler in, say C++. 

What are some reasons why you should study compiler design? Personally I'd give three. First, compilers are the translator between how humans think and how machines think. I think knowledge at this level of abstraction is fundamental to a computer science student. Second, compilers is a great example of how different areas in computer science work together to create a great product. You have programming language theory in the frontend (parsing/typechecking), system programming in the backend (x86 generation), and finally algorithms for optimization (e.g. graph theory for register allocation). Lastly, very few other courses give you the freedom to design a system at this scale. Indirectly, you'll learn a lot about teamwork and how to evaluate and compare different solutions. 

If you've read this far and believe you want to take this class, here's a full disclosure: this class doesn't just have a huge amount of work but its debugging experience can be grueling. The language specification has a million details, assembly language is naturally messy (seg faults!), and most importantly is what I call "higher-order debugging." You are trying to find a bug in your code that produces a bug in its output code, and it's TRICKY. Once I spent a week looking for a bug only to find out that my partner overwrote one register that was spare in earlier labs. 

Overall, this class does a great job teaching you how a compiler works and it gave me confidence in my ability to implement a large codebase. It does still have room for improvement: I personally find the deduction for failed test cases too punishing, and I wish we had received more feedback on our design choices. Having written so much, I'll let you decide if this class is right for you - one way or another, it'll probably be a core memory of your time studying CS at CMU. 

(Shout out to my partner Kadin. Our friendship survived partnering in concepts, 251, compilers and 451.)

##### 33-115 Physics for Future Presidents, *Markus Deserno*

This class was meant to be my filler class that required minimal effort and kept my full-time status while I was taking Compilers. Surprisingly, this class became one of my favorite non-technical classes at CMU (well, physics is technical, but this is more of a popular science course). The name of the course might sound confusing and here's the explanation: it aims to teach students the physics that a president would need to know, i.e. high level knowledge in areas relevant to the society. 

More specifically, here are some topics that this class covers: energy, nuclear science, waves, and climate change. Technicality-wise, it only goes as deep as needed for students to understand its application in real life, and while I already knew over half of the content, the other half was really intriguing. The most memorable part was the survey of basic nuclear science and its relevant history, starting from what is radioactivity to how the chain reaction was weaponized. 

I must also mention that Prof. Deserno is an engaging lecturer and a professor that really cares about students' learning, and I was glad to be able to have some meaningful discussions with him. The bottom line is, unless you're already a physics enthusiast, you'll likely learn a lot of new things and have some of your misconception corrected - so take this class if you want to learn some fun physics without much extra workload!

##### 84-275 Comparative Politics

## Fall 2023

##### 11-485 Introduction to Deep Learning, *Bhiksha Raj*

By far my least favorite class in undergrad. Don't get me wrong, it can be a course that teaches you a lot, but there are just so many things about it that make taking it a frustrating experience. 

This course aims to give you a comprehensive overview of the field of deep learning, by introducing notable architectures including CNN, RNN, and all the way to the celebrated transformer architecture. It covers every architecture in great detail and on top of that requires you to train your own models on given datasets, for tasks like image recognition or speech to text transcription. 

My biggest issue with this course is that it advertises itself as an intro class. Yes, in theory, you don't need any deep learning, or even machine learning background to pass every quiz and finish every homework. However, without proper context or previous exposure, you can easily get lost given how dense each lecture is: almost every lecture's slide deck has 100+ pages in pdf format. Much of the motivation and crucial concepts are quickly brushed through, and the sheer amount of material makes it hard to recover once you fall behind.

Something else that bothers me is the disconnection between the lecture and the homework. While the lecture explains the underlying theory, the homework requires you to build and train your own model with PyTorch. I get that the idea of introducing both theory and hands-on experience is appealing, but it also means that students have to spend a huge amount of time outside of class to build the required skillset. This is not even accounting for the time-consuming and uncertain nature of model training. 

In conclusion, I believe you can learn a tremendous amount if you have the proper background and are willing to put in the time, but otherwise, this course can easily be overwhelming and bring distress. Because of this class, I stayed away from ML for the rest of my undergrad.

##### 15-354 Computational Discrete Math, *Klaus Sutner*

After deciding to get involved in CS theory, I found this class from the list of electives that count for the <a href='http://coursecatalog.web.cmu.edu/schools-colleges/schoolofcomputerscience/scsconcentrations/#algorithmsandcomplexitytextcontainer'>theory concentration</a>. Computational Discrete Math (CDM) introduces interesting topics that are hard to find elsewhere, but it probably isn't the best 251 follow-up course, for the reasons I'll get into later. 

CDM covers topics like models of computation (primitive recursion/register machine), advanced automata theory, and different mathematical concepts, including first-order logic and abstract algebra, from a computational standpoint. You would be able to learn some cool computational facts and how various fields of mathematics play a role in the world of computation. 

Klaus has been teaching theory at CMU for a long time and CDM is his signature class. He is extremely knowledgeable and humorous in his own way so I really enjoyed the lectures. His teaching style is kind of a hit or miss though since I've heard people reacting differently to his lectures. 

On to why I said you should think twice before picking this class as your first non-introductory theory class. The biggest reason is this class is more of a "introducing topics Klaus finds amusing" class: it deviates quite a lot from the mainstream theory topics. Check out other CMU theory professors' research interests to get an idea of the active research areas, and you will likely find very little overlap with what CDM covers. Furthermore, as described earlier, Klaus frequently touches upon other mathematical fields like logic, algebra, and even analysis, and I was definitely not equipped with proper knowledge to fully appreciate the material. 

If you find yourself interested in theory, I would probably recommend going straight to 451 and 455 and then start taking grad level theory classes. However, if you're mathematically mature and wish to explore the less beaten path in theory, CDM won't disappoint you. 

##### 21-301 Combinatorics, *Alan Frieze*

You just have to take combinatorics if you're a CS student that's also doing math, right? I practically had no idea what combinatorics entails beyond counting before taking this class, so some of the topics like probabilistic and linear algebraic methods were quite eye-opening to me. We also covered other topics like Ramsey theory and Polya theory of counting. (Beware the content may vary depending on the instructor)

I personally wish the class had traded some of its breadth for depth to give us more time to absorb the material. Most of the topics only consisted of one or two lectures so some of them felt rushed. I didn't get to use any of the advanced techniques I learned in this class in subsequent studies (except elementary Ramsey theory), but I did become much more confident in basic counting. 

##### 85-241 Social Psychology, *Chante Cox-Boyd*

I chose this class for one of my gen-ed categories, and it ended up being one of my favorite gen-eds. The best part is that the content is closely related to your everyday life, as you will likely realize a lot of your thoughts or behaviors can be explained by ideas like self-sabotage, reactance theory, or mere exposure effects. Prof. Cox-Boyd is also an engaging lecturer so I enjoyed going to class. My only gripe is that the grade distribution and grading in general were quite frustrating; otherwise it is a fun and relevant choice of gen-ed. 

##### 98-317 Student Taught Courses (StuCo): Hype for Types, *Runming Li, Sonya Simkin, Yosef Alsuhaibani & Ari (Zach) Battleman*

This is a student taught course on type theory. It aims to expose you to a wide range of topics in type theory that are not necessarily correlated but are all intriguing. Quite a lot of the topics are borrowed from classes like 15-312 (algebraic datatype, continuation, etc.), 15-311 (Lean), compilers and category theory, while the other topics are less accessible (phantom types, dependent types). 

I like how they cherry-picked the "cool" topics in type theory, and I think this StuCo will help you gauge whether you want to further dive into programming language theory/logic before taking higher-level classes. Unfortunately I had a hard time focusing given that this course was at 7pm on Wednesdays, and for this reason I would love to sit back in some of the lectures in the future. By the way, the instructors are (almost always) current or former 150/312 TAs, so you will be in good hands. 

## Spring 2023

##### 15-330 Introduction to Computer Security, *Lujo Bauer*

This course has three major components: software exploit (213 attack lab on steroids), cryptography, and web exploit. It's interesting that these three components are drastically different, with software exploit being very low level, cryptography being very math heavy, and web exploit kind of being its own thing. Overall it's a standard CS class: moderate difficulty, teaches somewhat interesting material. 

I took this class because I thought I would be interested in computer security but I didn't fall in love with it afterward. Ironically, this class made me realize how much I missed 251-style content and thus turned me on to theory. I would say definitely take this class if you think you might be interested in security, and even if you don't, knowing basic security principles won't ever hurt you as a CS student. 

##### 21-266 Vector Calculus for Computer Scientists, *Clive Newstead*

I wasn't really interested in higher dimensional calculus and I didn't like the fact that this class was calculation-based and hence required proficiency on top of just understanding. Not really its fault for being the class that comes after Calc 2, but I would've chosen the easier counterpart 21-259 to fulfill the requirement if I could choose again. 

##### 76-270 Writing for the Professions

##### 80-100 Introduction to Philosophy, *Joel Smith*

I'm a person that would randomly think about philosophical questions so I thoroughly enjoyed the chance to study philosophy systematically. This class covered some classic questions in philosophy: how do we define morality? How do we obtain knowledge? What is the mind? I was able to scratch the itch by getting answers (or at least ideas; answers are rare in philosophy) to questions that I thought about but couldn't figure out on my own. 

I need to mention that Prof. Smith is a fantastic philosophy teacher. He is knowledgeable, kind, and knows how to guide students through puzzling concepts. Also, he has a master's degree in physics! During one class, he used the theory of relativity to illustrate how Bayesian epistemology suggests we can only increase our confidence in a claim by observing evidence. When a student asked, "Doesn't theory of relativity HAVE TO be true? What other theory explains everything so perfectly?" He immediately brought up three other theories consistent with the same observations. It was truly amazing to see that depth of knowledge from a philosophy professor.

This class requires a non-trivial amount of reading and writing for a gen-ed but I thought it was both fun and rewarding. I highly recommend this class, especially with Prof. Smith. 
<br>

## Fall 2022

##### 15-210 Parallel and Sequential Data Structures and Algorithms, *Frank Pfenning & Charlie Garrod*

Quite possibly my least favorite core class. I've been trying to figure out why I disliked the course, and one answer I could come up with is the presence of parallelism. First of all, for a first data structures and algorithms class, having to think about parallel complexity blurs the focus. Furthermore, the language of choice is Standard ML, likely because of parallelism. As much as I love functional programming, I don't believe a functional language is a good choice for most algorithm problems, and pseudocode in functional was comparatively unintuitive to me. 

I had a much better experience in the subsequent algorithm class 15-451. I heard rumors that they are reevaluating the curriculum in the near future and personally I think 210 could use some changes.

##### 15-251 Great Theoretical Ideas in Computer Science, *Anıl Ada*

>Computer science is no more about computers than astronomy is about telescopes. -- <cite>Edsger Dijkstra</cite>

This quote is both the motivation and the most important takeaway of 251. Computer science isn't really about digital computers or programming - it's about understanding how we can systematically and mechanically process information to solve problems. Digital computers are just one tool for carrying out these processes, and programming is one way to describe them. 251 introduces the basics of decidability, complexity, and some algorithms of theoretical interest in a challenging but manageable way, making it one of my favorite core classes.

Anıl is a great lecturer and an enthusiastic educator, which definitely contributed to my current passion for CS theory. I feel like theory is underappreciated by most CS students since it's "obscure" and "useless," but in my opinion, it is not only fundamental but also fascinating to study. (I do want to point out that Dijkstra's quote shouldn't be taken at face value in the modern age since now most of the field of computer science is intertwined with digital computers; however, it is a nice summary of what the core of computer science is.)

##### 21-241 Matrices and Linear Transformation, *Noha Abdelghany*

To be totally honest, I missed most of the lectures since they started at 9 am and instead watched recordings of MIT's linear algebra class. I ended up doing fine in the class but I didn't feel like I developed a solid understanding of the material, and I'm still regretting not putting in more effort. Linear algebra is crucial for computer science, especially in CS theory. Machine learning is a well-known example; you can also look into quantum computing and spectral graph theory. Make sure you pay attention in this class!

##### 21-295 Putnam Seminar, *Po-Shen Loh*

I took it because the wonderful Po-Shen Loh teaches it. Po-Shen Loh might be the most well-known CMU professor worldwide and it's for a good reason: it's hard not to be infected by his enthusiasm for math. This seminar prepares students for the Putnam competition, which is infamously challenging: it is scored out of 120 points and the median is often 0 or 1. Even if you're not sure about competition math, as long as you enjoy math, I highly recommend taking this class since it's a low-commitment way to interact with Po-Shen Loh and try some fun problems. 

##### 57-149 Basic Harmony I

<br>

## Summer 2022

##### 18-213 Introduction to Computer Systems, *Gregory Kesden*

Probably one of the most widespread CMU courses around the world. It dives deep into how a computer works under the hood and really sharpens your C programming skills. Some of the labs really excited me, especially the ones with a leaderboard; the others I didn't quite find amusing. Allegedly, a lot of the concepts taught in this class appear in interviews for low-level/hardware-adjacent positions.

## Spring 2022

##### 12-100 Exploring CEE: Infrastructure and Environment in a Changing World

##### 15-122 Principles of Imperative Computation, *Iliano Cervesato*

This is a good course in the sense that it builds you a very solid foundation in basic data structures and C programming. However, it was delivered in a rather unexciting way. 

##### 15-150 Principles of Functional Programming, *Michael Erdmann &  Karl Crary*

It is not an overstatement to say that this course decided my progression at CMU. Before taking this course, I had never heard of functional programming, but I was instantly captured by its elegance and its unique interpretation of computation. This was the first course at CMU that really challenged me intellectually, but as I got more used to "thinking functionally," I became more comfortable with the materials. 

I ended up TAing this course twice and was subsequently fed into the "programming language (PL) pipeline" as I took 15-312 and compilers. Let me take the chance to share my two cents on functional programming (FP): it's not the solution to everything and I don't believe we should ditch imperative and embrace functional. FP however excels in certain areas like safety and expressiveness (strong type systems/higher order functions), so perhaps a mixture of the two is the answer. 

##### 70-100 Global Business
<br>

## Fall 2021

##### 18-100 Introduction to Electrical and Computer Engineering, *Jimmy Zhu*

I started out as an ECE major when I entered CMU which is why I took this class. Since I then switched majors, I didn't really get to use anything I learned from this class. However, it ended up completing the "missing piece" in my CS education: CMU CS doesn't require their students to take any hardware class, so if it wasn't for this class, I likely wouldn't know how a digital computer functions down to the transistor level. 

##### 21-122 Integration and Approximation, *Lihan Wang*

I had AP credit for Calc 2 so I didn't need to take this class. I only took it because my freshman CIT advisor wrote to us in an email and I quote 
>A word on calculus: it is the fundamental core to engineering (you could say it’s *integral* to engineering...womp womp).

Haha... Throughout the class I didn't feel like I needed a refresher on the content. Therefore I would suggest not repeating a class you have credit for unless you have quite literally forgotten everything. 

##### 21-127 Concepts of Mathematics, *Clive Newstead*

My favorite class this semester. It introduces all the basic ideas in college-level math and teaches you how to write proofs. The class showed me a whole new world of mathematics and I absolutely loved it. This was the point where I decided to pursue a minor in math. 

##### 76-101 Interpretation and Argument

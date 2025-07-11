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
In these reviews, I chose to focus on how each class would fit into my (and maybe your) Computer Science education, rather than giving advice on how to succeed in the course. I think CMU has a unique curriculum in the sense that it exposes you to many fundamental areas of the field, and I hope this guide can help you take advantage of that. It is worth noting that I wrote all these reviews after completing undergrad, so I was able to evaulate these courses with a fuller picture. 

This page contains (or at least will contain) every class I took at CMU, not just limited to CS or math. If you don't see any comment on a particular course, it probably means that I don't have much to say about it. Lastly, if you have any questions about the reviews, please don't hesitate to reach out to me! I'd be glad to know someone is reading my reviews. 

## Fall 2023

##### 11-485 Introduction to Deep Learning, *Bhiksha Raj*

By far my least favorite class in undergrad. You can potentially learn a ton from this course, but there are just so many things about it that make taking it a frustrating experience. 

This course aims to give you a comprehensive overview of the field of deep learning, by introducing notable architectures including CNN, RNN, and all the way to the celebrated transformer architecture. It covers every architecture in great detail and on top of that requires you to train your own models on given datasets, for tasks like image recognition or speech to text transcription. 

My biggest issue with this course is that it advertises itself as an intro class. Yes, in theory, you don't need any deep learning, or even machine learning background to pass every quiz and finish every homework. However, without proper context or previous exposure, you can easily get lost given how dense each lecture is: almost every lecture's slide deck has 100+ pages in pdf format. Much of the motivation and crucial concepts are quickly brushed through, and the sheer amount of material makes it hard to recover once you fall behind.

Something else that bothers me is the disconnection between the lecture and the homework. While the lecture explains the underlying theory, the homework requires you to build and train your own model with PyTorch. I get that the idea of introducing both theory and hands-on experience is appealing, but it also means that students have to spend a huge amount of time outside of class to build the required skillset. This is not even accounting for the time-consuming and uncertain nature of model training. 

In conclusion, I believe you can learn a tremendous amount if you have the proper background and are willing to put in the time, but otherwise, this course can easily be overwhelming and bring distress. Because of this class, I stayed away from ML for the rest of my undergrad.

##### 15-354 Computational Discrete Math, *Klaus Sutner*

After deciding to get involved in CS theory, I found this class from the list of electives that count for the <a href='http://coursecatalog.web.cmu.edu/schools-colleges/schoolofcomputerscience/scsconcentrations/#algorithmsandcomplexitytextcontainer'>theory concentration</a>. Computational Discrete Math (CDM) introduces interesting topics that are hard to find elsewhere, but it probably isn't the best 251 follow-up course, for the reasons I'll get into later. 

CDM covers topics like models of computation (primitive recursion/register machine), advanced automata theory, and different mathmatical concepts, including logic, algebra, and iterations, from a computational standpoint. You would be able to learn some cool computational facts and how various fields of mathematics play a role in the world of computation. 

Klaus has been teaching theory at CMU for a long time and CDM is his signature class. He is extremely knowledgable and humorous in his own way so I really enjoyed the lectures. His teaching style is kind of a hit or miss though since I've heard people reacting differently to his lectures. 

On to why I said you should think twice before picking this class as your first non-introductory theory class. The biggest reason is this class is more of a "introducing topics Klaus finds amusing" class: it deviates quite a lot from the mainstream theory topics. Check out other CMU theory professors' research interests to get an idea of the active research areas, and you will likely find very little overlap with what CDM covers. Furthermore, as described earlier, Klaus frequently touches upon other mathematical fields like logic, algebra, and even analysis, and I was definietely not equipped with proper knowledge to fully appreicate the material. 

If you find yourself interested in theory, I would probably recommend going straight to 451 and 455 and then start taking grad level theory classes. However, if you're mathematically tumare and wish to explore the less beaten path in theory, CDM won't disappoint you. 


## Spring 2023

##### 15-330 Introduction to Computer Security, *Lujo Bauer*

This course has three major components: software exploit (213 attack lab on steroids), cryptography, and web exploit. It's interesting that these three components are drastically different, with software exploit being very low level, cryptography being very math heavy, and web exploit kind of being its own thing. Overall it's a standard CS class: moderate difficulty, teaches somewhat interesting material. 

I took this class because I thought I would be interested in computer security but I didn't fall in love with it afterward. Ironically, this class made me realize how much I missed 251-style content and thus turned me on to theory. I would say definitely take this class if you think you might be interested in security, and even if you don't, knowing basic security principles won't ever hurt you as a CS student. 

##### 21-266 Vector Calculus for Computer Scientists, *Clive Newstead*

I wasn't really interested in higher dimensional calculus and I didn't like the fact that this class was calculation-based and hence required proficiency on top of just understanding. Not really its fault for being the class that comes after Calc 2, but I would've chosen the easier counterpart 21-259 to fulfill the requirement if I could choose again. 

##### 76-270 Writing for the Professions

##### 80-100 Introduction to Philosophy, *Joel Smith*

I'm a person that would randomly think about philosophical questions so I thoroughly enjoyed the chance to study philosophy systematically. This class covered some classic questions in philosophy: how do we define morality? How do we obtain knowledge? What is the mind? I was able to scratch the itch by getting answers (or at least ideas; answers are rare in philosophy) to questions that I thought about but couldn't figure out on my own. 

I need to mention that Prof. Smith is a fantastic philsophy teacher. He is knowledgable, kind, and knows how to guide students through puzzling concepts. Also, he has a master's degree in physics! During one class, he used the theory of relativity to illustrate how Bayesian epistemology suggests we can only increase our confidence in a claim by observing evidence. When a student asked, "Doesn't theory of relativity HAVE TO be true? What other theory explains everything so perfectly?" He immediately brought up three other theories consistent with the same observations. It was truly amazing to see that depth of knowledge from a philosophy professor.

This class requires a non-trival amount of reading and writing for a gen-ed but I thought it was both fun and rewarding. I highly recommend this class, especially with Prof. Smith. 

## Fall 2022

##### 15-210 Parallel and Sequential Data Structures and Algorithms, *Frank Pfenning & Charlie Garrod*

Quite possibly my least favorite core class. I've been trying to figure out why I disliked the course, and one answer I could come up with is the presence of parallelism. First of all, for a first data structures and algorithms class, having to think about parallel complexity blurs the focus. Furthermore, the language of choice is Standard ML, likely because of parallelism. As much as I love functional programming, I don't believe a functional language is a good choice for most algorithm problems, and pseudocode in functional was comparatively unintuitive to me. 

I had a much better experience in the subsequent algorithm class 15-451. I heard rumors that they are reevaluating the curriculum in the near future and personally I think 210 could use some changes. 

##### 15-251 Great Theoretical Ideas in Computer Science, *Anıl Ada*

>Computer science is no more about computers than astronomy is about telescopes. -- <cite>Edsger Dijkstra</cite>

This quote is both the motivation and the most important takeaway of 251. Computer science isn't really about digital computers or programming - it's about understanding how we can systematically and mechanically process information to solve problems. Digital computers are just one tool for carrying out these processes, and programming is one way to describe them. 251 introduces the basics of decidibility, complexity and some algorithms of theoretical interests in a challenging but manageable way, making it one of my favorite core classes. 

Anıl is a great lecturer and an enthusatic educator, which definitely contributed to my current passion for CS theory. I feel like theory is underappreciated by most CS students since it's "obsure" and "useless", but in my opinion it is not only fundamental but also fascinating to study. (I do want to point out that Dijkstra's quote shouldn't be taken at face value in modern age since now most of the field of computer science is intertwined with digital computers, however it is a nice summary of what the core of computer science is)

##### 21-241 Matrices and Linear Transformation, *Noha Abdelghany*

To be totally honest, I missed most of the lectures since they started at 9 am and instead watched recording of MIT's linear algebra class. I ended up doing fine in the class but I didn't feel like I developed a solid understanding of the material, and I'm still regretting not putting in more effort. Linear algebra is crucial for computer science, especially in CS theory. Machine learning is a well-known example; you can also look into quantum computing and spectral graph theory. Make sure you pay attention in this class!

##### 21-295 Putnam Seminar, *Po-Shen Loh*

I took it because the wonderful Po-Shen Loh teaches it. Po-Shen Loh might be the most well-known CMU professor worldwide and it's for a good reason: it's hard not to be infected by his enthusiasm for math. This seminar prepares students for the Putnam competition, which is infamously challenging: it is scored out of 120 points and the median is often 0 or 1. Even if you're not sure about competition math, as long as you enjoy math, I highly recommend taking this class since it's a low-commitment way to interact with Po-Shen Loh and try some fun problems. 

##### 57-149 Basic Harmony I

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

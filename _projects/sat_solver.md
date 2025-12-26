---
layout: page
title: "SAT solver heuristic: directed Ramsey numbers"
description: This research project explores a new heuristic to speed up SAT solvers on problems with special structures, using directed Ramsey numbers as a case study. 
img: assets/img/sat_solver.png
importance: 2
---

[Link to poster]({{ '/assets/pdf/poster.pdf' | relative_url }})

The poster is a concise but complete summary of my research project.  

<!-- SAT solvers are powerful tools for tackling computationally hard problems and have helped drive progress in proving combinatorial theorems. Solvers based on stochastic local search (SLS) are particularly effective for combinatorial problems, but they tend to struggle when the encoding introduces many auxiliary variables. In contrast, solvers based on conflict-driven clause learning (CDCL) work by learning global constraints from failures, while SLS solvers make small local changes to a candidate solution. In this project, I explored a heuristic for SLS solvers that reasons beyond these auxiliary variables, using directed Ramsey numbers as a case study.

If you’re not familiar with SAT solvers, this may be a lot to digest. I recommend reading my research poster (linked above), which explains the project at a high level. I’ll give an even more concise summary here. Many combinatorial structures are finite, which means we can, in principle, search through all such structures to find those with special properties. We do this by encoding the problem as a SAT instance and running a solver. For certain problems, the encoding has two semantic “layers” of constraints. Roughly speaking, instead of flipping individual SAT variables, the heuristic operates directly on edges of the underlying graph, which better matches the combinatorial structure of the problem. The heuristic is therefore fixing one layer and only modifying the other during search.

This heuristic provides a significant speedup compared to existing SLS solvers. However, solvers based on CDCL benefit more from partial initialization of the graph, while SLS solvers do not. As a result, my solver was ultimately not fast enough to push the existing lower bound of the directed Ramsey number. I may revisit this project in the future to further optimize the solver, which is why I’m not releasing the code at this time. -->
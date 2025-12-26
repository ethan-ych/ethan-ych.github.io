// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-course-reviews",
          title: "Course Reviews",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "projects-lfpl",
          title: 'LFPL+',
          description: "Every program you can write in LFPL will run in polynomial time! We implemented a programming language that has a substructural type system and previously only existed in textbooks and papers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lfpl_plus/";
            },},{id: "projects-sat-solver-heuristic-directed-ramsey-numbers",
          title: 'SAT solver heuristic: directed Ramsey numbers',
          description: "This research project explores a new heuristic to speed up SAT solvers on problems with special structures, using directed Ramsey numbers as a case study.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sat_solver/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%74%68%61%6E%79%63%68@%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ethanych", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

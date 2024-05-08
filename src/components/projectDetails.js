import { android, c, css, figma, firebase, git, html, java, javascript, jira, mongodb, python, react, tex, asm, linux } from '../img/technologies-icons';

const projects = [
  {
    id: 1,
    name: "Walnut Course Scheduler",
    languages: [
      { name: "Java", icon: java },
      { name: "Firebase", icon: firebase },
      { name: "Android", icon: android },
    ],
    description: [
      "Designed an Android mobile app with user-friendly front-end interfaces in an Agile Scrum of 5.",
      "Integrated Firebase Realtime Database applied OOP and SOLID principles for efficient back-end development."
    ],
  },
  {
    id: 2,
    name: "System Monitoring Tool",
    languages: [
      { name: "Linux", icon: linux },
      { name: "C", icon: c },
    ],
    description: [
      "Developed a real-time system monitoring tool with concurrent queries for memory, CPU, and user connections.",
      "Utilized POSIX APIs for efficient system-level programming and pipes for communication and output sequencing.",
      "Implemented dynamic data visualization for metrics, and customization through command-line arguments."
    ],
  },
  {
    id: 3,
    name: "File Descriptor Monitoring Tool",
    languages: [
      { name: "Linux", icon: linux },
      { name: "C", icon: c },
    ],
    description: [
      "Implemented file descriptor monitoring tool using POSIX APIs by accessing `/proc` filesystem and linked lists for dynamic data management.",
      "Supported customizable output options through command-line argument and output in text and binary formats.",
    ],
  },
  {
    id: 4,
    name: "Reinforcement Learning in Gridworld",
    languages: [
      { name: "Python", icon: python },
    ],
    description: [
      "Adjusted parameters (discount factor, learning rate) to study behavioral changes and strategy effectiveness.",
      "Enhanced performance by refining strategies through learning from interactions within dynamic environments.",
      "Adjusted parameters (discount factor, learning rate) to study behavioral changes and strategy effectiveness."
    ],
  },
  {
    id: 5,
    name: "AI-Based Search and Multi-Agent Strategies in Pacman",
    languages: [
      { name: "Python", icon: python },
    ],
    description: [
      "Implemented search algorithms (UCS, A*) and multi-agent strategies (Minimax, Alpha-Beta Pruning, Expectimax).",
      "Optimized algorithms and developed an evaluation function for assessing game states and agent decisions.",
    ],
  },
  {
    id: 6,
    name: "Ghost Tracking in Pacman",
    languages: [
      { name: "Python", icon: python },
    ],
    description: [
      "Implemented inference algorithms, including Bayesian networks and particle filters, to analyze noisy distance readings for precise ghost localization.",
      "Enhanced gameplay through dynamic ghost movement predictions, significantly improving agent adaptability and performance in complex environments.",
    ],
  },
  {
    id: 7,
    name: "Escape the Ghost",
    languages: [
      { name: "Assembly", icon: asm },
    ],
    description: [
      "Developed an interactive game with player movement mechanics, platform interactions, and gravity effects.",
      "Implemented collision-based outcomes, including game-over scenarios and victories.",
      "Designed multiple gameplay modes, with distinct behaviors, enhancing user engagement."
    ],
  },
  {
    id: 8,
    name: "Graffit Social Networking Platform",
    languages: [
      { name: "C", icon: c },
    ],
    description: [
      "Created standalone social networking platform with recommendation system.",
      "Utilized graph ADT for efficient user relationship modeling.",
    ],
  },

  {
    id: 9,
    name: "Quadtree Image Decomposition",
    languages: [
      { name: "C", icon: c },
    ],
    description: [
      "Implemented image decomposition program in C, leveraging binary tree ADT for efficient data management.",
      "Enabled image loading and essential processing operations, including pixel management.",
      "•	Developed region splitting algorithm based on color similarity and user-defined threshold."
    ],
  },
];

export default projects;

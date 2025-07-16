const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config(); // if backend is a subfolder

console.log("🧪 Checking MONGODB_URI:", process.env.MONGO_URI);



const sampleQuestions = [
  {
    "title": "Kadane's Algorithm",
    "description": "This is a question about kadane's algorithm. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "medium",
    "tags": [
      "array"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Check Palindrome",
    "description": "This is a question about check palindrome. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "easy",
    "tags": [
      "string"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Binary Search",
    "description": "This is a question about binary search. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "easy",
    "tags": [
      "search"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Merge Sort",
    "description": "This is a question about merge sort. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "medium",
    "tags": [
      "sorting"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Quick Sort",
    "description": "This is a question about quick sort. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "medium",
    "tags": [
      "sorting"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Fibonacci (DP)",
    "description": "This is a question about fibonacci (dp). Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "easy",
    "tags": [
      "dp"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Longest Common Subsequence",
    "description": "This is a question about longest common subsequence. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "medium",
    "tags": [
      "dp"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Dijkstra's Algorithm",
    "description": "This is a question about dijkstra's algorithm. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "hard",
    "tags": [
      "graph"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Find Missing Number",
    "description": "This is a question about find missing number. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "easy",
    "tags": [
      "array"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Two Sum",
    "description": "This is a question about two sum. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "easy",
    "tags": [
      "array"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Reverse a Linked List",
    "description": "This is a question about reverse a linked list. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "easy",
    "tags": [
      "linked list"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Detect Cycle in Graph",
    "description": "This is a question about detect cycle in graph. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "medium",
    "tags": [
      "graph"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Topological Sort",
    "description": "This is a question about topological sort. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "medium",
    "tags": [
      "graph"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Valid Parentheses",
    "description": "This is a question about valid parentheses. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "easy",
    "tags": [
      "stack"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Min Stack",
    "description": "This is a question about min stack. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "medium",
    "tags": [
      "stack"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Rotten Oranges (BFS)",
    "description": "This is a question about rotten oranges (bfs). Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "medium",
    "tags": [
      "graph"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Find Peak Element",
    "description": "This is a question about find peak element. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "medium",
    "tags": [
      "binary search"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Median of Two Sorted Arrays",
    "description": "This is a question about median of two sorted arrays. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "hard",
    "tags": [
      "array"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Trapping Rain Water",
    "description": "This is a question about trapping rain water. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "hard",
    "tags": [
      "two pointer"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  },
  {
    "title": "Sliding Window Maximum",
    "description": "This is a question about sliding window maximum. Solve it using appropriate algorithms.",
    "input_format": "Input will vary depending on problem.",
    "output_format": "Output depends on the problem statement.",
    "sample_input": "sample input",
    "sample_output": "sample output",
    "constraints": "1 <= n <= 10^5",
    "difficulty": "hard",
    "tags": [
      "deque"
    ],
    "test_cases": [
      {
        "input": "test input 1",
        "output": "expected output 1"
      },
      {
        "input": "test input 2",
        "output": "expected output 2"
      }
    ]
  }
];

const insertSampleQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Question.deleteMany();
    await Question.insertMany(sampleQuestions);

    console.log("✅ Sample questions inserted successfully.");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting questions:", error);
    process.exit(1);
  }
};

insertSampleQuestions();

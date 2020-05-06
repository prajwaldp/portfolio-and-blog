import React from 'react'

const data = [
  {
    title: "Social Networking Web Application for Storyhoot",
    items: [
      "Developed a web application with Ruby on Rails that allowed users to create and share GIFs.",
      "Used Elasticsearch to implement fast full-text search on the PostgreSQL database.",
      "Deployed and maintained the app on a DigitalOcean Linux cloud server for 1000 active users."
    ],
    links: [
      {
        text: "Source",
        href: "https://github.com/prajwaldp/storyhoot"
      }
    ],
    tags: [
      "Full-Stack Web Development"
    ],
    technologies: [
      "Ruby on Rails",
      "ElasticSearch",
      "PostgreSQL"
    ]
  },

  {
    title: "Distributed Microblogging Website Engine",
    items: [
      "Developed a distributed engine for a twitter-like application with Phoenix and Elixir.",
      "Simulated the engine with a load of 1000 concurrent users, where it could perform 500 functional operations and deliver 200 notifications to a Vue.js front-end in one second, utilizing all CPU cores."
    ],
    links: [
      {
        text: "Source",
        href: "https://github.com/prajwaldp/distributed-twitter-engine"
      },
      {
        text: "Demo",
        href: "https://youtu.be/96pKx_2NXIk"
      }
    ],
    tags: [
      "Software Engineering",
      "Full Stack Web Development",
      "Distributed Computing"
    ],
    technologies: [
      "Elixir",
      "Phoenix",
      "Vue.js"
    ]
  },

  {
    title: "Human Resources Analytics",
    items: [
      "Analyzed the Human Resources dataset from Kaggle, using statistical modelling to verify its authenticity, and hypothesis testing to determine the correlation between the metrics measured.",
      "Built and compared three machine learning models, of which the decision tree classifier predicted which employees would leave, with an accuracy of 96%."
    ],
    links: [
      {
        text: "IPython Notebook",
        href: "https://nbviewer.jupyter.org/github/prajwaldp/kaggle-human-resource-analytics/blob/master/HR-analytics.ipynb"
      }
    ],
    tags: [
      "Machine Learning",
      "Data Analysis"
    ],
    technologies: [
      "Pandas",
      "scikit-learn",
      "Matplotlib"
    ]
  },

  {
    title: "Software Fault Prediction using Artificial Neural Networks",
    items: [
      "Developed a neural network with Keras/TensorFlow that used object-oriented metrics to predict software faults with a 10-fold cross-validation accuracy of 84.36% and a ROC AUC of 0.8."
    ],
    links: [
      {
        text: "Source",
        href: "https://github.com/prajwaldp/software-fault-prediction-using-ann"
      },
      {
        text: "Paper",
        href: "https://github.com/prajwaldp/software-fault-prediction-using-ann/blob/master/paper/Software-Fault-Prediction-using-Artificial-Neural-Networks.pdf"
      }
    ],
    tags: [
      "Machine Learning"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy"
    ]
  },

  {
    title: "Simulation of Distributed Algorithms - Gossip, Push-Sum and Tapestry DHT",
    items: [
      "Developed the algorithms, routing and communication between processes (peers) on the Erlang VM, with the Gossip and Push-Sum algorithms reaching 100% convergence for 5000 nodes arranged in the 3D torus and honeycomb topologies, and the Tapestry DHT performing 100,000 lookups with a maximum of 6 hops in 20 minutes."
    ],
    links: [
      {
        text: "Gossip and Push-Sum Source",
        href: "https://github.com/prajwaldp/gossip-push-sum"
      },
      {
        text: "Tapestry DHT Source",
        href: "https://github.com/prajwaldp/tapestry-dht-simulation"
      }
    ],
    tags: [
      "Distributed Computing"
    ],
    technologies: [
      "Elixir"
    ]
  },

  {
    title: "Design of Swarm Intelligence Methodologies and Machine Learning for Terrain Mapping",
    items: [
      "Worked in a three-person team to build three robots that cooperatively generate the map of an unknown environment using the ORB-SLAM2 Computer Vision algorithm.",
      "Developed the swarm dispersion algorithm and tested it on the ARGoS multi-robot simulator.",
      "Devised a reinforcement training algorithm on OpenAI Gym to adapt the robots’ movement for different terrains."
    ],
    links: [
      {
        text: "Source",
        href: "https://github.com/prajwaldp/mcswarm"
      },
      {
        text: "Report",
        href: "https://github.com/prajwaldp/mcswarm/blob/master/report.pdf"
      }
    ],
    tags: [
      "Hardware",
      "Swarm Intelligence",
      "Reinforcement Learning"
    ],
    technologies: [
      "C++",
      "ORB-SLAM2",
      "Arduino",
      "Python"
    ]
  }
]

const ProjectCard = ({ projectData }) => {
  let listItems = projectData.items.map((e, i) => (
    <li key={i} className="mt-2 leading-5">{e}</li>
  ))

  let tags = projectData.tags.map((e, i) => (
    <span key={i} className="inline-block bg-purple-400 text-gray-100 px-2 mr-1 my-1 text-xs uppercase tracking-wider rounded-lg">{e}</span>
  ))

  let links = projectData.links.map((e, i) => (
    <span key={i} className="inline-block mr-4 underline text-blue-500"><a href={e.href} target="_blank" rel="noopener noreferrer">{e.text}</a></span>
  ))

  let technologies = projectData.technologies.map((e, i) => (
    <span key={i} className="inline-block bg-teal-400 text-gray-100 px-2 mr-1 my-1 text-xs uppercase tracking-wider rounded-lg">{e}</span>
  ))

  return (
    <div className="w-full mt-10 p-3 bg-white shadow">
      <h3 className="text-gray-700 font-semibold text-2xl">{projectData.title}</h3>

      <div className="mt-1">
        {tags}
        {technologies}
      </div>

      <ul className="mt-3 list-none text-gray-800">
        {listItems}
      </ul>

      <div className="mt-3">
        {links}
      </div>
    </div>
  )
}

const Projects = () => {

  let projectCards = data.map((p, i) => {
    return <ProjectCard projectData={p} key={i} />
  })

  return (
    <div className="flex flex-col">
      {projectCards}
    </div>
  )
}

export default Projects

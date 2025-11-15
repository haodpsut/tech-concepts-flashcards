import { Category } from './types';

export const CONCEPT_CATEGORIES: Category[] = [
  {
    title: "Quantum Computing & QML",
    concepts: [
        // Core Quantum Concepts
        { name: "Qubit" },
        { name: "Superposition" },
        { name: "Entanglement" },
        { name: "Quantum Gates" },
        { name: "Quantum Measurement" },
        { name: "Decoherence" },
        { name: "No-Cloning Theorem" },
        { name: "Quantum Tunneling" },
        { name: "Quantum Teleportation" },

        // Computational Models & Eras
        { name: "Quantum Circuit Model" },
        { name: "Quantum Annealing" },
        { name: "Adiabatic Quantum Computing" },
        { name: "Topological Quantum Computing" },
        { name: "NISQ (Noisy Intermediate-Scale Quantum) Era" },
        
        // Quantum Hardware & Metrics
        { name: "Superconducting Qubits" },
        { name: "Trapped-Ion Qubits" },
        { name: "Photonic Qubits" },
        { name: "Transmon Qubit" },
        { name: "Quantum Volume" },
        
        // Key Algorithms
        { name: "Shor's Algorithm" },
        { name: "Grover's Algorithm" },
        { name: "Quantum Fourier Transform" },
        { name: "Hamiltonian Simulation" },
        { name: "Quantum Phase Estimation" },
        { name: "Variational Quantum Eigensolver (VQE)" },
        { name: "Quantum Approximate Optimization Algorithm (QAOA)" },

        // Quantum Error Correction
        { name: "Quantum Error Correction (QEC)" },
        { name: "Quantum Supremacy" },
        { name: "Quantum Advantage" },
        
        // Quantum Machine Learning (QML)
        { name: "Quantum Machine Learning (QML)" },
        { name: "Quantum Neural Networks (QNNs)" },
        { name: "Quantum Kernels" },
        { name: "Quantum Support Vector Machine (QSVM)" },
        { name: "Parameterized Quantum Circuits (PQC)" },
        { name: "Hybrid Quantum-Classical Algorithms" },
        { name: "Quantum Data Encoding" },
        { name: "Quantum Feature Maps" },
        { name: "Barren Plateaus in QNNs" },
        { name: "Quantum Convolutional Neural Networks (QCNN)" },
        { name: "Quantum Generative Adversarial Networks (QGANs)" },
        { name: "Quantum Principal Component Analysis (QPCA)" },

        // Advanced Topics
        { name: "Quantum Control" },
        { name: "Pulse-level control of qubits" },
        { name: "Quantum algorithm compilation" },
        { name: "Quantum-resistant cryptography" },
        { name: "Quantum Random Number Generation (QRNG)" },
    ],
  },
  {
    title: "AI (FL & DRL)",
    concepts: [
        // Federated Learning Core
        { name: "Federated Learning (FL)" },
        { name: "Centralized Federated Learning" },
        { name: "Decentralized Federated Learning" },
        { name: "FedAvg Algorithm" },
        { name: "FedProx Algorithm" },
        { name: "Horizontal Federated Learning" },
        { name: "Vertical Federated Learning" },
        { name: "Federated Transfer Learning" },
        { name: "Split Learning" },
        
        // FL Challenges & Solutions
        { name: "Communication Overhead in FL" },
        { name: "Non-IID Data in FL" },
        { name: "Byzantine-Robust Aggregation" },
        { name: "Personalized Federated Learning" },
        { name: "Asynchronous Federated Learning" },
        
        // FL Security & Privacy
        { name: "Differential Privacy" },
        { name: "Homomorphic Encryption" },
        { name: "Secure Multi-Party Computation (SMPC)" },
        { name: "Model Poisoning Attacks in FL" },
        { name: "Data Poisoning Attacks in FL" },

        // Deep Reinforcement Learning (DRL) Fundamentals
        { name: "Deep Reinforcement Learning (DRL)" },
        { name: "Markov Decision Process (MDP)" },
        { name: "Bellman Equations" },
        { name: "Exploration vs. Exploitation Dilemma" },
        { name: "On-Policy vs. Off-Policy Learning" },
        { name: "Value Function vs. Policy Function" },
        { name: "Discount Factor (Gamma) in RL" },
        { name: "Reward Shaping" },

        // DRL Algorithm Families
        { name: "Value-based: Q-Learning" },
        { name: "Value-based: Deep Q-Network (DQN)" },
        { name: "Value-based: Double DQN" },
        { name: "Policy-based: REINFORCE Algorithm" },
        { name: "Policy-based: Trust Region Policy Optimization (TRPO)" },
        { name: "Actor-Critic: Advantage Actor-Critic (A2C)" },
        { name: "Actor-Critic: Proximal Policy Optimization (PPO)" },
        { name: "Actor-Critic: Deep Deterministic Policy Gradient (DDPG)" },
        { name: "Actor-Critic: Soft Actor-Critic (SAC)" },

        // Advanced DRL Concepts
        { name: "Reinforcement Learning from Human Feedback (RLHF)" },
        { name: "Inverse Reinforcement Learning (IRL)" },
        { name: "Multi-Agent Reinforcement Learning (MARL)" },
        { name: "Hierarchical Reinforcement Learning (HRL)" },
        { name: "Model-Based Reinforcement Learning" },
        { name: "Model-Free Reinforcement Learning" },
        { name: "Curiosity-Driven Exploration" },
        { name: "Hindsight Experience Replay (HER)" },
        { name: "Imitation Learning" },
        { name: "Behavioral Cloning" },
        { name: "Generative Adversarial Imitation Learning (GAIL)" },
    ],
  },
  {
    title: "Satellite Networks & NTNs",
    concepts: [
        // Architectures & Orbits
        { name: "Low Earth Orbit (LEO) Constellations" },
        { name: "Medium Earth Orbit (MEO) Constellations" },
        { name: "Geostationary Orbit (GEO) Constellations" },
        { name: "Space-Air-Ground Integrated Networks (SAGINs)" },
        { name: "Non-Terrestrial Networks (NTN)" },
        { name: "Direct-to-Cell Connectivity" },
        
        // Core System Concepts
        { name: "Intersatellite Links (ISLs)" },
        { name: "Beamforming in Satellite Communication" },
        { name: "Phased-Array Antennas" },
        { name: "Regenerative vs. Transparent Payloads" },
        { name: "Satellite Footprint and Beam Hopping" },
        { name: "Earth Stations (Gateways)" },
        { name: "User Terminals (UT)" },
        
        // Network Management & Optimization
        { name: "Resource Allocation in NTN" },
        { name: "Handover Management in NTN" },
        { name: "Trajectory Optimization" },
        { name: "Coverage Optimization" },
        { name: "Task Offloading in NTN" },
        { name: "Routing in LEO Constellations" },
        { name: "Network Slicing in NTNs" },
        { name: "Quality of Service (QoS) in NTN" },
        
        // Physical Layer & Propagation
        { name: "Doppler Shift Compensation" },
        { name: "Rain Fade and Atmospheric Attenuation" },
        { name: "Propagation Delay" },
        { name: "Link Budget Analysis" },
        { name: "Carrier-to-Noise Ratio (C/N)" },
        { name: "Free-space optical communication (FSO)" },
        
        // Integration & Services
        { name: "5G NR-NTN Integration" },
        { name: "Edge Computing in SAGINs" },
        { name: "Service Continuity in NTN" },
        { name: "Satellite Backhauling" },
        { name: "IoT over Satellite (Satellite-IoT)" },
        { name: "Broadcast and Multicast Services" },
        { name: "Integrated Access and Backhaul (IAB) with NTN" },

        // Advanced Topics & Technologies
        { name: "Software-Defined Networking (SDN) for Satellite Networks" },
        { name: "Network Function Virtualization (NFV) in NTNs" },
        { name: "Spectrum Sharing in NTN" },
        { name: "Orbital Mechanics for Constellations" },
        { name: "Space Debris Mitigation" },
        { name: "Security in NTN (e.g., Anti-Jamming)" },
        { name: "Time Synchronization in Satellite Networks" },
        { name: "Ground Station as a Service (GSaaS)" },
    ],
  },
    {
    title: "Research Intersections",
    concepts: [
        { name: "Quantum-Enhanced DRL for Dynamic Resource Allocation" },
        { name: "Federated Learning for Collaborative Earth Observation" },
        { name: "QSVM for Satellite Signal Classification" },
        { name: "Quantum Key Distribution (QKD) for Securing Federated Learning" },
        { name: "Hybrid RF-FSO links for SAGINs" },
        { name: "AI-driven Beam Management in NTNs" },
        { name: "Federated Reinforcement Learning for Multi-Satellite Coordination" },
        { name: "Quantum Sensing for Earth Observation Satellites" },
    ],
  }
];